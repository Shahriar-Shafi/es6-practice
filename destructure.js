const person = { name: "Shahzad", age: 15, address: "Jamal Khan", gfName: "Rupali", job: "Student", phone: "0177925637", friends: ["Sidart", "Khaluya", "Mogless"] }

// If we want to find an object from a variable we have put it inside curly bracket
const { name, phone, gfName, friends } = person;
// const gfName = person.gfName;
// const phone = person.phone
console.log(name, ...friends, gfName, phone);

const superStars = ["Sakib Khan", "Sharukh Khan", "Amir Khan", "Salman Khan"]
const [firstStar, SecondStar, ...restStar] = superStars
console.log(restStar);

const complexObject = {
    name: "Boss",
    info: {
        leader: "Shahroj",
        address: "Kola Bagan"
    }
}
const {leader} = complexObject.info;
console.log(leader);