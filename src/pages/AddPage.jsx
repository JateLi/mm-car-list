import { useLocalStorageState } from "ahooks";
import { useNavigate } from "react-router-dom";
import CarForm from "../components/CarForm";
import { findMaxId } from "../utils/utils";

export default function AddPage() {
  const navigate = useNavigate();
  const [carsData, setCarsData] = useLocalStorageState(
    "local-storage-cars-list",
    {
      defaultValue: [],
    }
  );

  const onSubmitChanges = (addedData) => {
    const newId = String(findMaxId(carsData) + 1);
    const newCarDate = [
      ...carsData,
      {
        id: newId,
        model: addedData.model,
        make: addedData.make,
        year: addedData.year,
        transmission: addedData.transmission,
      },
    ];
    setCarsData(newCarDate);
    navigate("/list");
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <h1 className="text-3xl font-bold">Create a New Car</h1>
      <CarForm onSubmitChanges={onSubmitChanges} />
    </div>
  );
}
