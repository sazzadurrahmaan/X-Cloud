const BlueprintCard = ({ name, isDefault, tags }) => {
    return (
        <div class="relative flex flex-col px-5 py-2 border rounded-lg bg-[#1D2239] border-[#156EE5] text-gray-300 ">
      <div class="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
      <h3 class="text-[14px] leading-[14px] font-medium text-nowrap">{name}</h3>
          {isDefault && (
            <span className="bg-[#313A6C] text-[#919DB9] rounded px-3 text-[12px]">
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
            <div className="w-4 h-4 rounded-full border border-[#147AFF] flex items-center justify-center transition-all ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 text-[#147AFF]  transition-all peer-checked:text-blue-500`}
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
        <div class="mt-4 flex items-center space-x-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium text-[#6C90B4] bg-[#CCE6FF] rounded"
            >
              {tag}
            </span>
          ))}
 
        </div>
      </div>
    );
  };

  export default BlueprintCard;

        {/* Card 1 */}
        <div class="relative flex flex-col px-5 py-2 border rounded-lg bg-[#1D2239] border-[#156EE5] text-gray-300 ">
        <div class="flex items-center gap-2">
            <h3 class="text-[14px] leading-[14px] font-medium">Blueprint Name One</h3>
            <span class=" bg-[#313A6C] text-[#919DB9] rounded px-3 text-[12px]">default</span>
        </div>
        <div class="mt-4 flex items-center space-x-2">
            <span class="px-2 py-1 text-xs font-medium text-[#6C90B4] bg-[#CCE6FF] rounded">A</span>
            <span class="px-2 py-1 text-xs font-medium text-[#C5A153] bg-[#FFE2A4] rounded">N</span>
            <span class="px-2 py-1 text-xs font-medium text-[#CE7C7C] bg-[#FFC4C4] rounded">X</span>
            <span class="px-2 py-1 text-xs font-medium text-[#171A30] bg-[#80B7FF] rounded">4+</span>
        </div>
        <label className="relative cursor-pointer">
            <input
              type="checkbox"
              className="hidden peer"
              defaultChecked="" // First two checkboxes will be checked
            />
            <div className="w-5 h-5 rounded-full border-2 border-[#147AFF] flex items-center justify-center transition-all ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 text-[#147AFF]  transition-all peer-checked:text-blue-500`}
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