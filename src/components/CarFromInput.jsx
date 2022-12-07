function CarFromInput({ value, holder, onChange, label, type = "text" }) {
  return (
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {label}
      </label>
      <input
        className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white
        ${value ? "" : "border-red-500"}`}
        type={type}
        placeholder={holder}
        onChange={(e) => onChange(e.target.value)}
        value={value || ""}
      />

      {value ? null : (
        <p className="text-red-500 text-xs italic">
          Please fill out this field.
        </p>
      )}
    </div>
  );
}

export default CarFromInput;
