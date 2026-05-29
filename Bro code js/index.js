// let fullName="Megha Vashsiht";
// let age= 25;
// let student =false;

// document.getElementById("p1").textContent=`Your name is ${fullName}`;
// document.getElementById("p2").textContent=`your age is ${age}`;
// document.getElementById("p3").textContent=`you are a student ${student}`;

// let userName;
// userName=window.prompt("What's your name?");
// console.log(userName)

// document.getElementById("mySubmit").onclick = function(){
//     userName=document.getElementById("mytext").value;
//     document.getElementById("myH1").textContent= `Hello ${userName}`;

// }
// let age=window.prompt("How old are you?");
// age=Number(age);
// age+=1;
// console.log(age ,typeof age);
// let x;
// let y;
// let z;
// x=Number(x);
// y=String(y);
// z=Boolean(z);
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);
// let pi=3.14159;
// let radius;
// let circumference;
// radius = window.prompt("Enter the radius of a circle: ");

// document.getElementById("mysubmit").onclick=function(){
//     radius=document.getElementById("mytext").value;
//     radius = Number(radius);
//     circumference= 2 * pi * radius;
//     document.getElementById("myh3").textContent = circumference;
// }
// let x=3.21;
// let y=2;
// let z;

// z=Math.round(x);
// console.log(z)

// let age = 25;
// let hasLicense = true;
// if (age >=16){
//     console.log("You are old enough to drive");
//     if(hasLicense){
//         console.log("You have your license");

//     }
//     else{
//         console.log("You do not have your license");
//     }
// }
// else{
//     console.log("You must be 16+ to have your license");
// }

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mysubmit");
// const resultElement = document.getElementById("resultElement");

// let age;

// mySubmit.onclick = function () {

//     age = myText.value;
//     age = Number(age);
//   if (age >= 100) {
//     resultElement.textContent =`You are too old to enter this site`;
//   } else if (age == 0) {
//     resultElement.textContent =`you cannot enter. you are just born`;
//   } else if (age >= 18) {
//     resultElement.textContent =`You are old enough to enter this site`;
//   } else if (age < 0) {
//     resultElement.textContent =`Your age cannot be less than zero`;
//   } else {
//     resultElement.textContent =`You must be 18+ to enter this site`;
//   }
// };

// const myCheckbox = document.getElementById("myCheckbox");
// const visaBtn = document.getElementById("visaBtn");
// const mastercardBtn = document.getElementById("mastercardBtn");
// const paypalBtn = document.getElementById("paypalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = function(){
//     if(myCheckbox.checked){
//         subResult.textContent=`You are subscribed`;
//     }
//     else{
//         subResult.textContent=`You are not subscribed`;
//     }
//     if(visaBtn.checked){
//         paymentResult.textContent=`You are payin with visa`;
//     }
//     else if(mastercardBtn.checked){
//         paymentResult.textContent=`You are payin with mastercard`;
//     }
//     else{
//         paymentResult.textContent=`You are paying with paypal`;
//     }
// }

// let age = 21;
// let message = age >=18? "You are an adult" : "You are a minor";

// let day = "pizza";
// switch(day){
//     case 1:
//         console.log("It is monday");
//         break;
//     case 2:
//         console.log("It is tuesday");
//         break;
//     case 3:
//         console.log("It is wednesday");
//         break;
//     case 4:
//         console.log("It is thursday");
//         break;
//     case 5:
//         console.log("It is friday");
//         break;
//     case 6:
//         console.log("It is saturday");
//         break;
//     case 7:
//         console.log("It is sunday");
//         break;
//     default:
//         console.log(`${day} is not a day`);
// }

// let testScore=98;
// let letterGrade;

// switch(true){
//     case testScore >= 90:
//         letterGrade="A";
//         break;
//     case testScore >= 80:
//         letterGrade="B";
//         break;
//     case testScore >= 70:
//         letterGrade="c";
//         break;
//     case testScore >= 60:
//         letterGrade="D";
//         break;
//     default:
//         letterGrade = "F";
// }

// let userName = "Megha vashisht";
// // console.log(userName.charAt(0));
// // console.log(userName.indexOf("o"));
// // console.log(userName.length);
// // console.log(userName.trim());
// let result = userName.includes(" ");
// if (result){
//     console.log("Your username includes a white space");
// }
// else{
//     console.log(userName);
// }

// let phoneNumber = "124-456-789";
// // phoneNumber = phoneNumber.replaceAll("-","/");
// phoneNumber = phoneNumber.padStart(15, "0");
// console.log(phoneNumber);

