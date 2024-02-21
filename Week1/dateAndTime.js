// Javascripts Date objects represents a single moment in time in a paltform-independent format.
/* Date objects encapsulate an integral number that represents milliseconds since the midnight 
   at the begining of January 1 1970, UTC.*/

// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023, 0, 23) // month start from 0 - Jan
console.log(myCreatedDate.toDateString());

// Formats yyyy/mm/dd

let myCretedate = new Date("2023-01-14") // in string month start from 01 - jan
console.log(myCretedate.toLocaleString());

// TimeStamps

let myTimeStamp = Date.now()
console.log(myTimeStamp);