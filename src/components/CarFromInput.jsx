import { useCallback } from "react";
function CarFromInput({ value, holder, onChange, label, type = "text" }) {
  const inValidateDate = type === "number" && value > new Date().getFullYear();
  const handleOnChange = useCallback(
    (e) => {
      const newValue = e.target.value;
      if (type === "number" && String(newValue).length > 4) {
        return;
      }
      onChange(newValue);
    },
    [onChange, type]
  );
  return (
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        {label}
      </label>
      <input
        className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white
        ${(!value || inValidateDate) && "border-red-500"}`}
        type={type}
        placeholder={holder}
        onChange={handleOnChange}
        value={value || ""}
      />

      {value ? null : (
        <p className="text-red-500 text-xs italic">
          Please fill out this field.
        </p>
      )}
      {inValidateDate && (
        <p className="text-red-500 text-xs italic">
          Please enter a validate date.
        </p>
      )}
    </div>
  );
}

export default CarFromInput;
