import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListItem from "../components/ListItem/ListItem";
import Loader from "../components/Loader/Loader";
import { carsApi } from "../Api";
import { useMemo } from "react";
import { checkDateInRange, removeDuplicates } from "../utils/utils";
import ListHeader from "../components/ListHeader";

export default function ListPage() {
  const navigate = useNavigate();
  const [carsData, setCarsData] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [modelFilter, setModelFilter] = useState("all");
  const [makeFilter, setMakeFilter] = useState("all");
  const [transmissionFilter, setTransmissionFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  // Fetch cars data if the local cars data is null.
  useEffect(() => {
    setLoading(true);
    const localCarList = JSON.parse(localStorage.getItem("CarsList"));
    if (localCarList) {
      setLoading(false);
      setCarsData(localCarList);
      return;
    }

    const dataFetch = async () => {
      const data = await (await fetch(carsApi)).json();
      setLoading(false);
      setCarsData(data);
      localStorage.setItem("CarsList", JSON.stringify(data));
    };

    dataFetch().catch((error) => console.log(error));
  }, []);

  const filteredList = useMemo(() => {
    if (!carsData) return [];
    return carsData.filter(({ model, make, transmission, year }) => {
      return (
        (transmission === transmissionFilter || transmissionFilter === "all") &&
        (model === modelFilter || modelFilter === "all") &&
        (make === makeFilter || makeFilter === "all") &&
        checkDateInRange(startDate, endDate, year)
      );
    });
  }, [
    carsData,
    makeFilter,
    modelFilter,
    endDate,
    startDate,
    transmissionFilter,
  ]);

  const removeItemById = (id) => {
    const newList = carsData.filter((obj) => obj.id !== id);
    setCarsData(newList);
    localStorage.setItem("CarsList", JSON.stringify(newList));
  };

  const modelList = removeDuplicates(carsData.map((obj) => obj.model));
  const makeList = removeDuplicates(carsData.map((obj) => obj.make));

  if (loading) return <Loader />;
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={() => localStorage.setItem("CarsList", JSON.stringify(null))}
      >
        Clear Local Storage
      </button>
      <h1 className="text-3xl font-bold">Car List</h1>
      <ListHeader
        setTransmissionFilter={setTransmissionFilter}
        makeList={makeList}
        setMakeFilter={setMakeFilter}
        modelList={modelList}
        setModelFilter={setModelFilter}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        onClickAddButton={() => navigate("/add")}
      />

      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Transmission</th>
            <th></th>
          </tr>

          {filteredList.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              make={item.make}
              model={item.model}
              year={item.year}
              transmission={item.transmission}
              onClickEdit={() => navigate(`/edit/${item.id}`)}
              onClickDelete={() => removeItemById(item.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
