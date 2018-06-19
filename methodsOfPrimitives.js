"use strict"

let user = {
    name: "Daniel",
    age: 29,
    sayHi: function() {
        alert ("Hi my name is " + this.name + "and I´m " + this.age + "years old");
    },
};

user.sayHi();