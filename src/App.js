import React, { useState, useRef } from "react";
import useFlip from "./hooks/useFlip";
import "./App.css";

const shuffle = function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const itemCollection = [
  { id: 1, text: "This is random string number 1" },
  { id: 2, text: "This is random string number 2" },
  { id: 3, text: "This is random string number 3" },
  { id: 4, text: "This is random string number 4" },
  { id: 5, text: "This is random string number 5" },
  { id: 6, text: "This is random string number 6" },
  { id: 7, text: "This is random string number 7" },
  { id: 8, text: "This is random string number 8" },
  { id: 9, text: "This is random string number 9" }
];

function App() {
  const [items, setItems] = useState(itemCollection);
  const rootRef = useRef();

  useFlip({ root: rootRef, opts: { transition: 700 }, deps: items });

  const shuffleItems = function shuffleItems() {
    const result = shuffle([...items]);
    setItems(result);
  };

  const sortItems = function sortItems() {
    const result = [...items].sort((a, b) => a.id - b.id);
    setItems(result);
  };

  return (
    <div className="container">
      <div ref={rootRef} className="root">
        {items.map(item => {
          return (
            <div className={"item"} data-id={item.id} key={item.id}>
              {item.text}
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button className="shuffle" onClick={shuffleItems}>
          Shuffle
        </button>
        <button className="shuffle" onClick={sortItems}>
          Sort
        </button>
      </div>
    </div>
  );
}

export default App;
