const BlueprintCard = ({ name, tags,index }) => {
  return (
    <div className={`relative flex flex-col px-5 py-2 border rounded-lg bg-[#171A30] ${index ===0? 'border-[#156EE5]' : 'border-none'} text-gray-300 `}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <h3 className="text-[14px] leading-[14px] font-medium text-white text-nowrap">{name}</h3>
          {index===0 && (
            <span className="bg-[#313A6C] text-white rounded-[4px] px-3 text-[12px]">
              default
            </span>
          )}
        </div>
        <label className="relative cursor-pointer">
          <input
            type="checkbox"
            className="hidden peer"
            defaultChecked="" // First two checkboxes will be checked
          />
          <div className={`w-4 h-4 rounded-full border  ${index ===0 ? 'border-[#147AFF]':'border-[#313A6C]'} flex items-center justify-center transition-all`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ${index ===0 ? 'text-[#147AFF]': 'text-transparent'}  transition-all peer-checked:text-blue-500`}
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
      <div className="mt-4 flex items-center space-x-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-2 py-1 text-xs font-medium ${tag.bg} ${tag.text} rounded`}
          >
            {tag.ch}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlueprintCard;
