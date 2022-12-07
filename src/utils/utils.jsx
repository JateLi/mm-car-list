import { parse } from "date-fns";

export const stringToDate = (stringDate) => {
  if (stringDate === "") return null;
  return parse(stringDate, "yyyy", new Date());
};

//Check if the car year is in the selected range.
export const checkDateInRange = (startDate, endDate, selectedDate) => {
  if (startDate === "" && endDate === "") return true;
  if (startDate === "" && Number(endDate) >= selectedDate) return true;
  if (Number(startDate) <= selectedDate && endDate === "") return true;
  if (Number(startDate) <= selectedDate && Number(endDate) >= selectedDate)
    return true;

  return false;
};

//Remove duplicate item from a string array
export const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};
