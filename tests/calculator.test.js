import { add, substract, multiply, divide } from "../code/calculator";
import { expect, it } from "@jest/globals";

it("Adding two positive numbers", () => {
  expect(add(1, 2)).toBe(3);
});

it("Adding two negative numbers", () => {
  expect(add(-1, -2)).toBe(-3);
});

it("Substracting two positive numbers", () => {
  expect(substract(1, 2)).toBe(-1);
});

it("Substracting two negative numbers", () => {
  expect(substract(-1, -2)).toBe(1);
});

it("Multiplying two positive numbers", () => {
  expect(multiply(1, 2)).toBe(2);
});

it("Multiplying two negative numbers", () => {
  expect(multiply(-1, -2)).toBe(2);
});

it("Dividing two positive numbers", () => {
  expect(divide(2, 1)).toBe(2);
});

it("Dividing two negative numbers", () => {
  expect(divide(-2, -1)).toBe(2);
});
