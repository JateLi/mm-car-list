import { findMaxId, checkDateInRange, removeDuplicates } from "../utils";

const MockItemList = [{ id: 1 }, { id: 2 }, { id: 10 }, { id: 4 }, { id: 5 }];
test("Find the max id from the car item list for new item uid", () => {
  const maxId = findMaxId(MockItemList);
  expect(findMaxId([])).toBe(1);
  expect(maxId).toBe(10);
});

test("Check if the car year is in the selected range.", () => {
  const rangeDateTest = checkDateInRange(2000, 2020, 2015);
  const noRangeDateTest = checkDateInRange(2000, 2020, 2025);
  const rangeDateWithoutStartDate = checkDateInRange("", 2020, 2015);
  const rangeDateWithoutEndDate = checkDateInRange(2000, "", 2025);

  expect(rangeDateTest).toBe(true);
  expect(noRangeDateTest).toBe(false);
  expect(rangeDateWithoutStartDate).toBe(true);
  expect(rangeDateWithoutEndDate).toBe(true);
});

const MockDuplicatedList = ["1", "2", "2", "1", "4", "test"];
const result = ["1", "2", "4", "test"];
test("Remove duplicate item from a string array", () => {
  const newArr = removeDuplicates(MockDuplicatedList);
  const emptyArr = removeDuplicates([]);
  expect(JSON.stringify(newArr)).toBe(JSON.stringify(result));
  expect(JSON.stringify(emptyArr)).toBe(JSON.stringify([]));
});
