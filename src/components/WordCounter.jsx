import React, { useState } from "react";

const WordCounter = () => {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.split(/\s+/).filter((word) => word !== "").length;

  return (
    <div className="p-4">
      RESPONSIVE PARAGRAPH WORD COUNTER
      <textarea
        className="w-full p-2 border rounded-md"
        placeholder="Enter your paragraph here..."
        value={text}
        onChange={handleTextChange}
      />
      <p className="mt-2 text-sm text-gray-600">Word Count: {wordCount}</p>
    </div>
  );
};

export default WordCounter;
