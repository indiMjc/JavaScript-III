/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Scope - When using 'this' in a function that is within global scope, the value of 'this' will be the window object.

* 2. Implicit Binding - The binding is implied. When we invoke a function, we can tell what 'this' refers to by looking at the dot notation.  Keyword 'this' will refer to whatever is to the left of the dot.

* 3. New Binding - This is when we use the 'new' keyword to construct a new object.  Keyword 'this' points to the new object.

* 4. Explicit Binding - We set the binding.  We can tell the js engine what value we want 'this' to point to.  We use the methods call() and apply() for explicit 'this' binding.
*
* write out a code example of each explanation above
*/

// Principle 1
function windowBinding() {
    console.log(this);
}
// code example for Window Binding

// Principle 2
let myDog = {
    name: 'Indi',
    breed: 'Australian Shepherd',
    says: 'Woof!',
    speak: function() {
        console.log(this.says);
    }
}

myDog.speak();
// code example for Implicit Binding

// Principle 3
function Pet(animalNoise) {
    this.says = animalNoise;
}

let myPet = new Pet('woof');

console.log(`My dog says ${myPet.says} when he gets excited!`);
// code example for New Binding

// Principle 4
function birdLanguage() {
    console.log(`${this.name} says ${this.talk}`);
}

let myBird = {
    name: 'Rainbow',
    talk: 'sqwak!'
}

birdLanguage.call(myBird);
// code example for Explicit Binding