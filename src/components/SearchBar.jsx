import React from "react";

const SearchBar = ({ value, onChange }) => {
    return (
        <div className="relative z-50">
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Search"
                className="w-[250px] sm:w-[311px] px-5 py-3 rounded-[6px] bg-[#1D2239] text-[#74778E] text-[14px] leading-[20px] focus:text-white focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-y-0 flex items-center top-1/2 right-3 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M16.7 9.35a7.35 7.35 0 11-14.7 0 7.35 7.35 0 0114.7 0z"
                />
            </svg>
        </div>

    );
};

export default SearchBar;
