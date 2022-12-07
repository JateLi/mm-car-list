import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CarForm from "../components/CarForm";

export default function EditPage() {
  const navigate = useNavigate();
  const params = useParams();
  const [carsData, setCarsData] = useState([]);
  const [selectedCar, setSelectedCar] = useState();

  useEffect(() => {
    const localCarList = JSON.parse(localStorage.getItem("CarsList"));
    const carItem = localCarList.find(({ id }) => id === params.carId);
    setCarsData(localCarList);
    if (carItem) {
      console.log("Local", carItem);

      setSelectedCar(carItem);
      return;
    }
  }, [params.carId]);

  const submitChanges = (data) => {
    localStorage.setItem("CarsList", JSON.stringify(data));
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
      <CarForm selectedCar />
    </div>
  );
}
