import { greet } from "./callback";

test("greet calls the callback with the correct greeting", () => {
    const mockCallback = jest.fn();

    greet("Alice", mockCallback);
    // greet("Alice", mockCallback);

    expect(mockCallback).toHaveBeenCalledWith("Hello, Alice!");
    expect(mockCallback).toHaveBeenCalledTimes(1);
});