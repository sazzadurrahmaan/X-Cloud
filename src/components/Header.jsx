import xCloud from "../assets/X-Cloud.svg";
import notifyIcon from "../assets/notification.svg";
import avatar from "../assets/avatar.svg";
import dropdownIcon from "../assets/dropdown.svg";
import { useState } from "react";

const Header = () => {

    const [isNotification, setIsNotification] = useState(true);

    return (
        <header className="bg-[#1D2239]">
            <div className="w-full flex justify-between items-center mb-8 mx-auto max-w-screen-xl px-1 sm:px-2 lg:px-3 py-3 sm:py-4 lg:py-6   text-[#ffffff]">
                <div className="max-w-[80px] max-h-[30px] sm:max-w-[128px] sm:max-h-[50px]">
                    <img src={xCloud} alt="x-cloud logo" className="object-cover " />
                </div>
                <div className="flex items-center gap-3 sm:gap-8 ">
                    <div className="flex items-center gap-1 sm:gap-2 flex-col justify-between">
                        <p className={`${isNotification ? 'bg-[#2DC774]' : ''}  p-[4px] rounded-md text-right ml-5`}></p>
                        <img src={notifyIcon} alt="notification icon" className="object-cover w-[24px] h-[24px]" />
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="flex items-center  bg-white rounded-[50%] px-2 py-1 sm:px-3 sm:py-2">
                            <img src={avatar} alt="" className="object-cover w-[30px] h-[30px] sm:[40px] sm:h-[40px]" />
                        </div>
                        <p className="text-[15px] font-medium leading-[20px]">Mark Adam</p>
                        <div className="flex items-center bg-[#171A30] p-1 sm:p-3 rounded-[10px] cursor-pointer">
                            <img src={dropdownIcon} alt="dropdown" className="object-cover w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;