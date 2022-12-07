import { useEffect, useState } from "react";
import CarFromInput from "./CarFromInput";

const inputValidate = (make, model, year, transmission) => {
  if (make === "" || model === "" || year === "" || transmission === "")
    return true;

  return false;
};

function CarForm({ selectedCar, onSubmitChanges }) {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [transmission, setTransmission] = useState("");

  useEffect(() => {
    if (!selectedCar) return;
    setMake(selectedCar.make);
    setModel(selectedCar.model);
    setYear(selectedCar.year);
    setTransmission(selectedCar.transmission);
  }, [selectedCar]);

  return (
    <div>
      <form
        className="w-full max-w-lg"
        onSubmit={(e) => {
          e.preventDefault();
          const id = selectedCar ? selectedCar.id : "";
          onSubmitChanges({
            id,
            model,
            make,
            year,
            transmission,
          });
        }}
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <CarFromInput
            label="Make"
            holder="Enter a make"
            onChange={setMake}
            value={make}
            type="text"
          />

          <CarFromInput
            label="Modal"
            holder="Enter a model"
            onChange={setModel}
            value={model}
            type="text"
          />
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <CarFromInput
            label="Year"
            holder="Enter a year"
            onChange={setYear}
            value={year}
            type="number"
          />

          <CarFromInput
            label="Transmission"
            holder="Enter a transmission"
            onChange={setTransmission}
            value={transmission}
            type="text"
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          disabled={inputValidate(make, model, year, transmission)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CarForm;
