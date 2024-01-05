const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
const slice = (lower,upper) =>{
    let modified = []
    for(i=lower; i<upper-1;i++){
        modified.push(foods[i])
    }
    return modified
}
// Progression 2:
const spliced = () =>{
    foods.splice(2,0,'noodles', 'icecream')
    return foods
}
// Progression 3:
function isEven(number){
    return number%2==0 ? true:false;
}
function isPrime(number){
    for(let i = 2, s = Math.sqrt(number); i <= s; i++)
        if(number % i === 0) return false; 
    return number > 1;
}
function checkNumber(numberArray, operation){
    modifiedNumberArray = numberArray.filter(operation);
    return modifiedNumberArray;
}
// Progression 4:
const reject = (numberArray) =>{return numberArray.filter(num=>!isPrime(num))}
const nonPrime = (numberArray) => {return reject(numberArray)}

// Progression 5:
const isEvenUsingLambda = number => number%2==0;

// Progression 6:
const square = (number) => number*number;
const findSquareOfNumbers = (myArray) => myArray.map(square)

// Progression 7:
function multiply(myArray){
    return myArray.reduce((multiplied, number)=>{
        return multiplied*number;
    },1);
}
function sumOfSquares(myArray){
    return myArray.map(square).reduce((sum,number)=>{
        return sum+number;
    },0)
}

