const age = [12, 15, 18, 11];
const age2 = [10, 12, 14, 16];
const age3 = [22, 25, 27, 30];
// to add all array in single one we use concat & concat([5]) is used to enter new digit us==inside the arrray
const allAges = age.concat(age2).concat([5]).concat(age3);
// (...) is used to spread an array inside another array
const allAges2 = [...age, ...age2, 5, ...age3]
// console.log(allAges2);

const buisness = 250;
const minister = 600;
const asylam = 800;
const bigMoney = [250, 600, 800];
// const maximum1 = Math.max(buisness, minister, asylam)
const maximum2 = Math.max(...bigMoney)
console.log(maximum2);