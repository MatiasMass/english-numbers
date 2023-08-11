import { useState } from "react";
import numbered from "numbered";
import "./App.css";

function App() {
  function randomNumbers(count) {
    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * 10001); // Generates a random integer between 0 and 10000
      setWord(numbered.stringify(randomNumber));
      return randomNumber;
    }
  }

  const [randomNumber, setRandomNumber] = useState(1);
  const [word, setWord] = useState("one");
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <h1>Random Number Generator</h1>
        <button
          style={{
            width: "300px",
            backgroundColor: "#b5b8a3",
          }}
          onClick={() => {
            setRandomNumber(randomNumbers(1));
            setShow(false);
          }}
        >
          Generate Random Number Between 1 and 10000
        </button>
        <h2 style={{ fontSize: "50px" }}>{randomNumber}</h2>
        <button
          style={{ backgroundColor: "#b5b8a3" }}
          onClick={() => setShow(!show)}
        >
          {show ? "Hide Number" : "Show Number"}
        </button>
        <h3>{show ? <h3>{word}</h3> : ""}</h3>
      </div>
    </>
  );
}

export default App;
