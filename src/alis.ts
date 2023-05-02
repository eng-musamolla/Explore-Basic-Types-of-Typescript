type CrushType = {
    name: string,
    age?: number,
    profession: string,
    address: string
}

const crush1: CrushType = {
    name: 'Moyna Pakhi',
    age: 22,
    profession: 'Web Developer',
    address: 'Udanda'
};


const crush2: CrushType = {
    name: 'Taia Pakhi',
    profession: 'Next Level web developer',
    address: 'gopalganj'
};


type OperationType = (x: number, y: number) => number;
const calculate = (
    number1: number,
    number2: number,
    operation: OperationType
) => {
    return operation(number1, number2);
};

console.log(calculate(12, 10, (x, y) => x + y));
console.log(calculate(100, 10, (x, y) => x - y));
console.log(calculate(12, 10, (x, y) => x * y));
console.log(calculate(200, 20, (x, y) => x / y));