// const fullName = "Megha Vashisht";
// let firstName = fullName.slice(0,7);
// let lastName = fullName.slice(7,13);
// let firstChar = fullName.slice(0,1);

// let firstName = fullName.slice(0,fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ")+1);
// console.log(firstName);
// console.log(lastName);
// console.log(firstChar);

// let email = "megha26@gmail.com";
// let userName = email.slice(0,email.indexOf("@"));
// let extension = email.slice(email.indexOf("@")+1);
// console.log(userName);
// console.log(extension);

//NO METHOD CHANING
// let userName = window.prompt("Enter your username: ");
// username = userName.trim();
// let letter = username.charAt(0);
// letter =letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;
// console.log(username);

//METHOD CHAINING
// let userName = window.prompt("Enter your username: ");

// username = userName.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username);

// const temp = 100;
// if(temp>0 || temp <=30){
//     console.log("Weather is good");
// }

// else{
//     console.log("The weather is bad");
// }

// const isSunny = true;
// if(isSunny){
//     console.log("It is sunny");
// }
// else{
//     console.log("It is not sunny");
// }

// const PI = 3.14;
// if(PI != "3.14"){
//     console.log("That is pi");
// }
// else{
//     console.log("This is not pi");
// }

// let userName = "";
// while (userName === "" || userName === null){//will be continued forever
//    userName = window.prompt(`Enter your name`);
// }
// console.log(`Hello! ${userName}`);

// let userName = "";
// do{
//    userName = window.prompt("Enter your name");
// }while (userName === "" || userName === null);
// console.log(`Hello ${userName}`);

// let userName;
// do{
//    userName = window.prompt("Enter your name");
// }while (userName === "" || userName === null);
// console.log(`Hello ${userName}`);

// let loggedIn = false;
// let userName;
// let password;

// do{
//    userName=window.prompt("Enter your username");
//    password = window.prompt("Enter your password");

//    if(userName === "myuserName" && password === "myPassword"){
//       loggedIn=true;
//       console.log("You are logged in");
//    }
//    else{
//       console.log("Invalid credentials! try again");
//    }
// }while(!loggedIn)

// forloop repeats a code for a limited number of times

// for(let i = 0; i <=10; i++){
//    console.log(i);
// }

// for (let i = 1; i <= 20; i++){
//    if(i == 13){
//       continue;
//    }
//    else{
//       console.log(i);
//    }

// }

// function is a section of a reusable code. declare code once, use it whenever you want. call the function to execute that code

// function happyBirthday(userName,age){
//     console.log("Happy birthday to you");
//     console.log("Happy birthday to you");
//     console.log(`Happy birthday to ${userName}`);
//     console.log("Happy birthday to you");
//     console.log(`You are ${age} years old`);
// }
// happyBirthday("Megha",20);
// happyBirthday("Ishan",30);

// function add(x,y){
//     let result = x + y;
//     return result;
// }
// function subtract(x,y){
//     return x - y;
// }
// function multiply(x,y){
//     return x*y;
// }
// function divide(x,y){
//     return x/y;
// }
// function isEven(number){
//     if(number % 2 ==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// function isValidEmail(email){
//     if(email.includes("@")){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isValidEmail("Megha@fake.com"));

//variable scope is where a variable is recognised and is accessible
// we cannot use the same variable again and again until they are in different scopes
// function function1(){
//     let x = 1;
//     console.log(x);
// }
// function function2(){
//     let x = 2;
//     console.log(x);
// }
// function1();
// function2();
// any variable declared outside the function is accessible everywhere, even inside the function
// local version of any variable will be used first

//array is a variable like structure that can hold more than one value
//  let fruits = ["apple","banana","orange"]
//  fruits[0] = "coconut";
//  console.log(fruits[1]);
//  console.log(fruits);
//  fruits.push("cocnut");// to push an element to the end
//shift is to remove an element form the begining
//unshift is to shift the element from the start and to add new element
//  let numOfFruits = fruits.length;// to find the length of an array
//  let index = fruits.indexOf("banana");
//  console.log(numOfFruits);
//negavtive index display means element does not exist in the array

// fruits.sort().reverse();//to reverse the array
// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }

// spread operator allows an iterable such as an array or a string to be expanded into the separated elements

// let numbers = [1,2,3,4,5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);
// console.log(maximum);
// console.log(minimum);

// let userName = "Megha Vashisht";
// let letters = [...userName].join("-");
// console.log(letters);

