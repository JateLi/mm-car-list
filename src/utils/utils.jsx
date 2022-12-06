import { parse } from "date-fns";

export const stringToDate = (stringDate) =>
  parse(stringDate, "yyyy", new Date());
