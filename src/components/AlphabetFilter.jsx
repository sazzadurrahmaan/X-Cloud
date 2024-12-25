import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const AlphabetFilter = ({ activeLetter, onFilterChange }) => {
  const alphabets = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

  // Background and text color configurations
  const colorConfig = [
    { bg: "bg-[#CCE6FF]", text: "text-[#6C90B4]" },
    { bg: "bg-[#FFE2A4]", text: "text-[#CAA452]" },
    { bg: "bg-[#FFC4C4]", text: "text-[#EC6F6F]" },
    { bg: "bg-[#80B7FF]", text: "text-[#3784E8]" },
    { bg: "bg-[#AFB6E5]", text: "text-[#707CCC]" },
    { bg: "bg-[#F4ACC8]", text: "text-[#E5699A]" },
    { bg: "bg-[#4CD9ED]", text: "text-[#1AA9BE]" },
    { bg: "bg-[#FFEDCD]", text: "text-[#EDBB63]" },
    { bg: "bg-[#CCE6FF]", text: "text-[#6C90B4]" },
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-4">
      {alphabets.map((char, index) => {
        const { bg, text } = colorConfig[index % colorConfig.length];

        return (
          <div className="relative group" key={char}>
            {/* Tooltip */}
            {char === "M" && (
              <div className="absolute -top-12 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-[#1A1D3A]  text-nowrap left-[1/2] transform -translate-x-1/3 bg-[#232A4E] text-white text-xs px-4 py-2 rounded-md opacity-100 group-hover:opacity-100 transition-opacity duration-200">
                Plugin Name
              </div>
            )}
            <button
              onClick={() => onFilterChange(char)}
              className={`relative w-[50px] h-[50px] text-[24px] font-semibold leading-[24px] rounded-[8px] 
              ${bg} ${text} transform transition-transform duration-200 
              ${char === "M" ? "-translate-y-3" : "hover:-translate-y-3"}`}
            >
              {char}
              {/* Icons */}
              <span
                className={`absolute top-[-4px] right-[-4px] rounded-full p-1 transition-opacity duration-200 ${char === "M"
                    ? "bg-white text-red-500 border border-black opacity-100"
                    : "bg-green-500 text-white hover:opacity-0"
                  }`}
              >
                {char === "M" ? <FaTimes className="h-2 w-2" /> : <FaCheck className="h-2 w-2" />}
              </span>
              <span
                className={`absolute top-[-4px] right-[-4px] bg-white text-red-500 border border-black rounded-full p-1 opacity-0 transition-opacity duration-200 ${char === "M" ? "opacity-0" : "hover:opacity-100"
                  }`}
              >
                <FaTimes className="h-2 w-2" />
              </span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AlphabetFilter;
