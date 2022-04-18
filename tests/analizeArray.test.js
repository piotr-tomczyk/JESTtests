import { analizeArray } from "../code/analizeArray";
import { expect } from "@jest/globals";
it("Analyze to array test#1", () => {
  const array = [1, 1, 1, 1, 1];
  const object = {
    average: 1,
    min: 1,
    max: 1,
    length: 5,
  };
  expect(analizeArray(array)).toEqual(object);
});

it("Analyze to array test#2", () => {
  const array = [1, 2, 3, 4, 5];
  const object = {
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  };
  expect(analizeArray(array)).toEqual(object);
});

it("Analyze to array test#3", () => {
  const array = [];
  let errorMessage = "array must have lenght bigger than 0";
  expect(analizeArray(array)).toEqual(errorMessage);
});
