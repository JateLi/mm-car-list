import DateRangePicker from "../components/DateRangePicker/DateRangePicker";
import DropDownSelector from "../components/DropDownSelector";

function ListHeader({
  setTransmissionFilter,
  makeList,
  setMakeFilter,
  modelList,
  setModelFilter,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  onClickAddButton,
}) {
  return (
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
        onClick={onClickAddButton}
      >
        + Add
      </button>
    </div>
  );
}

export default ListHeader;
