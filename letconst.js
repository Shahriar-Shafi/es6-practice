const numbers = [12, 46];
numbers[1] = 88;
numbers.push(12)
console.log(numbers);
const nayok = {name: "Sakib Khan", phone: 4578};

let patientName = "Shahroj Shafi";
patientName = "Shahzad Shafi";
console.log(patientName);

let sum =0;
//if let is used instead of var in for loop then it cannot be called outside the brackets using console
for (let i = 0; i < 10; i++) {
   sum = sum + i;
}