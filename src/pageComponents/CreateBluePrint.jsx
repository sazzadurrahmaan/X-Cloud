import React, { useState } from "react";
import InputField from "../components/InputField";
import Tabs from "../components/Tabs";
import AlphabetFilter from "../components/AlphabetFilter";
import SearchBar from "../components/SearchBar";
import PluginGrid from "../components/PluginGrid";
import WarningIcon from "../assets/warning.svg";
import pluginXcloud from "../assets/pluginXcloud.svg"

const CreateBlueprint = () => {
    const [blueprintName, setBlueprintName] = useState("");
    const [error, setError] = useState(false);
    const [activeTab, setActiveTab] = useState("Plugins");
    const [activeLetter, setActiveLetter] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const plugins = [...Array(9)].map((_, index) => ({
        name: `Plugin Name ${index + 1}`,
        description: "Have an existing website already? Select this option to Have",
        rating: 4,
        logoImg: pluginXcloud,
        installs: "5M+",
        developer: "WPDeveloper",
        revewAmount: "(12,23)",
    }));

    const handleNext = () => {
        if (!blueprintName.trim()) {
            setError(true);
        } else {
            setError(false);

        }
    };

    return (
        <>
            {/* Error Warning */}
            {error && (
                <div class="max-w-5xl flex items-center gap-2 p-4 border rounded-[4px] mx-auto border-[#765638] bg-[rgba(248,166,67,0.04)] text-[#A1A7BA] mb-3">
                    <img src={WarningIcon} alt="warning" className="object-cover" />
                    <p class="text-[14px] leading-[14px] font-normal">Warning: You must create a name for your Blueprint</p>
                </div>


            )}
            <div className="w-full max-w-5xl bg-[#1D2239] text-[#FFFFFF] rounded-lg mx-auto shadow-lg">
                <div className=" py-5 px-7">
                    <section className="bg-[#1D2239] p-6 rounded-md max-w-5xl mx-auto">
                        {/* title */}
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="font-medium text-[20px] sm:text-[32px] leading-[35px] ">Create Blueprint</h2>
                            <button className="flex items-center justify-center w-6 h-6 border border-[#919DB9] rounded-lg text-[#919DB9] hover:text-white hover:border-white" aria-label="Close">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                    <line x1="6" y1="18" x2="18" y2="6" />
                                </svg>
                            </button>
                        </div>
                        {/* input field component */}
                        <InputField
                            value={blueprintName}
                            onChange={(e) => setBlueprintName(e.target.value)}
                            placeholder="Name your blueprint"
                            error={error}
                        />
                        <div className="flex justify-between items-center mb-8 bg-[#171A30] px-2 py-4 rounded-[4px]">
                            <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
                            <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        </div>
                        <div className="mb-8">
                            <AlphabetFilter
                                activeLetter={activeLetter}
                                onFilterChange={setActiveLetter}
                            />
                        </div>
                        <div className="">
                            <PluginGrid plugins={plugins} />
                        </div>

                    </section>

                </div>
                <div className="flex justify-end bg-[#232A4E] w-full px-12 py-4">
                    <button
                        onClick={handleNext}
                        className="px-6 py-2 bg-[#147AFF] hover:bg-blue-700 cursor-pointer  text-white font-semibold text-[16px] leading-[20px] rounded-[8px]"
                    >
                        Next
                    </button>
                </div>

            </div>
        </>
    );
};

export default CreateBlueprint;
