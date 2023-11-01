import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg w-64 mx-auto mt-8">
      <input
        className="w-full h-12 text-3xl mb-4 rounded-lg text-right px-4 outline-none focus:ring focus:ring-blue-300"
        type="text"
        value={input}
        readOnly
      />
      <div className="grid grid-cols-4 gap-2">
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 text-2xl p-2 rounded-lg"
          onClick={() => handleButtonClick("7")}
        >
          7
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 text-2xl p-2 rounded-lg"
          onClick={() => handleButtonClick("8")}
        >
          8
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 text-2xl p-2 rounded-lg"
          onClick={() => handleButtonClick("9")}
        >
          9
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white text-2xl p-2 rounded-lg"
          onClick={() => handleButtonClick("/")}
        >
          ÷
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 text-2xl p-2 rounded-lg"
          onClick={() => handleButtonClick("4")}
        >
          4
        </button>
        <button
          className="bg-gray-300 hoverbg-gray-400 text-gray-700 text-2xl p-2 rounded-lg"
          onClick={() => handleButtonClick("5")}
        >
          5
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 text-2xl p-2 rounded-lg"
          onClick={() => handleButtonClick("6")}
        >
          6
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white text-2xl p-2 rounded-lg"
          onClick={() => handleButtonClick("*")}
        >
          ×
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 text-2xl p-2 rounded-lg"
          onClick={() => handleButtonClick("1")}
        >
          1
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 text-2xl p-2 rounded-lg"
          onClick={() => handleButtonClick("2")}
        >
          2
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 text-2xl p-2 rounded-lg"
          onClick={() => handleButtonClick("3")}
        >
          3
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white text-2xl p-2 rounded-lg"
          onClick={() => handleButtonClick("-")}
        >
          -
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 text-2xl p-2 rounded-lg"
          onClick={() => handleButtonClick("0")}
        >
          0
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 text-2xl p-2 rounded-lg"
          onClick={() => handleButtonClick(".")}
        >
          .
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white text-2xl p-2 rounded-lg"
          onClick={handleCalculate}
        >
          =
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white text-2xl p-2 rounded-lg"
          onClick={() => handleBackspace()}
        >
          ←
        </button>
      </div>
    </div>
  );
};

export default Calculator;
