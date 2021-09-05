function sayHello() {
    console.log("Hello World!");
}
//both formats are the same
setTimeout(function sayHello() {
    console.log("Hello World!");
}, 4000);

console.log(setTimeout(sayHello,3000));

setTimeout(function sayGoodBye() {
console.log("See ya");
}, 5000);

function sayGoodNight() {
    console.log("Gute Nacht");
}

// setInterval(sayGoodNight, 2000);

let counter = 0
function myFunction () {
    counter += 5;
    console.log(`Counter = ${counter}`);
}

// setInterval(myFunction,3000);
let counter2 = 0;
//Write a function that increments the variable "counter" by 1 every time it is called
function countdown () {
  counter2++;
  console.log(counter2)
}
//Schedule the execution og the function every 3 seconds
setInterval(countdown, 3000);

let time = 3000;
let position = 0;
let velocity = 5;

function movingForward() {
    position += velocity;
    console.log(`Position: ${position}`)
}
setInterval(movingForward, time);
