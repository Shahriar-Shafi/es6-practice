class Parent{
    constructor(){
        this.fatherName = "One For All"
    }
}

// class variable is always typed with capital letter
// To connect to its parent we have to extend it and add super() in constructor
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    // Function can be written here without writting function programe
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child("All Might");
const baby2 = new Child("Deku");
console.log(baby.getFullName());
console.log(baby2.getFullName());