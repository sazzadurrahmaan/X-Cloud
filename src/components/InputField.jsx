

const InputField = ({ value, onChange, placeholder, error }) => {
  return (
    <div className="relative mb-4">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full p-3 rounded-md border ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-600 focus:ring-blue-400"
        } bg-gray-800 text-white focus:outline-none focus:ring-2`}
      />
      {error && (
        <span className="absolute -bottom-5 left-0 text-red-500 text-sm">
          You must name your blueprint.
        </span>
      )}
    </div>
  );
};

export default InputField;
