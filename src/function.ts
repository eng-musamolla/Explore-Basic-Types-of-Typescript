
function add(num1: number, mun2: number = 10) {
    return num1 * mun2;
}

// console.log(add(3));


const addArrow = (num1: number, num2: number): number => num1 + num2;

// console.log(addArrow(4, 5))


// spread Opearator
const myFriend = ['Mir Shaon', 'Shagor', 'Murshid'];
const newFriend = ['Khandakar', 'kabul', 'abul'];

myFriend.push(...newFriend);

// console.log(myFriend);


// rest paremeter
const greetFriends = (...friends: string[]): void =>
    friends.forEach((friend) => console.log(`Hi ${friend}`));


// greetFriends('Ram', 'Sham', 'jodu', 'Modhu', 'Kodu');


// array and object destructuring

const [...bestFriend] = newFriend

console.log(bestFriend);



