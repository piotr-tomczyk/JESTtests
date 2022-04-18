import { caesar } from "../code/caesar";
import { expect } from "@jest/globals";

it("Cipher with only small letters", () => {
  let word = "aaaa";
  expect(caesar(word, 1)).toEqual("bbbb");
});

it("Cipher with small and large letters", () => {
  let word = "aAaa";
  expect(caesar(word, 1)).toEqual("bBbb");
});

it("Cipher with small large letters and punctuation", () => {
  let word = "aA.a";
  expect(caesar(word, 1)).toEqual("bB.b");
});

it("Cipher with small letters result zzzz", () => {
  let word = "yyyy";
  expect(caesar(word, 1)).toEqual("zzzz");
});

it("Cipher with small letters modulo", () => {
  let word = "zzzz";
  expect(caesar(word, 1)).toEqual("aaaa");
});
