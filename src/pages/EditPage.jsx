import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import CarForm from "../components/CarForm";

export default function EditPage() {
  const navigate = useNavigate();
  const params = useParams();

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
      <CarForm />
    </div>
  );
}
