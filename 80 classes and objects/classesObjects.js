// let obj = {
//     a : 1 ,
//     b : "rutu"
// }

// console.log(obj);

// let animal = {
//     eats: true
// }
// let rabbit = {
//     jumps: true
// }

// rabbit.__proto__ = animal;




class Animal {
    constructor(name) {
        this.name = name
        console.log('This is constructor of Animal class');
        console.log('Name of Animal is',name);
    }

    eats(){
        console.log('Eating on floor');
    }

    jumps(){
        console.log('jumping in Garden');
    }
}

class lion extends Animal {
    constructor(name){
        super(name)
        console.log('object is created and he is Lion ',name);
    }

// Method overriding
    eats(){
        // using the super Keyword
        super.eats()
        console.log('Eating in the Den');
    }

}

let a = new Animal("Money");
console.log(a); 

let l = new lion("Shera")
console.log(l)






// FILE NUMBER 2

// class User {
//     constructor(name){
//         this.name = name
//     }

//     get name() {
//         return this._name
//     }

//     set name(newName){
//         if(value.length < 4) {
//             console.log('The name is too short');
//             return;
//         }
//         this._name = newName
//     }
// }


// let user = new User("John")
// console.log(user.name);

// user.name = "Ruturaj"
// console.log(user);