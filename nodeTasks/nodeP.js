
//************************ Exercise 1********** */

// function callBack(a){
//   console.log("I receive ", a)
//   
// callBack(100);



//***************************** Exercise 2********** */
// function Person(name,age){
//   this.name = name,
//   this.age = age,
//       this.describe = function(){
//          return this.name +","+ this.age 
//       }
//   }
//   var jack = new Person("Jack", 25);
//   var jill = new Person("Jill", 24);
//   console.log(jack.describe(),"years old." );               
//   console.log(jill.describe(),"years old." );



//***************************** Exercise 3********** */
// var person = {
//   firstName: 'Megha',
//   lastName: 'Rawat',
//   age: '22'
// }
// function fullName(){
//   return this.firstName + " " + this.lastName ;
// }

// function fulldetails(){
//   return this.firstName + " " + this.lastName + "is" + this.age + "years old.";

// }
// var boundFullName = fullName.bind(person);
// var boundFullDetail = fulldetails.bind(person);
// boundFullName();
// boundFullDetail();

 
//***************************** Exercise 4********** */
// var myArr = [9,5,4,0,6,"Megha"];
// myArr.push("Rawat");
// myArr.shift();
// console.log(myArr);


//***************************** Exercise 5********** */

// function useCallback(callback)
// {
//     callback("Hello 1");
//     callback("Hello 2");
//     callback("Hello 3");
// }

// function callback(sentence) {
//     console.log(sentence);
//     // TODO: print out sentence
// }

// useCallback(callback);

//***************************** Exercise 6********** */

var Person = function() {};

Person.prototype.initialize = function(name, subject)
{
    this.name = name;
    this.subject = subject;
}

var Teacher = function() {
    this.teach = function(subject){
        console.log(this.name + " is now teaching " + this.subject);
    }
}
Teacher.prototype = new Person();
var him = new Teacher();

him.initialize("Megha", "JavaScript");
him.teach();

