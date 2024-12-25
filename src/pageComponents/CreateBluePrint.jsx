import React, { useState } from "react";
import InputField from "../components/InputField";
import Tabs from "../components/Tabs";
import AlphabetFilter from "../components/AlphabetFilter";
import SearchBar from "../components/SearchBar";
import PluginGrid from "../components/PluginGrid";
import WarningIcon from "../assets/warning.svg";

const CreateBlueprint = () => {
    const [blueprintName, setBlueprintName] = useState("");
    const [error, setError] = useState(false);
    // const [activeTab, setActiveTab] = useState("Plugins");
    // const [activeLetter, setActiveLetter] = useState("");
    // const [searchTerm, setSearchTerm] = useState("");

    // const plugins = [...Array(12)].map((_, index) => ({
    //     name: `Plugin Name ${index + 1}`,
    //     description: "Have an existing website already? Select this option to have.",
    //     rating: 4,
    //     installs: "5M+",
    //     developer: "WPDeveloper",
    // }));

    const handleNext = () => {
        if (!blueprintName.trim()) {
            setError(true);
        } else {
            setError(false);

        }
    };

    return (
        <>
            {error && (
                <div class="max-w-5xl flex items-center gap-2 p-4 border rounded-[4px] mx-auto border-[#765638] bg-[rgba(248,166,67,0.04)] text-[#A1A7BA] mb-3">
                    <img src={WarningIcon} alt="warning" className="object-cover" />
                    <p class="text-[14px] leading-[14px] font-normal">Warning: You must create a name for your Blueprint</p>
                </div>


            )}
            <div className="w-full max-w-5xl bg-[#1D2239] text-[#FFFFFF] rounded-lg mx-auto shadow-lg py-5 px-7">
                {/* Error Warning */}
                <section className="bg-[#1D2239] p-6 rounded-md max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold mb-6">Create Blueprint</h2>
                    <InputField
                        value={blueprintName}
                        onChange={(e) => setBlueprintName(e.target.value)}
                        placeholder="Name your blueprint"
                        error={error}
                    />
                    {/* <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
                    <div className="flex justify-between items-center mb-6">
                        <AlphabetFilter
                            activeLetter={activeLetter}
                            onFilterChange={setActiveLetter}
                        />
                        <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                    <PluginGrid plugins={plugins} /> */}
                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={handleNext}
                            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                        >
                            Next
                        </button>
                    </div>
                </section>
            </div>
        </>
    );
};

export default CreateBlueprint;
