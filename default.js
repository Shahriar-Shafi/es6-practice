//if you forget to input a value, still it will give result (|| means or)
function add(num1, num2 = 50) {
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    // num2 = num2 || 0;
    return num1 + num2;
}
const total = add(15);
console.log(total)