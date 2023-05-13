import { ResizableBox, ResizableBoxProps } from "react-resizable";
import { useEffect, useState } from "react";
import "./resizable.css";
interface ResizableProps {
  direction: "horizontal" | "vertical";
  children: React.ReactNode;
}

const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  let resizableProps: ResizableBoxProps;

  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [width, setWidth] = useState(window.innerWidth * 0.75);

  useEffect(() => {
    let timer: any;
    const listener = () => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        setInnerHeight(window.innerHeight);
        setInnerWidth(window.innerWidth);
        if (window.innerWidth * 0.75 < width) {
          setWidth(window.innerWidth * 0.75);
        }
      }, 100);
    };
    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [width]);

  if (direction === "vertical") {
    resizableProps = {
      maxConstraints: [Infinity, innerHeight * 0.75],
      minConstraints: [Infinity, innerHeight * 0.2],
      height: 300,
      width: Infinity,
      resizeHandles: ["s"],
    };
  } else {
    resizableProps = {
      onResizeStop: (event, data) => {
        setWidth(data.size.width);
      },
      className: "resize-horizontal",
      maxConstraints: [innerWidth * 0.8, Infinity],
      minConstraints: [innerWidth * 0.1, Infinity],
      height: Infinity,
      width,
      resizeHandles: ["e"],
    };
  }
  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;
