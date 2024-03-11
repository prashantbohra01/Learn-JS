/* Exercise 1:
   -----------
   
   Write a JavaScript program to get the extension of a
   filename.

*/

// Method 1

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
console.log(getFileExtension('index.html'));

// Method 2

function getFileExtensions(filename) {
    const parts = filename.split('.');
    
    if (parts.length >= 2) {
        return parts[parts.length - 1];
    } else {
        return "";
    }
}

const filename1 = "example.txt";
console.log(getFileExtensions(filename1)); 

const filename2 = "document";
console.log(getFileExtensions(filename2)); 