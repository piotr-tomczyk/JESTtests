import { Capitalize } from "../code/capitalize";
it("Capitalize", () => {
  let word = "anna";
  expect(Capitalize("anna")).toEqual("Anna");
});

it("Capitalize with first letter already capitalized", () => {
  let word = "anna";
  expect(Capitalize("Anna")).toEqual("Anna");
});