// let fruits = ["apple","orange","banana"];
// let vegetables = ["carrots","celery","potatoes"];
// let food = [...fruits,...vegetables,"eggs","milk"];
// console.log(food);
// rest parameter is a parameter that allows a function work with a variable number of arguments by bundling them into an array
//spread expands an array into separate elements
//rest bundles separate elements into an array

// rest parameters allow a function work with a variable number of argments by bundling them into an array

// function openfridge(...foods){
//     console.log(foods);
// }

// function getFood(...foods){
//     return foods;
// }
// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// //openfridge(food1,food2,food3);
// const foods = getFood(food1,food2,food3);
// console.log(foods);

// function sum(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result
// }
// const total = sum(1,2,2,4,5);
// console.log(`Your total is $${total}`);

// function getAverage(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }
//     return result/numbers.length;
// }
// const total = getAverage(75,100,89,90,50);
// console.log(`Your average is ${total}`);

//
// call back is a function that is passed as an argument to another function.

// hello(goodbye);

// function hello(callback){
//     console.log("Hello");
//     callback();
// }
// function goodbye(){
//     console.log("goodbye");
// }

// sum(displayConsole,1,2);
// function sum(callback,x,y){
//     let result = x + y;
//     callback(result);
// }
// function displayConsole(result){
//     console.log(result);
// }
// function displayPage(result){
//     document.getElementById("Myh1").textContent = result;
// }

//for each method is used to iterate over the elements of an array and apply a specified function to each element

// let numbers = [1,2,3,4,5];

// //numbers.forEach(double);
// numbers.forEach(triple);
// numbers.forEach(display);
// // numbers.forEach(square);
// // numbers.forEach(cube);
// function double(element, index, array){
//     array[index] = element * 2;
// }
// function triple(element, index, array){
//     array[index] = element * 3;
// }
// function square(element, index, array){
//     array[index] = element * element;
// }
// function cube(element, index, array){
//     array[index] = element * element * element;
// }
// function display(element){
//     console.log(element);
// }

// let fruits = ["Apple","orange","banana","coconut"];
// fruits.forEach(capitalise);
// fruits.forEach(dispaly);
// function upperCase(element,index,array){
//     array[index] = element.toUpperCase();
// }
// function lowerCase(element,index,array){
//     array[index] = element.toLowerCase();
// }
// function capitalise(element, index, array)
// {
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }
// function dispaly(element){
//     console.log(element);
// }

//.map() will accept a callback and apply that function to each element of an arrat the returns a new array

// const numbers = [1,2,3,4,5];
// const squares = numbers.map(square);
// console.log(squares);
// function square(element){
//     return Math.pow(element,2);
// }
// const numbers = [1,2,3,4,5];
// const cubes = numbers.map(cube);
// console.log(cubes);
// function cube(element){
//     return Math.pow(element,3);
// }

// const students = ["Megha","Patrik", "Sandy","aditya"];
// const studentsUpper = students.map(upperCase);
// console.log(studentsUpper);
// function upperCase(element){
//     return element.toUpperCase();
// }

// const dates = ["2024-1-10","2025-2-20","2026-3-30"];
// const formattedDates = dates.map(formatDates);
// console.log(formattedDates);
// function formatDates(element){
//     const parts = element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }

//.filter creates a new array by fileteringout the elements

// let numbers = [1,2,3,4,5,6,7,8];

// let oddNums = numbers.filter(isOdd);
// console.log(oddNums);
// function isEven(element){
//     return element % 2 === 0;
// }
// function isOdd(element){
//     return element % 2 !== 0;
// }

// const ages = [ 16,17,18.191,20,60];
// const adults = ages.filter(isAdult);
// console.log(adults);

// function isAdult(element){
//     return element >= 18;
// }

// const words = ["apple","orange","banana","kiwi","pomegranate","coconut"];
// const shortWords = words.filter(getShortWords);
// console.log(shortWords);
// function getShortWords(element){
//     return element.length <= 6;
// }

//reduce method is used to reduce the element od=f an array to a single value

// const prices = [12,34,56,78,4,6];
// const total = prices.reduce(sum);
// console.log(`$${total.toFixed(2)}`);
// function sum(accumulator, element){
//     return accumulator + element;
// }

// const grades = [75,50,90,80,95];
// const maximum = grades.reduce(getMax);
// console.log(maximum);
// function getMax(accumulator,element){
//     return Math.max(accumulator,element);
// }

//function declaration defines a block of reusable code that performs a specific task

// function hello(){
//     console.lof("Hello");
// }
//function expression is a way to define function asvalues or variables
// const hello = function(){
//     console.log("Hello");
// }
// hello();

// setTimeout(callback,3000);
// function hello(){
//     console.log("Hello");
// }

