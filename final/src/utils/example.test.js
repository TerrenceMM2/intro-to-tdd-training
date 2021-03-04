// Syntax
// test("<LABEL>", () => {
//     expect(<LOGIC>).toBe(<RESULT>);   
// });

// Globals
// test() is available in the global environment (i.e. nothing to import/require)
// Can be explicit {expect, test} from '@jest/globals'

// .toBe(value)
// Compare primitive values
// Uses Object.is which is better than ===
test("2 plus 2 equals 4", () => {
    expect(2 + 2).toBe(4);
});

// .toBeFalsy()
test("is false", () => {
    expect(false).toBeFalsy();
});

// .toBeTruthy()
test("is true", () => {
    expect(true).toBeTruthy();
});

// .toBeNull()
test("returns null", () => {
    expect(null).toBeNull()
});