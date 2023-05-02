const user: {
    readonly company: string,
    age: number,
    isMarried: boolean,
    wife?: string,
} = {
    company: '10 Technique',
    age: 54,
    isMarried: true,
}

// console.log(usser);


const arr = [1, 4, 5];

const newArray = arr.map((elem: number) => elem * elem)

// console.log(newArray);

const person: {
    name: string,
    balance: number,
    addBalance(money: number): void;
} = {
    name: 'Mesza',
    balance: 10,
    addBalance(money: number) {
        console.log(`My New Balance is : ${this.balance + money}`);
    }
};

// console.log(person);