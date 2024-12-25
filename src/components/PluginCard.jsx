import React from "react";

const PluginCard = ({ name, description, rating, installs, developer }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-md border border-gray-600 hover:shadow-lg transition">
      <h3 className="font-semibold text-white mb-2">{name}</h3>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      <p className="text-yellow-400 mb-1">{"★".repeat(rating)}☆</p>
      <p className="text-xs text-gray-400">{installs} Active Installations</p>
      <p className="text-xs text-gray-500">By: {developer}</p>
    </div>
  );
};

export default PluginCard;
