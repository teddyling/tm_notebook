import "./code-cell.css";
import React from "react";

import { useEffect } from "react";
import CodeEditor from "./code-editor";
import Preview from "./Preview";

import Resizable from "./resizable";
import { Cell } from "../state";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/use-typed-selector";
interface CodeCellProps {
  cell: Cell;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundle[cell.id]);
  const cumulativeCode = useTypedSelector((state) => {
    const { data, order } = state.cells;
    const orderedCells = order.map((id) => data[id]);

    const showFunc = `
    import _React from 'react';
    import _ReactDOM from 'react-dom';
    var show = (value) => {
      if (typeof value === 'object') {
        if (value.$$typeof && value.props) {
          return _ReactDOM.render(value, document.querySelector('#root'));
        }
        return document.querySelector('#root').innerHTML = JSON.stringify(value);
      }
      document.querySelector('#root').innerHTML = value;
    };
  `;
    const showFuncNoop = `var show = () => {}`;

    const cumulativeCode = [];
    for (let c of orderedCells) {
      if (c.type === "code") {
        if (c.id === cell.id) {
          cumulativeCode.push(showFunc);
        } else {
          cumulativeCode.push(showFuncNoop);
        }
        cumulativeCode.push(c.content);
      }
      if (c.id === cell.id) {
        break;
      }
    }
    return cumulativeCode;
  });

  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cumulativeCode.join("\n"));
      return;
    }

    const timer = setTimeout(async () => {
      createBundle(cell.id, cumulativeCode.join("\n"));
    }, 1200);

    return () => {
      clearTimeout(timer);
    };
  }, [cumulativeCode.join("\n"), cell.id, createBundle]);

  return (
    <Resizable direction="vertical">
      <div
        style={{
          height: "calc(100% - 10px)",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </Resizable>
        <div className="progress-wrapper">
          {!bundle || bundle.loading ? (
            <div className="progress-cover">
              <progress className="progress is-small is-primary" max="100">
                Loading
              </progress>
            </div>
          ) : (
            <Preview code={bundle.code} err={bundle.error} />
          )}
        </div>
      </div>
    </Resizable>
  );
};

export default CodeCell;
