import xCloudLogo from '../assets/xCloud_Blue.svg';
import dropdownIcon from '../assets/dropdown.svg';
import cloudStorage from '../assets/cloudStorage.svg';
import cloudServer from '../assets/cloudServer.svg';
import { useState } from 'react';

const ChooseProvider = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div className="w-full max-w-5xl bg-[#1D2239] text-[#FFFFFF] rounded-lg mx-auto shadow-lg py-5 px-7">

            <div className='flex flex-col items-center justify-center mx-auto p-6 mb-6'>

                <div className='flex items-center justify-center sm:gap-4  gap-1'>
                    <h1 className='text-[25px] leading-[30px] sm:text-[40px] sm:leading-[40px] font-normal'>Set Up Your Server With</h1>
                    <img src={xCloudLogo} alt="xCloud Logo" className="w-[80px] h-[30px] sm:w-[128px] sm:h-[50px] object-cover" />
                </div>

                <p className="text-center text-[#919DB9] text-[15px] leading-[20px] mt-2">
                    Fill in the details below to get your server set up with xCloud
                </p>
            </div>

            {/* Server Details */}
            <div className="mb-4 p-6 rounded-lg">
                <h2 className="text-[18px] leading-[20px] font-medium  mb-4">Server Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Server Name */}
                    <div>
                        <label
                            htmlFor="serverName"
                            className="block text-[14px] leading-[19px] font-normal text-[#74778E] mb-2"
                        >
                            Server Name
                        </label>
                        <input
                            id="serverName"
                            type="text"
                            placeholder="Example Site"
                            className="bg-transparent w-full p-3 rounded-md border border-[#313A6C] placeholder-[#919DB9] focus:outline-none focus:ring-2 focus:ring-[#147AFF] text-[14px] leading-[19px]"
                        />
                    </div>

                    {/* Add Tag */}
                    <div>
                        <label
                            htmlFor="addTag"
                            className="block text-[14px] leading-[19px] font-normal text-[#74778E] mb-2"
                        >
                            Add Tag (Optional)
                        </label>
                        <div className="relative">
                            <input
                                id="addTag"
                                type="text"
                                placeholder="Select or create tags"
                                className="bg-transparent w-full p-3 rounded-md border border-[#313A6C] placeholder-[#919DB9] focus:outline-none focus:ring-2 focus:ring-[#147AFF] text-[14px] leading-[19px]"
                            />
                            <div className="absolute top-0 right-0 h-full px-3 flex items-center text-[#919DB9]">
                                <div className="flex items-center bg-[#313A6C] p-1 rounded-[4px] cursor-pointer">
                                    <img src={dropdownIcon} alt="dropdown" className="object-cover sm:w-[15px] sm:h-[15px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Server Type */}
            <div className="mb-4  p-6">
                <h2 className="text-[18px] leading-[20px] font-medium  mb-4">Server Type</h2>
                <div className="flex gap-4">
                    <div className='flex-1 flex flex-col sm:flex-row gap-3 items-center bg-transparent p-4 rounded-md cursor-pointer border border-[#313A6C] hover:border-[#147AFF]'>
                        <img src={cloudStorage} alt="server type" className="w-12 h-12 rounded-md" />
                        <div>
                            <h3 className="font-medium text-[20px] leading-[18px] mb-2">Go Live</h3>
                            <p className="text-[#919DB9] text-[14px] leading-[20px] font-normal">
                                Get your site up and running for the world to see by simply
                                pointing your domain to the server.
                            </p>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col sm:flex-row gap-3 items-center  bg-transparent p-4 rounded-md cursor-pointer border border-[#313A6C] hover:border-[#147AFF]'>
                        <img src={cloudServer} alt="server type" className="w-12 h-12 rounded-md" />
                        <div>
                            <h3 className="font-medium text-[20px] leading-[18px] mb-2">Staging Environment</h3>
                            <p className="text-[#919DB9] text-[14px] leading-[20px] font-normal">
                                Create your site in a staging environment and refine it until
                                it&apos;s ready for launch.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blueprints Section */}
            <div className="mb-4 p-6 rounded-md">
                <div className='bg-[#171A30] p-5'>
                    <div className='flex items-center justify-between '>
                        <div>
                            <h2 className="text-[18px] leading-[20px] font-medium  mb-4">Blueprints</h2>
                            {/* Toggle and Description */}

                            <p className="text-[#919DB9] text-[14px] leading-[20px] font-normal">
                                Add the following record to the DNS for your domain to get free
                            </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={isChecked}
                                onChange={handleToggle}
                            />
                            <div className="w-11 h-6 bg-[#9DA2AE] peer-focus:ring-4 peer-focus:ring-blue-500  rounded-full 
                peer-checked:after:translate-x-5 peer-checked:after:border-white 
                after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                after:bg-white after:border-gray-300 after:border 
                after:rounded-full after:h-5 after:w-5 after:transition-all 
                peer-checked:bg-blue-500"></div>
                        </label>
                    </div>

                    {isChecked && (
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                {/* Blueprint Card 1 */}
                                <div className="bg-gray-800 p-4 rounded-lg border border-blue-500 flex flex-col">
                                    <h3 className="font-bold text-lg mb-2">Blueprint Name One</h3>
                                    <p className="bg-blue-500 text-xs font-semibold text-white py-1 px-2 rounded-md w-max">
                                        Default
                                    </p>
                                    <div className="mt-4 flex items-center gap-2">
                                        <div className="bg-[#313A6C] text-white text-sm py-1 px-3 rounded-md">
                                            A
                                        </div>
                                        <div className="bg-[#313A6C] text-white text-sm py-1 px-3 rounded-md">
                                            N
                                        </div>
                                        <div className="bg-[#313A6C] text-white text-sm py-1 px-3 rounded-md">
                                            4+
                                        </div>
                                    </div>
                                    <input
                                        type="radio"
                                        name="blueprint"
                                        className="mt-4 w-5 h-5 text-blue-500 border-[#313A6C] rounded-full focus:ring-2 focus:ring-blue-500"
                                        defaultChecked
                                    />
                                </div>

                                {/* Blueprint Card 2 */}
                                <div className="bg-gray-800 p-4 rounded-lg border border-[#313A6C] flex flex-col">
                                    <h3 className="font-bold text-lg mb-2">Blueprint Name2</h3>
                                    <div className="mt-4 flex items-center gap-2">
                                        <div className="bg-[#313A6C] text-white text-sm py-1 px-3 rounded-md">
                                            A
                                        </div>
                                        <div className="bg-[#313A6C] text-white text-sm py-1 px-3 rounded-md">
                                            N
                                        </div>
                                        <div className="bg-[#313A6C] text-white text-sm py-1 px-3 rounded-md">
                                            4+
                                        </div>
                                    </div>
                                    <input
                                        type="radio"
                                        name="blueprint"
                                        className="mt-4 w-5 h-5 text-blue-500 border-[#313A6C] rounded-full focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Blueprint Card 3 */}
                                <div className="bg-gray-800 p-4 rounded-lg border border-[#313A6C] flex flex-col">
                                    <h3 className="font-bold text-lg mb-2">Blueprint Name3</h3>
                                    <div className="mt-4 flex items-center gap-2">
                                        <div className="bg-[#313A6C] text-white text-sm py-1 px-3 rounded-md">
                                            A
                                        </div>
                                        <div className="bg-[#313A6C] text-white text-sm py-1 px-3 rounded-md">
                                            N
                                        </div>
                                        <div className="bg-[#313A6C] text-white text-sm py-1 px-3 rounded-md">
                                            4+
                                        </div>
                                    </div>
                                    <input
                                        type="radio"
                                        name="blueprint"
                                        className="mt-4 w-5 h-5 text-blue-500 border-[#313A6C] rounded-full focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                            </div>
                            {/* View All and Create Blueprint */}
                            <div className="flex justify-end items-center gap-4">
                                <a href="#view-all" className="text-blue-500 text-sm hover:underline">
                                    View all →
                                </a>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
                                    + Create New Blueprint
                                </button>
                            </div>
                        </div>
                    )}

                </div>
            </div>





            {/* More Advanced Settings */}
            <div className="mt-8">
                <button className="bg-gray-800 hover:bg-[#313A6C] text-white px-4 py-2 rounded-md flex items-center gap-2">
                    <span>More Advanced Settings</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
            </div>
        </div>

    );
};

export default ChooseProvider;