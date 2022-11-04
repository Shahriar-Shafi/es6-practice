// function doubleIt(num) {
//     return  num *2;
// }

// const doubleIt = function (num) {
//     return  num *2;
// }

// Making it easy how to use function
const doubleIt = num => num * 2;
const add = (x, y) => x + y;
// If you don't have any parameter
const give5 = () => 5;
const result = add(50, 70);
console.log(result);

// If we want to include big function we must return the results
const doMath = (x, y) =>{
    const sum = x+y;
    const diff = x-y;
    const result = sum * diff;
    return result;
}
const result2 = doMath(7,5)
console.log(result2);