// const numbers = [1,2,3,4,5];
// const squares = numbers.map(function square(element){
//     return Math.pow(element,2);
// });
// console.log(squares);

//arrow function is a conscis way to write function expressions good for simple functions thyta you use only once

// const hello = (name) => console.log(`Hello  ${name}`);
// hello("megha");

// an object is a collection of related properties and or methods. it can also represent real world objects

// const person1 = {
//     firstName : "Spongeboob",
//     lastName : "Squarepants",
//     age: 30,
//     isEmployed: true,
//     sayHello: function(){console.log("Hey i am spongeboob")},
//     sayBye: function(){console.log("Goodbye")}
// }

// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);
// const person2 = {
//     firstName : "Patrik",
//     lastName : "Star",
//     age: 42,
//     isEmployed: false,
//     sayHello: function(){console.log("Hey i am spongeboob")},
//     sayBye: function(){console.log("Goodbye")}

// }

// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);

// person1.sayHello();
// person1.sayHello();

//this is a keyword and it is a reference to the object where this is used
// const person1 = {
//     name: "Megha",
//     favFood: "Pizza",
//     sayHello: function(){console.log(`Hi i am ${person1.name}`)},
//     eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
// }
// person1.eat();

//constructor is a special method for defining the properties and methods of an object

// function Car(make,model,year,color){
//     this.make = make,
//     this.color = color,
//     this.model = model,
//     this.year = year
// }

// const car1 = new Car("Ford","Mustang",2024,"red");
// const car2 = new Car("Chevorlet","camaro",2025,"blue");
// console.log(car1.make);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);

//classes provide a cleaner way to work with objects instead of traditional constructor method

// class Product{
//     constructor(name,price){
//         this.name = name;
//         this.price = price;
//     }
//     displayProduct(){
//         console.log(`Product: ${this.name}`);
//         console.log(`Price: $${this.price}`);
//     }
//     claculateTotal(salesTax){
//         return this.price + (this,price * salesTax);
//     }
// }
// const salesTax = 0.05;

// const product1 = new Product("Shirt",19.99);
// product1.displayProduct();

// const total = product1.claculateTotal(salesTax);
// console.log(`Total price with the tax is $${total}`);

//static is a keyword that defines properties or methods that belong to a class itself rather than the objects created from that class

// class MathUtil{
//     static PI = 3.14159;
//     static getDiameter(radius){
//         return radius * 2;
//     }
//     static getCircumference(radius){
//         return 2* radius * this.PI;
//     }
// }
// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));

// class User{
//     static userCount = 0;
//     constructor(username){
//         this.username = username;
//         User.userCount++;
//     }
// }

// const user1 = new User("Megha");
// console.log(user1.username);
// console.log(User.userCount);

// inheritance allows a new class to inherit properties and methods from an existing class.they have parent child relationships

// class Animal{
//     alive = true;
//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// }

// class Rabbit extends Animal{
//     name = "rabbit";
// }

// class Fish extends Animal{
//     name = "fish";
// }

// const rabbit = new Rabbit();
// const fish = new Fish();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();

//super is a kewyword that is used in classes to call the constructor or access the properties and methods of a parent
// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
// class Rabbit extends Animal{
//     constructor(name,age,runSpeed){
//         super(name,age);
//         this.name = name;
//         this.age = age;
//         this.runSpeed = runSpeed
//     }
// }

// class Fish extends Animal{
//     constructor(name,age,flySpeed){
//         super(name,age);
//         this.name = name;
//         this.age = age;
//         this.flySpeed = flySpeed
//     }
// }

// class Hawk extends Animal{
//     constructor(name,age,runSpeed){
//         super(name,age);
//         this.name = name;
//         this.age = age;
//         this.runSpeed = runSpeed
//     }
// }

// const rabbit = new Rabbit("rabbit",1,25);
// const fish = new Fish("fish",2,12);
// const hawk = new Hawk("hawk",3,34);
// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runspeed);

