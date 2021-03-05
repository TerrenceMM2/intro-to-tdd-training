// Cannot use ES6 syntax while running directly with Jest
// Works with npm test and React's Jest/Babel configurations
import user from "../data/user";
import { add, subtract } from "./helpers"


// describe() - groups related tests
describe("user data validation", () => {
    test("user has an email", () => {
        expect(user.email).toMatch(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);
    });

    test("user has a phone number", () => {
        expect(user.phoneNumber).toMatch(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);
    });

    test("user has a first name", () => {
        expect(user.firstName).toBeTruthy();
    })

    test("user has a last name", () => {
        expect(user.lastName).toBeTruthy();
    })
});

describe("math functions", () => {
    test("given 2 and 2, add() returns 4", () => {
        const result = add(2, 2)
        expect(result).toEqual(4)
    })

    // it() is an alias for test()
    it("subtract() takes 10 and 5 and returns 5", () => {
        const result = subtract(10, 5)
        expect(result).toEqual(5)
    })

    it("subtract() takes 2 and 15 returns 13", () => {
        const result = subtract(2, 15)
        expect(result).toEqual(13)
    })
})

describe("'add' function", () => {

    const cases = [
        [2, 5, 7],
        [10, 10, 20],
        [-5, 5, 0],
        [100, 1000, 1100],
        [2, 2, 4]
    ]

    test.each(cases)("given z and y as arguments, add() returns z", (argX, argY, resultZ) => {
        const result = add(argX, argY);
        expect(result).toEqual(resultZ)
    })
})