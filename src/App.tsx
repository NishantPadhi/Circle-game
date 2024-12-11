import "./styles.css";
import Circle from "./Circle";
import { useEffect, useState } from "react";
import { getRandomColor } from "./utils";

export default function App() {
  const [circleDetails, setCircleDetails]: any = useState([]);
  const [redoDetails, setRedoDetails]: any = useState([]);

  const handleClickHandler = (e) => {
    if (e?.target?.nodeName !== "BUTTON") {
      const { clientX, clientY } = e || {};
      const background = getRandomColor();
      setCircleDetails((prev: any) => [
        ...prev,
        { x: clientX, y: clientY, background },
      ]);
    }
  };

  const handleUndo = () => {
    let copy = [...circleDetails];
    const lastElement = copy.pop();
    setCircleDetails(copy);
    setRedoDetails([...redoDetails, lastElement]);
  };

  const handleRedo = () => {
    console.log(redoDetails);
    let copy = [...redoDetails];
    const lastElement = copy.pop();
    setCircleDetails([...circleDetails, lastElement]);
    setRedoDetails(copy);
  };

  const handleReset = () => {
    setCircleDetails([]);
    setRedoDetails([]);
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleClickHandler);
    return () => {
      window.removeEventListener("mouseup", handleClickHandler);
    };
  }, []);

  return (
    <div className="App">
      <button
        className={`button ${circleDetails.length ? "btnActive" : ""}`}
        disabled={!circleDetails.length}
        onClick={handleUndo}
      >
        Undo
      </button>
      <button
        className={`button ${redoDetails.length ? "btnActive" : ""}`}
        disabled={!redoDetails.length}
        onClick={handleRedo}
      >
        Redo
      </button>
      <button
        className={`button ${
          redoDetails.length || circleDetails.length ? "btnActive" : ""
        }`}
        disabled={!redoDetails.length && !circleDetails.length}
        onClick={handleReset}
      >
        Reset
      </button>
      <div onClick={handleClickHandler} style={{ position: "relative" }}>
        {circleDetails.map(({ x, y, background }) => (
          <span key={`${x}-${y}`}>
            <Circle x={x} y={y} background={background} />
          </span>
        ))}
      </div>
    </div>
  );
}
