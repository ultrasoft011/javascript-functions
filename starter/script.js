'use strict';

// Default parameters
// Optional: Declare an array to push every object inside the array
const myArray = []

// Declare a function 
const ultraSoft = function (company, numWorkers, totalAmount) {
    const Soft = {
        company, 
        numWorkers,
        totalAmount,
    }
    console.log(Soft);
    myArray.push(Soft);
    console.log(myArray);
}

ultraSoft('Komodo');
ultraSoft('Komodo', 1000, 1234567);