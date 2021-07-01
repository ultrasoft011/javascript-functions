'use strict';

// DEFAULT PARAMETERS
// Optional: Declare an array to push every object inside the array
const myArray = []

// Declare a function: I can set default values directly as an arguments
const ultraSoft = function (company, numWorkers = 1000, totalAmount) {
    const Soft = {
        company, 
        numWorkers,
        totalAmount,
    }
    // console.log(Soft);
    myArray.push(Soft);
    // console.log(myArray);
}

// Passing only just one parameter or some
ultraSoft('Komodo');
ultraSoft('Komodo', 2000, 1234567);
// If I don't have some of the values I can set the respective value as "undefined"
ultraSoft('Komodo', undefined, 12234);

// HOW PASSING ARGUMENTS WORKS: VALUE VS REFERENCE
// When we passed a reference type to a function what is copied is just the reference to the object in the memory heap

const changeName = function (a) {
    a = 'Felipe';
}

var myName = 'Andres';

changeName(myName);
// Even the functon is changing the value of "a" it will not affect the item that was passed to the function
 console.log(myName);

function changeStuff(a, b, c)
{
  a = a * 10;
  b.item = "changed";
  c = {item: "changed"};
}

var num = 10;
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

console.log(num);