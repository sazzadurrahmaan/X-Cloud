import BlueprintCard from "../components/BlueprintCard";

const AllBluePrints = () => {
    const blueprints = [
        { name: "Blueprint Name One", isDefault: true, tags: ["A", "N", "X", "4+"] },
        { name: "Blueprint Name3", isDefault: false, tags: ["A", "N", "X", "4+"] },
        { name: "Blueprint Name4", isDefault: false, tags: ["A", "N", "X", "4+"] },
        { name: "Blueprint Name5", isDefault: false, tags: ["A", "N", "X", "4+"] },
        { name: "Blueprint Name6", isDefault: false, tags: ["A", "N", "X", "4+"] },
        { name: "Blueprint Name7", isDefault: false, tags: ["A", "N", "X", "4+"] },
        { name: "Blueprint Name3", isDefault: false, tags: ["A", "N", "X", "4+"] },
        { name: "Blueprint Name3", isDefault: false, tags: ["A", "N", "X", "4+"] },
        { name: "Blueprint Name3", isDefault: false, tags: ["A", "N", "X", "4+"] },
      ];
    
      return (
        <div className=" w-full max-w-5xl bg-[#1D2239]  rounded-lg mx-auto shadow-lg p-6 text-white">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">All Blueprint</h1>
            <button className="bg-[#147AFF] text-white py-2 px-4 rounded-md hover:bg-[#0D6FD1] transition">
              + Create New Blueprint
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {blueprints.map((blueprint, index) => (
              <BlueprintCard
                key={index}
                name={blueprint.name}
                isDefault={blueprint.isDefault}
                tags={blueprint.tags}
              />
            ))}
          </div>
          <div className="flex justify-end mt-6">
            <button className="bg-[#32BA7C] text-white py-2 px-8 rounded-md hover:bg-[#28A06D] transition">
              Ok
            </button>
          </div>
        </div>
      );
};

export default AllBluePrints;