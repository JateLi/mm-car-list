import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { stringToDate } from "../../utils/utils";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DateRangePicker.module.css";

const CalenderIcon = () => (
  <div>
    <IconContext.Provider
      value={{
        style: {
          fontSize: "20px",
          color: "rgb(0, 123, 255)",
          marginLeft: "5px",
        },
      }}
    >
      <BsFillCalendarWeekFill />
    </IconContext.Provider>
  </div>
);

function DateRangePicker({ startDate, endDate, setStartDate, setEndDate }) {
  const selectedStartDate = stringToDate(startDate);
  const selectedEndDate = stringToDate(endDate);

  return (
    <div className="flex flex-row items-center">
      <span className="pr-5">From</span>
      <DatePicker
        placeholderText="Select From Date"
        selected={selectedStartDate}
        selectsStart
        startDate={selectedStartDate}
        endDate={selectedEndDate}
        className={styles.datePicker}
        dateFormat="yyyy"
        showYearPicker
        onChange={(date) => setStartDate(format(date, "yyyy"))}
      />
      <CalenderIcon />
      <span className="px-5">To</span>
      <DatePicker
        placeholderText="Select To Date"
        selected={selectedEndDate}
        selectsEnd
        startDate={selectedStartDate}
        endDate={selectedEndDate}
        minDate={selectedStartDate}
        className={styles.datePicker}
        dateFormat="yyyy"
        showYearPicker
        onChange={(date) => setEndDate(format(date, "yyyy"))}
      />
      <CalenderIcon />
    </div>
  );
}

export default DateRangePicker;
