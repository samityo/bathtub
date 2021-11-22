import { useEffect, useState } from "react";
import "./App.css";
import Bathtub from "./components/Bathtub";

function App() {
  const level = 5;
  const [cells, setCells] = useState([]);
  const [handlers, setHandlers] = useState([]);
  const [empty, setEmpty] = useState(true);
  const [full, setFull] = useState(false);

  useEffect(() => {
    const cells = [];
    for (let i = 0; i < level; i++) {
      cells.push(false);
    }
    setCells(cells);
  }, [level]);

  useEffect(() => {
    const filled = cells.filter((cell) => cell).length;
    setEmpty(filled === 0 ? true : false);
    setFull(filled === level ? true : false);
  }, [cells]);

  const filling = (filling = true) => {
    handlers.map((handler) => clearTimeout(handler));
    setHandlers([]);
    let step = level;
    for (let i = 0; i < step; i++) {
      const index = filling ? i : step - 1 - i;
      handlers.push(
        setTimeout(() => {
          cells[index] = filling;
          setCells(JSON.parse(JSON.stringify(cells)));
        }, 2000 * i)
      );
      setHandlers(handlers);
    }
  };

  return (
    <div className="pt-5 app-wrapper">
      <div className="pt-5 d-flex flex-column align-items-center justify-content-center">
        <div className="d-flex align-items-center justify-content-between mb-3">
          <button
            className="btn btn-primary mx-3"
            disabled={!empty}
            onClick={() => filling(true)}
          >
            Increase
          </button>
          <button
            className="btn btn-primary mx-3"
            disabled={!full}
            onClick={() => filling(false)}
          >
            Decrease
          </button>
        </div>
        <Bathtub cells={cells}></Bathtub>
      </div>
    </div>
  );
}

export default App;
