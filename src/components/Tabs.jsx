import React from "react";

const Tabs = ({ activeTab, onTabChange }) => {
  const tabs = ["Themes", "Plugins", "Popular Plugins"];
  return (
    <div className="flex border-b border-gray-600 mb-6">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onTabChange(tab)}
          className={`px-6 py-2 font-medium ${
            activeTab === tab
              ? "text-white border-b-2 border-blue-400"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