//getter is a special method that makes a property readable
//setter is a special method that makes a property writable

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth) {
//         if (newWidth > 0) {
//             this._width = newWidth; // ✅ correct
//         } else {
//             console.error("Width must be a positive number");
//         }
//     }

//     set height(newHeight) {
//         if (newHeight > 0) {
//             this._height = newHeight; // ✅ correct
//         } else {
//             console.error("Height must be a positive number");
//         }
//     }

//     get width() {
//         return `$this._width.toFixed(1) cm`;
//     }

//     get height() {
//         return `$this._height.toFixed(1) cm`;
//     }
//     get area(){
//         return (this._width * this._height).toFixed(1);
//     }
// }

// const rectangle = new Rectangle(3, 4);

// console.log(rectangle.width);   // 3
// console.log(rectangle.height);  // 4
// console.log(rectangle.area);

// class Person{
//     constructor(firstName,lastName,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     set firstName(newFirstName){
//         if(typeof newFirstName === "string" && newFirstName.length > 0){
//             this._firstName = newFirstName;
//         }
//         else{
//             console.error("First name must be a non empty string");
//         }
//     }
//     set lastName(newLastName){
//         if(typeof newLastName === "string" && newLastName.length > 0){
//             this._lastName = newLastName;
//         }
//         else{
//             console.error("Last name must be a non empty string");
//         }
//     }
//     set age(newAge){
//         if(typeof newAge === "number" && newAge >= 0){
//             this._age =newAge;
//         }
//         else{
//             console.error("Age must be a non negative number");

//         }
//     }
//     get firstName(){
//         return this._firstName;
//     }
//     get lastName(){
//         return this._lastName;
//     }
//     get fullName(){
//         return this._firstName + " " + this._lastName;
//     }
//     get age(){
//         return this._age;
//     }
// }
// const person = new Person("Megha","Vashisht",30);
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullname);
// console.log(person.age);

// destructuring allows us to extarct values from arrays and objects, then assign them to variables in a convinient way
//[] = to perfrom array destructuring
//{}= to perform object destructuring

// let a = 1;
// let b = 2;
// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// const colors = ["red", "green", "blue", "black", "white"];
// [colors[0],colors[4]] = [colors[4],colors[0]];
// console.log(colors);

// const colors = ["red", "green", "blue", "black", "white"];
// const[firstColor, secondColor, thirdColor, ...extraColors] = colors;
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

// const person1 = {
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     age:30,
//     job: "FryCook",
// }
// const person2 = {
//     firstName: "Patrik",
//     lastName: "Star",
//     age:34,
// }

// const {firstName, lastName, age, job="unemployed"} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// function displayPerson({firstName, lastName, age, job}){
//     console.log(`name: ${firstName} ${lastName}`);
//     console.log(`age: ${age}`);
//     console.log(`job: ${job="umemployed"}`);
// }
// const person1 = {
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     age:30,
//     job: "FryCook",
// }
// const person2 = {
//     firstName: "Patrik",
//     lastName: "Star",
//     age:34,
// }

// const {firstName, lastName, age, job="unemployed"} = person1;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

//nested objects are the objects inside other objects. allows you to represent more complex data structures child object is enclosed by a parent object

// const person = {
//     fullName: "Spongeboob Squarepants",
//     age: 30,
//     isStudent: true,
//     hobbies: ["Karate", "jellyfish", "cooking"],
//     address: {
//         street: "124 Conch St.",
//         city: "Bikini Botton",
//         Country: "united states"
//     }
// }
// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[2]);
// console.log(person.address.street);

// for (const propert in person.address){
//     console.log(person.address[property]);
// }

// class Person{
//     constructor(name, age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);
//     }
// }

// class Address{
//     constructor(street, city, country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }

// const person1 = new Person("Megha", 30, "124Conch St. , Bikini bottom , united states");
// const person2 = new Person("Aditya", 34, "124Conch St. , Bikini bottom , united states");

// console.log(person1.name);
// console.log(person1.age);
// console.log(person1.address.street);

// const fruits = [
//     {name: "apple", color: "red", calories: 95},
//     {name: "orange", color: "orange", calories: 45},
//     {name: "banana", color: "yellow", calories: 105},
//     {name: "coconut", color: "white", calories: 159},
//     {name: "pineapple", color: "yellow", calories: 37}
// ]
// // fruits.forEach(fruit => console.log(fruit.name));

// // const fruitNames = fruits.map(fruit => fruit.name);
// // console.log(fruitNames);
// const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
// console.log(maxFruit);

// sort is a method used to sort elements of an array in place. sort elements as strings in lexicographic order, not alphabetical
// each number is treated as a string
// let fruits =[2,4,5,1,3,7,5,9,10];
// fruits.sort();
// console.log(fruits);

// let numbers = [1,10,2,9,3,8,4,7,5,6];
// numbers.sort((a,b) => b-a);
// console.log(numbers);

// const people = [{name: "Spongebob", age: 30, gpa: 3.0},
//     {name: "patrik", age: 37, gpa: 1.5 },
//     {name: "Squidward", age: 51, gpa: 2.5},
//     {name: "Sandy", age: 27, gpa: 4.0}
// ];
// people.sort((a,b) => b.name - a.name);
// console.log(people);

