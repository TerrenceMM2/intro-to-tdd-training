# INSTRUCTIONS

## Exercise Setup

1. After cloning the repository and from the terminal, `cd` into `begin` directory.
2. Execute `npm i` to install dependencies.
3. Execute `npm i -g jest-cli` to install Jest globally.
4. After the dependencies have been installed, open the code in VS Code.

## Exercises

### 1 - Basic JS Testing

1. Open VS Code's integrated terminal and navigate to the `src/utils` directory.

2. Run `jest matchers.test.js --watch`.

3. Press `Enter` when the Watch Usage prompt appears.

4. Create the following test cases:

    - Add two numbers using `.toBe()`
    - Use `.toBeTruthy()`
    - Use `.toBeFalsy()`
    - Use `.toBeNull()`

5. Verify all tests are passing.

6. Press `ctl + c` to exit watch mode.

7. Keep the integrated terminal panel open for the next exercise.

### 2 - Groupings

In this exercise, we will explore grouping tests together using the Jest `describe()` global method. The VS Code integrated terminal should be open to `$APP_HOME/begin/src/utils`.

1. In the `src/utils` directory, open the `helpers.test.js` file in a VS Code Editor Area panel.

    The provided code contains tests for validating email and phone using regex. There are also tests was testing truthiness.

2. With the VS Code's integrate terminal open, run `npm test`.

    The tests will fail. Data will be provided in the next step.

3. In the `src/data` directory, open the `user.js` file.

4. For the object, supply strings values for each property so each test passes.

5. Keep the integrated terminal panel and `helpers.test.js` editor panel open for the next exercise.

### 3 - Writing Functions to Pass

In this exercise, we will practice writing tests _first_ and then writing functions to pass each test. The VS Code integrated terminal should be open to `$APP_HOME/begin/src/utils`.

1. In the `helpers.test.js` file, write the following test plan:

    - `describe()` with the label "math functions".
    - `test()` that uses a function called `add()` that takes in two numbers.
    - `it()` that uses a function called `subtract()` that takes in two numbers, the first larger than the second.
    - `it()` that uses a function called `subtract()` that takes in two number, the first smaller than the second.

    **Starter Code**

    ```
    import { add } from "./helpers"

    describe("math functions", () => {
        test("given 2 and 2, add() returns 4", () => {
            const result = add(2, 2)
            expect(result).toEqual(4)
        })
    })
    ```

2. Run `npm test`.

    The tests will fail. Functions will be created in the next steps to make the tests pass.

3. Open the `./helpers.js` file.

4. Write and export two functions:

    1. A function called "subtract" that takes in two parameters and returns both parameters added together.
    2. A function called "subtract" that takes in two parameters. Ensure the smaller of the two numbers provided is subtracted from the larger number provide, regardless of the order in which the arguments are supplied.

5. Be sure to import both functions to the `helpers.test.js` file.

6. Continue until both tests pass.

7. Keep the integrated terminal panel open for the next exercise.

### 4 - Writing Repetitive Tests

In this exercise, we are going to use the same functions to run through multiple test cases.

1. In the `helpers.test.js` file, copy and paste the following code:

    ```
    describe("'add' function", () => {

        const cases = [
            // Add several arrays with three integers - num, num, sum - that will pass.
        ]

        test.each(cases)("given z and y as arguments, add() returns z", (argX, argY, resultZ) => {
            const result = add(argX, argY);
            expect(result).toEqual(resultZ)
        })
    })
    ```

2. Within the `cases` array, add several additional sub-arrays that contain three integers - number, number, and sum. These sub-arrays should contain values that will cause the test to pass.

3. Keep the integrated terminal panel open for the next exercise.

### 5 - Writing React Tests with Enzyme

Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.

1. In `src/`, open `setupTests.js` in a VS Code editor panel.

    Notice the setup for Enzyme.  
    First, the configure method is imported.  
    Second, the Adapter object is imported from enzyme-adapter-react-16.  
    Finally, we passes a new Adapter objects to Enzyme

2. In `src/`, open `App.js`.

    A simple component with a header, div, and two buttons are provided. The buttons will increment and decrement the components `counter` state and render the value to the #counter-value div.

3. If `npm test` is not running, execute it. Do **NOT** run `npm start`.

4. Within the `describe()` method, create variable called `wrapper` and use the `shallow()` Enzyme method to render the App component.

5. Write a test that finds the `#counter-value` element within the `<App />` component, analyzes the text, and expects that value `.toBe()` 0.

6. Write a test that finds the `#increment-btn` within the `<App />` component and simulates a click event. Then, expects to find the `#counter-value` text value `.toBe()` 1.

7. Write a test that simulates two click events:

    - Click the increment button
    - The value displayed in `#counter-value` is 1.
    - Click the decrement button
    - The value displays in `#counter-value` is 0.

8. Refactor the tests to use the `beforeEach()` Jest method and include the `wrapper` variable.

#### Resources:

-   ["Simplify Repetitive Jest Test Cases with test.each" by Bartosz Gordon](https://dev.to/bgord/simplify-repetitive-jest-test-cases-with-test-each-310m)
-   [(Video) "React TDD in 30 Minute - Test Driven Development with Jest and Enzyme" by Bitfumes](youtube.com/watch?v=-bmdf1oATQo)
