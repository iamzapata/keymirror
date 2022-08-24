import { keyMirrorFromList, keyMirrorFromNullOrUndefinedObject } from "./index";

describe("keyMirrorFromList", () => {
  it("returns an object with mirrored key/values from an array of strings", () => {
    expect(keyMirrorFromList(["A", "B", "C"])).toEqual({
      A: "A",
      B: "B",
      C: "C"
    });
  });
});

describe("keyMirrorFromNullOrUndefinedObject", () => {
  it("returns an object with mirrored key/values from an object with null or undefined values", () => {
    expect(
      keyMirrorFromNullOrUndefinedObject({
        A: null,
        B: undefined,
        C: undefined
      })
    ).toEqual({
      A: "A",
      B: "B",
      C: "C"
    });
  });
});
