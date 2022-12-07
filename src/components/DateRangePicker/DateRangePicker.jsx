import DatePicker from "react-datepicker";
import { format } from "date-fns";
import { stringToDate } from "../../utils/utils";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DateRangePicker.module.css";
import { useCallback } from "react";

function DateRangePicker({ startDate, endDate, setStartDate, setEndDate }) {
  const selectedStartDate = stringToDate(startDate);
  const selectedEndDate = stringToDate(endDate);

  const onChangeStartDate = useCallback(
    (date) => {
      setStartDate(date === null ? "" : format(date, "yyyy"));
    },
    [setStartDate]
  );

  const onChangeEndDate = useCallback(
    (date) => {
      setEndDate(date === null ? "" : format(date, "yyyy"));
    },
    [setEndDate]
  );

  return (
    <div className="flex flex-row items-center">
      <div>
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
          From
        </label>
        <DatePicker
          placeholderText="Start Date"
          selected={selectedStartDate}
          selectsStart
          startDate={selectedStartDate}
          endDate={selectedEndDate}
          className={styles.datePicker}
          dateFormat="yyyy"
          showYearPicker
          onChange={onChangeStartDate}
        />
      </div>
      <div className="px-5">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
          To
        </label>
        <DatePicker
          placeholderText="End Date"
          selected={selectedEndDate}
          selectsEnd
          startDate={selectedStartDate}
          endDate={selectedEndDate}
          minDate={selectedStartDate}
          className={styles.datePicker}
          dateFormat="yyyy"
          showYearPicker
          onChange={onChangeEndDate}
        />
      </div>
    </div>
  );
}

export default DateRangePicker;
