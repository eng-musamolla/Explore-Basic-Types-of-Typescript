// ternary operator

const age: number = 23;
const isAdult = age >= 18 ? 'Yes' : 'No';
console.log(isAdult);


// Nullish Coalesnace Operator
// Null and Undefined


const isAuthenticatdedUser = null;
const userName = isAuthenticatdedUser ?? "Guest";
const userName2 = isAuthenticatdedUser ? isAuthenticatdedUser : "Guest";

console.log({ userName }, { userName2 });


type HabluDa = {
    name: string,
    age: number,
    address: {
        city: "Jaflong"
        road: "চাদের পাহাড়",
        home?: ""
    }
};

const Man: HabluDa = {
    name: 'Mofiz',
    age: 32,
    address: {
        city: 'Jaflong',
        road: 'চাদের পাহাড়',
    }
};


const Man2 = Man?.address?.home ?? 'No Home'; // default "No Home"

console.log(Man2);

function generateAdder(a: number): (b: number) => number {

    return function (b: number) {

        return a + b;

    };

}



const addTwo = generateAdder(2);

console.log(addTwo(3));

console.log(addTwo(5));