import React from "react";

const Tabs = ({ activeTab, onTabChange }) => {
  const tabs = ["Themes", "Plugins", "Popular Plugins"];
  return (
    <div className="flex ">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => onTabChange(tab)}
          className={`px-6 py-2 font-medium text-[18px] leading-[20px] ${activeTab === tab
            ? "text-[#FFFFFF] border-b-2 border-[#FFFFFF]"
            : "text-[#A1A7BA] hover:text-white"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
