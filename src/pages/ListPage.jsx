import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListItem from "../components/ListItem/ListItem";
import Loader from "../components/Loader/Loader";
import DateRangePicker from "../components/DateRangePicker/DateRangePicker";
import DropDownSelector from "../components/DropDownSelector";
import { carsApi } from "../Api";
import { useMemo } from "react";
import { checkDateInRange, removeDuplicates } from "../utils/utils";

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
      console.log("Local", localCarList);
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

  const modelList = removeDuplicates(carsData.map((obj) => obj.model));
  const makeList = removeDuplicates(carsData.map((obj) => obj.make));

  if (loading) return <Loader />;
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="button"
        onClick={() => {
          localStorage.setItem("CarsList", JSON.stringify(null));
        }}
      >
        Clear Local Storage
      </button>
      <h1 className="text-3xl font-bold">Car List</h1>

      <div
        className={
          "flex flex-row justify-evenly items-center py-5 border-b-2 border-black"
        }
      >
        <DropDownSelector
          type={"Transmission"}
          optionsList={["automatic", "manual", "tiptronic"]}
          onChange={setTransmissionFilter}
        />
        <DropDownSelector
          type={"Make"}
          optionsList={makeList}
          onChange={setMakeFilter}
        />
        <DropDownSelector
          type={"Model"}
          optionsList={modelList}
          onChange={setModelFilter}
        />
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="button"
          onClick={() => {
            navigate("/add");
          }}
        >
          + Add
        </button>
      </div>

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
              onClickEdit={() => {
                navigate(`/edit/${item.id}`);
              }}
              onClickDelete={() => {}}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
