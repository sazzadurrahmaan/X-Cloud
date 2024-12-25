import BlueprintCard from "../components/BlueprintCard";
import blueprintsData from "../data/blueprintData";


const AllBluePrints = () => {
    const blueprints = blueprintsData()
    
      return (
        <div className=" w-full max-w-5xl bg-[#1D2239]  rounded-lg mx-auto shadow-lg p-6 text-white">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-[32px] leading-[35px] font-medium">All Blueprint</h1>
            <button className="bg-[#147AFF] text-[14px] leading-[16px] font-semibold text-white py-2 px-4 rounded-[4px] hover:bg-[#0D6FD1] transition">
              + Create New Blueprint
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6 py-4">
            {blueprints.map((blueprint, index) => (
              <BlueprintCard
                key={index}
                index={index}
                name={blueprint.name}
                isDefault={blueprint.isDefault}
                tags={blueprint.tags}
              />
            ))}
          </div>
          <div className="flex justify-end mt-6">
            <button className="bg-[#2DC774] text-white py-2 px-8 font-semibold text-[16px] leading-[16px] rounded-[8px] transition">
              Ok
            </button>
          </div>
        </div>
      );
};

export default AllBluePrints;