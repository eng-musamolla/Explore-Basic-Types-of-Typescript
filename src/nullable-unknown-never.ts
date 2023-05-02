// nullable type 

const search = (value: string | null) => {
    if (value == null) {
        console.log("This is nothign to search ");
    } else {
        console.log("Finding");
    }
};

search(null);


// unknown type

const getMyBikeSpeed = (speed: unknown) => {

    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    if (typeof speed === 'string') {
        const [value, unit] = speed.split(" ");

        const convertedSpeed = (parseFloat(value) * 1000) / 3600;
        console.log(`My speed is ${convertedSpeed}`);
    } else {
        console.log("There is wrong type");
    }

};

getMyBikeSpeed(100);
getMyBikeSpeed("100 kmh^-1"); //125 kmh-1
getMyBikeSpeed(true); //boolean


// nevr type 

function throwError(text: string): never {
    throw new Error(text);
};

throwError('Valo ho beta')





