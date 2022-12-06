import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { stringToDate } from "../../utils/utils";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DateRangePicker.module.css";

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
    </div>
  );
}

export default DateRangePicker;
