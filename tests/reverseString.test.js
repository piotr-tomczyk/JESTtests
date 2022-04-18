import { expect, it } from "@jest/globals";
import { reverseString } from "../code/reverseString";
it("Reversed string", () => {
  let word = "Anna";
  expect(reverseString(word)).toEqual("annA");
});
