import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CarForm from "../components/CarForm";

export default function AddPage() {
  const navigate = useNavigate();
  const [carsData, setCarsData] = useState([]);

  useEffect(() => {
    const localCarList = JSON.parse(localStorage.getItem("CarsList"));
    setCarsData(localCarList);
  }, []);

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
      <h1 className="text-3xl font-bold">Create a New Car</h1>
      <CarForm />
    </div>
  );
}
