const point = { x: 1, y: 2, z: 3 };
let a = point.x;
let b = point.y;

const {x, z} = point;

[a, b] = [b, a]; // swap values
// console.log(a, b);


// console.log(x, y);

// Complex destructuring example
// const {
//  user: { profile: { name, email } },
//  settings: { theme = 'light', ...otherSettings }
// } = apiResponse;

const user = {
    id: 1,
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    }
}

const { address: { city, country }, ...others } = user;
// console.log(city, country, others);

// Rest operator in array destructuring
const arr = [1, 2, 3, 4, 5];

const [first, second, third, ...anything] = arr;
// console.log(first, second, third, anything);

function sum(...numbers: number[]): number {
 let res = 0;
    for (const num of numbers) {
        res += num;
    }
    return res;
}

// console.log(sum(1, 2, 3));


// type off

let num = "true";

// if (typeof num === "string") { num = num.toUpperCase()}

// console.log(num);
if(10 in arr) {
    console.log("yes");
}

// Real world use case

const apiResponse = {
    status: 'success',
    code: 200,
    data: {
        apiString: 'some data',
    }
}

if(apiResponse.data.apiString in apiResponse.data) {
    // execute operations
}

// class Person {}
// class Employee extends Person {}
// const alice = new Person();

// console.log(alice instanceof Employee);

const names = ['Alice', 'Bob', '_Charlie'];

// console.log(new Number(5) instanceof Number);







