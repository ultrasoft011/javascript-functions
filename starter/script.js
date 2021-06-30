'use strict';

// Default parameters
// Optional: Declare an array to push every object inside the array
const myArray = []

// Declare a function: I can set default values directly as an arguments
const ultraSoft = function (company, numWorkers = 1000, totalAmount) {
    const Soft = {
        company, 
        numWorkers,
        totalAmount,
    }
    console.log(Soft);
    myArray.push(Soft);
    console.log(myArray);
}

// Passing only just one parameter or some
ultraSoft('Komodo');
ultraSoft('Komodo', 2000, 1234567);
// If I don't have some of the values I can set the respective value as "undefined"
ultraSoft('Komodo', undefined, 12234);