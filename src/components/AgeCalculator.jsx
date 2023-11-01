import React, { useState } from "react";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!birthDate) {
      alert("Please select a valid birth date.");
      return;
    }

    const birthDateObj = new Date(birthDate);
    const currentDate = new Date();

    const yearsDiff = currentDate.getFullYear() - birthDateObj.getFullYear();
    const monthsDiff = currentDate.getMonth() - birthDateObj.getMonth();
    const daysDiff = currentDate.getDate() - birthDateObj.getDate();

    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
      setAge(yearsDiff - 1);
    } else {
      setAge(yearsDiff);
    }
  };

  return (
    <div className="container mx-auto mt-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Age Calculator</h1>
      <div className="mb-4">
        <label className="block text-gray-600 text-lg mb-2">
          Select your birthdate:
        </label>
        <input
          type="date"
          className="p-2 border rounded-md"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
        onClick={calculateAge}
      >
        Calculate Age
      </button>
      {age !== null && (
        <div className="mt-4 text-lg">Your age is {age} years.</div>
      )}
    </div>
  );
};

export default AgeCalculator;
