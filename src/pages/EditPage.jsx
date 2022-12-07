import { useEffect, useState } from "react";
import { useLocalStorageState } from "ahooks";
import { useParams, useNavigate } from "react-router-dom";
import CarForm from "../components/CarForm";

export default function EditPage() {
  const navigate = useNavigate();
  const params = useParams();
  const [carsData, setCarsData] = useLocalStorageState(
    "local-storage-cars-list",
    {
      defaultValue: [],
    }
  );
  const [selectedCar, setSelectedCar] = useState();

  useEffect(() => {
    if (carsData) {
      const carItem = carsData.find(({ id }) => id === params.carId);
      setSelectedCar(carItem);
      return;
    }
  }, [carsData, params.carId]);

  //Update edited car data to local
  const onSubmitChanges = (editData) => {
    const newCarDate = carsData.map((obj) => {
      if (obj.id === editData.id) return editData;
      return obj;
    });
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
      <h1 className="text-3xl font-bold">Edit Car {params.carId}</h1>
      {selectedCar && (
        <CarForm selectedCar={selectedCar} onSubmitChanges={onSubmitChanges} />
      )}
    </div>
  );
}
