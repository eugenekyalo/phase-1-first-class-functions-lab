// Code your solution in this file!
// Define a function named returnFirstTwoDrivers using const
const returnFirstTwoDrivers = function(drivers) {
    //  Return  new array containing the first two drivers in the input array
    return drivers.slice(0, 2);
}

//Now Define a function named returnLastTwoDrivers using const
const returnLastTwoDrivers = function(drivers) {
    // Then Return a new array containing the last two drivers in the input array
    return drivers.slice(-2);
}

//  Define an array named selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Also  Define a higher-order function named createFareMultiplier
const createFareMultiplier = function(integer) {
    //Finaly  Return a function that multiplies a fare by the provided integer
    return function(fare) {
        return fare * integer;
    }
}

// Define a variable named fareDoubler
const fareDoubler = createFareMultiplier(2);

//  Define a variable named fareTripler
const fareTripler = createFareMultiplier(3);

//  Define a function named selectDifferentDrivers
const selectDifferentDrivers = function(drivers, driverFunction) {
    // To Finish Off Call the provided driverFunction with the input array of drivers
    return driverFunction(drivers);
}