//Fishes yates algorithm
// const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
// shuffle(cards);
// console.log(cards);
// function shuffle(array){
//     for(let i = array.length - 1; i>0; i--){
// const random =Math.floor(Math.random() * (i+1));
// [array[i], array[random]] = [array[random], array[i]];
//     }
// }

// date objects are the ones that contain values which represent dates and times. these dates and times can be formatted

// const date = new Date();
// console.log(date);

// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);

// const date = new Date();
// date.setFullYear(2024);
// date.setMonth(0);
// date.setDate(1);

// console.log(date);

// const date1 = new Date("2023-12-31");
// const date2 = new Date("2024-01-01");
// if(date2 > date1){
//     console.log("Happy New Year");
// }

// a closure is a function that defines the inside of another function, the inner function has the acces to the variables, and the scope of he outer function. allow for the private variables and state maintenace
// function outer(){
//     let message = "hello";
//     function inner(){
//         console.log(message);
//     }
//     inner();// this inner function has the access to everything inside the outer function ncluding the message variable
// }

// message = "goodbye";
// outer();
// closure maintains the state of a variable and makes it private

// function createCounter(){
//     let count = 0;
//     function increment(){

//     count++;
//     console.log(`Count increased to ${count}`);
// }
// function getCount(){
//     return count;
// }

// return {increment,getCount};
// }
// const counter = createCounter();
// counter.increment();
// counter.increment();

// console.log(`The current counr is ${counter.getCount()}`);

// function createGame() {
//   let score = 0;
//   function increaseScore(points) {
//     score += points;
//     console.log(`+${points}pts`);
//   }
//   function decreaseScore(points) {
//     score -= points;
//     console.log(`-${points}pts`);
//   }
//   function getScore() {
//     return score;
//   }
//   return [increaseScore, decreaseScore, getScore];
// }

// const game = createGame();
// game.increaseScore(5);
// game.increaseScore(6);
// game.decreaseScore(4);
// console.log(`The final score of the game is ${game.getScore()}`);
// setTimeout function in javascriot allows you to schedule the execution of a program after a particular set of time

// function sayHello(){
//     window.alert("Hello");
// }
// setTimeout(sayHello,3000);

// setTimeout(function(){window.alert("hello",3000)});

// const timeoutId = setTimeout(() => window.alert("Hello"),3000);

// function startTimer(){
//     timeoutId = setTimeout(() => window.alert("Hello"),3000);
//     console.log("STARTER");
// }

// function clearTimer(){
//     clearTimeout(timeoutId);
//     console.log("CLEARED");
// }

//synchronous is a code that executes line  by line consecutively in a sequential manner
//asynchrinous is a code that allows multiple operations to be performed concurrently without waiting

// function func1(callback){
//     setTimeout(() => {console.log("Task1");
//         callback()
//     },3000);
// }
// function func2(){
//     console.log("Task2");
// }
// func1(func2);

//error objects is an object that is created to represent a problem that occurs
//try, catch and finally block

// try{
//     console.log(x);
// }
// catch(error){
//     console.log(error);
// }
// finally{
//     console.log("This always executes");
// }
// console.log("You have reached the end");

// try{
//     const dividend = Number(window.prompt("Enter a dividend: "));
//     const divisor = Number(window.prompt("Enter a divisor: "));
//     if(divisor == 0){
//         throw new Error("You cannot by zero");
//     }
//     if(isNaN(dividend) || isNaN(divisor)){
//         throw new Error("Values must be number");
//     }
//     const result = dividend / divisor;
//     console.log(result);
// }
// catch(error){
//     console.error(error);
// }
// console.log("You have reached the end");


// DOM - DOCUMENT OBJECT MODEL
//object that represents the page you see in the web browser and provides you with an API to interact with it. web browser constructs the Dom when it looks an html document, and structures all the elements in a tree like representation. Javascript can access the DOM dynamically change the content, structure and style of a webpage

// const username = "Bro Code";
// const welcomeMsg = document.getElementById("welcome-msg");
// welcomeMsg.textContent +=username === ""? `Guest`: username;
// element selectors are the methods used to target and manipulate html elements. they allow you to select one or multiple html elements from the dom

// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";
// console.log(myHeading);
// const fruits = document.getElementsByClassName("fruits");
// // fruits[0].style.backgroundColor = "pink";
// // fruits[1].style.backgroundColor = "blue";
// // fruits[2].style.backgroundColor = "gray";

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow";
// })

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");
// for (let h4Element of h4Elements){
//     h4Element.style.backgroundColor = "yellow";
// }
// for (let liElement of liElements){
//     liElement.style.backgroundColor = "green";
// }

