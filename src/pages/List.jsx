import { useState, useEffect } from "react";
import Loader from "../components/Loader/Loader";

export default function List() {
  const [carsData, setCarsData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carsApi = `https://testapi.io/api/jeanpralo/cars`;
    setLoading(true);
    const dataFetch = async () => {
      const data = await (await fetch(carsApi)).json();
      setLoading(false);

      console.log("cars", data);
      setCarsData(data);
    };

    dataFetch().catch((error) => console.log(error));
  }, []);

  if (loading) return <Loader />;
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Car List</h1>
    </div>
  );
}
