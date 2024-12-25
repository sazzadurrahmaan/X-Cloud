import React from "react";
import PluginCard from "./PluginCard";

const PluginGrid = ({ plugins }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {plugins.map((plugin, index) => (
        <PluginCard key={index} index={index} {...plugin} />
      ))}
    </div>
  );
};

export default PluginGrid;
