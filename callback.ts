export function asyncGreet(name: string, callback: (greeting: string) => void): void {
    setTimeout(() => {
        callback(`Hello, ${name}!`);
    }, 1000);
};


export function greet(name: string, callback: (greeting: string) => void): void {
    callback(`Hello, ${name}!`);
}


export async function retry<T>(fn: () => Promise<T>, retries: number): Promise<T> {
    let lastError: any;
    for (let attempt = 0; attempt < retries; attempt++) {
        try {
            return await fn();
        } catch (error) {
            lastError = error;
        }
    }
    throw lastError;
}


// greet("Alice", (greeting) => {
//     console.log(greeting); // Outputs: Hello, Alice!
// });