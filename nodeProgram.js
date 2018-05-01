//***************************************  Task 1 ********************************* */
//***************** Print hello world in terminal ********************************* */

console.log("Hello World");


/***************************************  Task 2 ********************************* 
  Write a program that accepts one or more numbers as command-line arguments  
  and prints the sum of those numbers to the console (stdout). */

const arr = process.argv;
var sum;
for (var i = 2; i < arr.length; i++) {
    
    sum += arr[i]
  }
console.log("sum is-",sum);

// console.log("Sum is",+process.argv[2]);


/***************************************  Task 3 ********************************* 
           Write a program that uses a single synchronous filesystem operation to  
          read a file and print the number of newlines (\n) it contains to the */ 
console
const fs = require('file-system')
console.log(fs)

//fs.writeFile('file/test.txt','aa', function(err){})

fs = require('fs');
fs.readFile('file/test.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log("There is an error");
  }
  else{
   
    var newLines = data.toString().split('\n').length - 1
    console.log(newLines);
  }

 
});


