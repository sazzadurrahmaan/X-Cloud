import placeholderIcon from "../assets/placeholder.svg"

const InputField = ({ value, onChange, placeholder, error }) => {
    return (
        <div className="relative mb-4">
            {/* Icon container */}
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <img src={placeholderIcon} alt="placeholder" className="w-5 h-5 object-cover" />
            </span>

            {/* Input field */}
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full pl-10 p-3 rounded-[4px] border ${error
                        ? "border-[#FC573B] focus:ring-[#FC573B]"
                        : "border-[#313A6C] focus:ring-[#32BA7C]"
                    } bg-[#1D2239] placeholder-[#919DB9] focus:placeholder-white focus:text-white focus:outline-none focus:ring-1`}
            />
        </div>

    );
};

export default InputField;