// const fruits = document.querySelectorAll("li");
// fruits.forEach( fruit => {
//     fruit.style.backgroundColor = "yellow";
// })

//DOM navigation is the process of navigating through the structure of an html document

// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const ul = document.querySelectorAll("ul");
// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// })

// const element = document.getElementById("apple");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";
// an event listener for a specific events to create interactive web pages events like click, mouseover or mouseout
// const myBox = document.getElementById("my-box");
// const myButton = document.getElementById("myButton");

// myButton.addEventListener("click",function(event){
//     myBox.style.background = "red";
//     myBox.textContent = "Ouch! 😒";
// });
// myButton.addEventListener("mouseover",event => {
//     myBox.style.background = "yellow";
//     myBox.textContent = "dont do it 😒";
// })
// myButton.addEventListener("mouseout", event => {
//     myBox.style.background = "lightgreen";
//     myBox.textContent = "click me 😊";
// })

// eventlistener such as keyup or key down and keypress

// document.addEventListener("keydown",event => {
//     myBox.textContent = "💕";
//     myBox.backgrounfColor = "pink";
// })
// document.addEventListener("keyup",event => {
//      myBox.textContent = "💖";
//     myBox.backgrounfColor = "yellow";
// })

// const myBox = document.getElementById("myBox");

// const moveAmount = 10;
// let x = 0;
// let y = 0;

// document.addEventListener("keydown", event => {
//     if (event.key.startsWith("Arrow")) {
//         event.preventDefault();

//         switch (event.key) {
//             case "ArrowUp":
//                 y -= moveAmount;
//                 break;
//             case "ArrowDown":
//                 y += moveAmount;
//                 break;
//             case "ArrowRight":
//                 x += moveAmount;
//                 break;
//             case "ArrowLeft":
//                 x -= moveAmount;
//                 break;
//         }

//         myBox.style.top = `${y}px`;
//         myBox.style.left = `${x}px`;
//     }
// });


// const myButton = document.getElementById("myButton");
// const myImg = document.getElementById("myImg");

// myButton.addEventListener("click", event => {
//     if(myImg.visibility === "hidden"){
//         myImg.style.display = "visible";
//         myButton.textContent = "Hide";
//     }
//     else{
//         myImg.style.visibility = "hidden";
//         myButton.textContent = "Show";
//     }
// });

//NodeList in javascript is a static collection of HTML elements by id, class and element. it can be created by using queryselector all()
//Similar to an array, but no map,filter and reduce but have for each method atleast
//Node list wont update to automatically reflect changes
//let buttons = document.querySelectorAll(".myButtons");
// buttons.forEach(button => {
//     button.style.backgroundColor = "green";
//     button.textContent += "Megha";
// });

// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = "tomato"
//     });
// })


// const newBtn = document.createElement("button");
// newBtn.textContent = "button5";
// newBtn.classList = "myButtons";

// Class list in javascript is an element property used to intercat with an elemet's list of classes. Allows you to make reusable classes for many elementd across your webpage

//const myButton = document.getElementById("myButton");
// myButton.addEventListener("mouseover",event =>{
//     event.target.classList.toggle("hover")
// });
// myButton.addEventListener("mouseout",event =>{
//     event.target.classList.toggle("hover")
// });
// myButton.classList.add("enabled");
// myButton.addEventListener("click",event =>{
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "love"
//     }
//     event.target.classList.replace("enabled","disabled")
// });
// const myH1 = document.getElementById("myH1");
// myH1.classList.add("enabled");
// myH1.addEventListener("click",event =>{
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "love"
//     }
//     event.target.classList.replace("enabled","disabled")
// });
// let buttons = document.querySelectorAll(".myButtons");

// buttons.forEach(button => {
//     button.classList.add("enabled");

//     button.addEventListener("mouseover", event => {
//         event.target.classList.add("hover");
//     });

//     button.addEventListener("mouseout", event => {
//         event.target.classList.remove("hover");
//     });

//     button.addEventListener("click", event => {
//         event.target.classList.replace("enabled", "disabled");
//     });
// });
//Callback Hell is a situation in javascript where callbacks are nested within other calbacks to the degree where the code is difficult to read .Old pattern to handle asynchronous functions. Use promises + asyn/awai to avoid callback hell

// function task1(callback){
//     setTimeout(() => {
//         console.log("Task1 is complete");
//         callback();
//     },2000);
    
