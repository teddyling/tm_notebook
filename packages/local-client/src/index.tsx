import "bulmaswatch/solar/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./state";
import CodeCell from "./Components/code-cell";
import TextEditor from "./Components/text-editor";
import CellList from "./Components/cell-list";

const el = document.getElementById("root");
const root = ReactDom.createRoot(el!);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <CellList />
        {/* <CodeCell /> */}
        {/* <TextEditor /> */}
      </div>
    </Provider>
  );
};

root.render(<App />);
