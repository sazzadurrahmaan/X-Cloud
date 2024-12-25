const PluginCard = ({ name, description, rating, installs, developer, logoImg, index,revewAmount }) => {
  return (
    <div
      className={`bg-[#171A30]  ${
        index < 2 ? 'border border-[#147AFF]' : 'border-none'
      } rounded-md hover:shadow-lg transition max-w-[318px]`}
    >
      <div className="grid grid-cols-8 p-4">
        <div className="col-span-2">
          <img src={logoImg} alt="Plugin logo" className="object-cover w-[40px] h-[40px]" />
        </div>
        <div className="flex flex-col col-span-5 mb-2">
          <h3 className="font-medium text-[16px] leading-[16px] text-white mb-2">{name}</h3>
          <p className="text-[12px] font-normal leading-[16px] text-[#74778E] mb-4">{description}</p>
          <p className="font-medium italic text-[12px] leading-[16px] text-[#74778E]  ">By: <span className="text-white">{developer}</span></p>
        </div>
        <div className="flex justify-center">
          <label className="relative cursor-pointer">
            <input
              type="checkbox"
              className="hidden peer"
              defaultChecked={index < 2} // First two checkboxes will be checked
            />
            <div className="w-5 h-5 rounded-full border-2 border-[#147AFF] flex items-center justify-center transition-all ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${index<2?'text-[#147AFF]':'text-transparent'}  transition-all peer-checked:text-blue-500`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </label>
        </div>
      </div>
      <div className="border-t border-[#1D2239] w-full p-4">
      <p className="text-[14px] leading-[16px] mb-1 text-[#74778E] font-medium"><span className="text-[#FF9446] mr-2">{"★".repeat(rating)}☆</span>{revewAmount}</p>
      <p className="text-[14px] leading-[16px]  font-semibold text-[#74778E]">{installs} Active Installations</p>
      </div>
    </div>
  );
};

export default PluginCard;
