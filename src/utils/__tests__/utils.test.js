import { findMaxId } from "../utils";

const MockItemList = [{ id: 1 }, { id: 2 }, { id: 10 }, { id: 4 }, { id: 5 }];
test("unit test example", () => {
  const maxId = findMaxId(MockItemList);
  expect(findMaxId([])).toBe(1);
  expect(maxId).toBe(10);
});
