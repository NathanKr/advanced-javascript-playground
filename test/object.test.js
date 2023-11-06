import { test, expect } from "vitest";

const person = { name: "Jim", age: 32 };

test("access person via property", () => {
  expect(person.name).toBe("Jim");
  expect(person.age).toBe(32);
});

test("access person using bracket notation", () => {
  expect(person["name"]).toBe("Jim");
  expect(person["age"]).toBe(32);
});


