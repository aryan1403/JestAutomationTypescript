import { asyncGreet, greet, retry } from "./callback";

test("greet calls the callback with the correct greeting", async () => {
    const mockCallback = jest.fn()
            .mockRejectedValueOnce(new Error("fail 1"))
            .mockResolvedValueOnce("success 1");

    const promise = retry(mockCallback, 3);

    await expect(promise).resolves.toBe("success 1");
    expect(mockCallback).toHaveBeenCalledTimes(2);



    greet("Alice", mockCallback);
    // greet("Alice", mockCallback);

    expect(mockCallback).toHaveBeenCalledWith("Hello, Alice!");
    expect(mockCallback).toHaveBeenCalledTimes(3);
});

test("async greet calls the callback", (done) => {
    function callback(greeting: string) {
        try {
            expect(greeting).toBe("Hello, Bob!");
            done();
        } catch (error) {
            done(error);
        }    
    }
    asyncGreet("Bob", callback);

});