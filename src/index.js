import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Circle, Text } from "react-konva";

const App = () => {
  const [text, setText] = useState("");
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text
          text={text}
          x={10}
          y={10}
          fontSize={24}
          fontFamily={"Calibri"}
          fill={"black"}
        />
        <Circle
          x={230}
          y={100}
          radius={60}
          stroke={"black"}
          fill={"red"}
          strokeWidth={4}
          /*
           * mousedown and touchstart are desktop and
           * mobile equivalents so they are often times
           * used together
           */
          onTouchStart={() => setText(" onTouchStart")}
          onMouseDown={() => setText("onTouchStart")}
          /*
           * mouseup and touchend are desktop and
           * mobile equivalents so they are often times
           * used together
           */
          onTouchEnd={() => setText(" onTouchEnd")}
          onMouseUp={() => setText(" onTouchEnd")}
        />
      </Layer>
    </Stage>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
