import React, { useState, useEffect } from "react";

const ColorPicker = ({ colors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const toggleColorList = () => {
    setIsOpen(!isOpen);
  };

  const selectColor = (color) => {
    setSelectedColor(color);
    setIsOpen(false);
  };

  useEffect(() => {
    if (selectedColor) {
      document.body.style.backgroundColor = selectedColor;
    } else {
      document.body.style.backgroundColor = ""; // Reset to the default background color
    }

    return () => {
      document.body.style.backgroundColor = ""; // Cleanup when the component unmounts
    };
  }, [selectedColor]);

  return (
    <div className="relative p-10 inline-block">
      <button
        onClick={toggleColorList}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        Pick a color
      </button>
      {isOpen && (
        <div className="absolute mt-2 -ml-4">
          <div className="bg-white shadow-md border border-gray-300 rounded-lg overflow-hidden">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-8 h-8 cursor-pointer"
                style={{ backgroundColor: color }}
                onClick={() => selectColor(color)}
              ></div>
            ))}
          </div>
        </div>
      )}
      {selectedColor && (
        <div className="mt-2 text-gray-700">
          Selected color: {selectedColor}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