// }
// function task2(callback){
//     setTimeout(() => {
//         console.log("Task2 is complete");
//         callback();
//     },1000);
    
// }
// function task3(callback){
//     setTimeout(() => {
//         console.log("Task3 is complete");
//         callback();
//     },4000);
    
// }
// function task4(callback){
//     setTimeout(() =>{
//         console.log("Task4 is complete");
//         callback();
//     },2000);
    
// }
// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => {
               
//         });
//     });
// });
// });

//Promise is an objetc in javascript that manages asynchronous operations.Wrap a promis object around{asynchronous code}
//"I promise to return a value"
//Pending -> RESOLVED or Rejected
//new prmoise((resolve,reject) => {asynchronous code})

// function walkDog() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogWalked = true;

//             if (dogWalked) {
//                 resolve("You walked the dog");
//             } else {
//                 reject("You did not walk the dog");
//             }
//         }, 1500);
//     });
// }

// function cleanKitchen() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const kitchenCleaned = true;

//             if (kitchenCleaned) {
//                 resolve("You cleaned the kitchen");
//             } else {
//                 reject("You did not clean the kitchen");
//             }
//         }, 2500);
//     });
// }

// function takeOutTrash() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const trashOut = true;

//             if (trashOut) {
//                 resolve("You took out the trash");
//             } else {
//                 reject("You did not take out the trash");
//             }
//         }, 500);
//     });
// }

// walkDog()
//     .then(result => {
//         console.log(result);
//         return cleanKitchen();
//     })
//     .then(result => {
//         console.log(result);
//         return takeOutTrash();
//     })
//     .then(result => {
//         console.log(result);
//         console.log("You finished all the chores 🎉");
//     })
//     .catch(error => {
//         console.error(error);
//     });

//Async makes a function return a promise whwereas await makes an async funciton wait for a promise
// async function doChores() {
//     try{
//         const walkDogResult = await walkDog();
//     console.log(walkDogResult);
//     const cleanKitchenResult = await cleanKitchen();
//     console.log(cleanKitchenResult);
//     const trashOutResult = await cleanKitchenResult();
//     console.log(trashOutResult);
//     console.log("You finished all the chores");
//     };
//     catch{
//         console.error(error);
//     }
    
// }
// doChores();

//JSON javascript object notation is a data interchange format used for exchanging data between a server and a web application.JSON files are key value pairs

//js.stringify will convert a json object to string

// const jsonnames = `["Spongeboob", "Patrick", "Squidward", "sandy"]`;
// const jsonperson = `{
//     "name":"Spongebob",
//     "age":30,
//     "isEmployed":true,
//     "hobbies":["jellyfishing", "karate", "cooking"]
// }`;
// const jsonpeople = `[{
//     "name":"Spongebob",
//     "age":30,
//     "isEmployed":true
// },
// {
//     "name":"Patrick",
//     "age":34,
//     "isEmployed":false
// },{
//     "name":"Squidward",
//     "age":50,
//     "isEmployed":true
// },
// {
//     "name":"Sandy",
//     "age":27,
//     "isEmployed":false
// }]`;
// const parsedData = JSON.parse(jsonnames);
// console.log(parsedData);

// fetch("people.json").then(response => response.json())
// .then(values => values.forEach(value => console.log(value.name)));



//fetch is a function in js used for making HTTP requests to fetch resources,simplifies asynchronous data fetching in javas cript and used for interacting with APIs to retrieve and send data asynchronously over the web

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => {
//     if(!response.ok){
//         throw new Error("Could not fetch resource");
//     }
//     return response.json();
// })
// .then(data => console.log(data.weight))
// .catch(error => console.error(error));

// async function fetchData() {
//     try {
//         const input = document.getElementById("pokemon");
//         const pokemonName = input.value.trim().toLowerCase();

//         if (pokemonName === "") {
//             alert("Please enter a Pokémon name");
//             return;
//         }

//         const response = await fetch(
//             `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
//         );

//         console.log("Status:", response.status); // 👈 DEBUG

//         if (!response.ok) {
//             throw new Error(`Pokémon not found (${response.status})`);
//         }

//         const data = await response.json();

//         const sprite = document.getElementById("pokemonSprite");
//         sprite.src = data.sprites.front_default;
//         sprite.style.display = "block";
//         const pokemonSprite = data.sprite.front_default;
//         const imgElement = document.getElementById("pokemonSprite");

//         imgElement.src = pokemonSprite;
//         imgElement.style.display = "block";
//     }
//     catch (error) {
//         console.error(error.message);
//         alert(error.message);
//     }
// }


