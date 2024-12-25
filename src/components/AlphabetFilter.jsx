import React from "react";

const AlphabetFilter = ({ activeLetter, onFilterChange }) => {
  const alphabets = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

  return (
    <div className="flex gap-2 overflow-x-auto mb-4">
      {alphabets.map((char) => (
        <button
          key={char}
          onClick={() => onFilterChange(char)}
          className={`px-2 py-1 rounded-md ${
            activeLetter === char
              ? "bg-blue-500 text-white"
              : "bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white"
          }`}
        >
          {char}
        </button>
      ))}
    </div>
  );
};

export default AlphabetFilter;
