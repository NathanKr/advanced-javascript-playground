import { test, expect } from "vitest";


test("access object via dynamic key", () => {
    const appState = "loading";
    const app = { [appState]: true };
    expect(app[appState]).toBe(true);
    expect(app["loading"]).toBe(true);
    expect(app.loading).toBe(true);
  });