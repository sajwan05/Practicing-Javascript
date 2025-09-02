
// const { StrictMode } = require("react");

// const { createContext } = require("react");

// console.log("This is another way to run js code with the help of external js sheet");

// // let wifeName= "Prisha";
// // let  name= "Suraj";

// let ageWife= 22;

// console.log(ageWife);

// // Age after 10 yaers

// let ageAfter10Years = ageWife + 10;

// console.log("Age of "+name+ "'s wife after 10 year is "+ ageAfter10Years);



// let age = 26;
// // Age after 10 years


// console.log(age);
// age= age+ 10;
// console.log(age);

// console.log(wifeName);
// console.log(name);




// // we can also assign variable with pi 

// const pi = 3.14;

// // pi = 10;

// console.log(pi);

// console.log(23 + 7);

// console.log(34 + 44673);

// console.log(5+6);
// console.log(4+3);
// console.log(11-4);

// console.log(25+ 5647+ 3633+ 46737-3637-3638)

// console.log( (4+6+9) / 77);

// let a = 10;
// console.log(a);

// a = 4637;

// console.log(a);

// let b = 7 * a;

// console.log(b);

// console.log(32459/7);

// const max = 57;

// const actual = max - 13;

// const percentage = (actual / max);

// console.log(percentage);


// let $ = 1;
// let _ = 2;

// console.log($ + _);

// // // let 1a;
// // let my-name;   wrong way to declare variable

// let имя = '...';
// let 我 = '...';

// console.log(`my name is ${имя} and her name is ${我}`);

// // let return = 5;

// name = "suraj";

// console.log(name);

// // num = 5;

// // console.log(num);

// const myBirthday = '05.12.1998';

// console.log(myBirthday);

// myBirthday = '01.03.2001';


// let admin;
// let name;

// name = "John";
// admin = name;

// alert(admin);

// const ourPlanetName = "Earth";

// let currentUserName = "suraj";

// console.log(ourPlanetName);
// console.log(currentUserName);

// let x = 5;
// let y = 2;

// console.log(x % y)

// console.log( y % x)

// let x = 5;

// let z = x ** 2;
// console.log(z)

// let a = Math.pow(x, 2);
// console.log(a);

// let y = x++;

// console.log(y);
// console.log(y);

// console.log(x);

// let z = 75;

// let a = ++z;

// console.log(a);
// console.log(z);

// let x = 123e5;
// console.log(x)

// x = 437383e-6;

// console.log(x);

// let x = 0.2 + 0.1;
// console.log(x)

// x = (10 * (0.2 + 0.1))/10;

// console.log(x);

// x = (0.2 * 10 + 0.1 *10)/10;
// console.log(x);

// x = "10";

// let y ="suraj";

// let c = x + y;
// console.log(c)

// x = 100/ "Apple";

// console.log(typeof x);


// let myNumber = 2;
// let txt ="";
// while( myNumber != Infinity){
//     myNumber = myNumber * myNumber;
//     // console.log(myNumber);

//     txt = txt +  myNumber ;
//     console.log(txt);
// }

// let x = 2/ 0;
// let y = -2 / 0;

// console.log(`Kya hoga answer bhyii ${x} and ${y}`)

// let x = 0xFF;
// x = 0645;
// console.log(x)

// let number = 32;
// let a = number.toString(10);

// console.log(a)

// b = number.toString(16);

// console.log(b)

// let c = number.toString(8)
// let d = number.toString(2);

// let e = number.toString(12);

// let f = number.toString(17);

// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)


// Javascript number as objects
// let x = 123;

// let y = new Number(45);

// console.log(x)
// console.log(y)

// console.log(typeof x);
// console.log(typeof y);

// const button = document.querySelector("button");

// function greet () {
//     const name = prompt("Please enter your name : ");
//     const greeting = document.querySelector("#greeting");

//     greeting.textContent = `Hello ${name}, nice to see you!`;

// }

// button.addEventListener("click", greet)

// let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// let length = text.length;

// console.log(length);

// for extracting strings characters

// at(position) Method
//charAt(position)
//charCodeAt(position)
//Using property access [] like in arrays


// javascript string charAt():

// The charAt() method returns the character at a specified index(position) in a string:

// text = "hello worlD";

// let char = text.charAt(0);
// console.log(char);

// // charCodeAt() --> returns the code of the character 

// let code = text.charCodeAt(2);
// console.log(code)

// let codePoint = text.codePointAt(2, 3)

// console.log(codePoint);

// text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// console.log(text.length);


// Extracting string characters

//The at(position) Method
// charAt(position) Method
// charCodeAt(position) Method
// Using property access [] like in arrays

// const newString = text.at(0);

// console.log(newString);

// // newString = text.codeAt

// let char = text.charAt(0);

// console.log(char);

// let code = text.charCodeAt(text.length - 26);

// console.log(code);

// let text = "HELLO WORLD";

// // let char = text.charAt(0);

// // console.log(char);

// char  = text.charCodeAt(0);

// console.log(char);

// let code = text.codePointAt(0);

// console.log(code);

// const name = "W3Schools";

// let letter = name.at(2);

// console.log(letter);

// letter2 = name[2];

// console.log(letter2)

// let last = name.charAt(name.length - 2);

// console.log(last)

// let last2 = name.at(-2);

// console.log(last2);

// console.log(text[0]);

// text[0] = "A";

// console.log(text[0]);

// // JavaScript concat()

// let text1 = "Hello";
// let text2 = "World";

// let text3 = text1.concat(" ",text2);

// console.log(text3);

//3 methods for extracting a part of a string:

// slice(start, end);
// substring(start, end);
// substr(start, length);


// string slice  -- end not included

//  text = "Apple, Banana, Kiwi";
// let part = text.slice(0, 6)

// console.log(part);

// part = text.substring(0, 6)
// console.log(part);


// Extracting String Parts

// There are 3 methods for extracting a part of a string:

// slice(start, end) ---> end is not included
// substring(start, end)
// substr(start, length)

// let text = "Apple, Banana, Kiwi";

// let char = text.charAt(5);
// let code = text.charCodeAt(5);
// let code2 = text.codePointAt(5);


// let string = text.at(5);

// // to find last one 

// let charLast = text.charAt(text.length - 1);

// let stringLast = text.at(-1);

// console.log(char);
// console.log(code);
// console.log(code2);
// console.log(string);
// console.log(charLast);
// console.log(stringLast);

// let part = text.slice(0);
// let partSliced = text.slice(0, 5);
// let partNeg = text.slice(-12)

// console.log(part);
// console.log(partNeg);
// console.log(partNeg);
// partNeg = text.slice(-12, -6)
// console.log(partNeg)
// console.log(partSliced);

// let part2 = text.substring(0, 5);

// console.log(part2);

// let part3 = text.substr(0, 5)

// console.log(part3);

// let text = "Hello World!";
// let text2 = text.toUpperCase();

// console.log(text2);
// let textLower = text2.toLowerCase();

// console.log(textLower);

// let text = "Hello World!";
// let result = text.isWellFormed();

// console.log(result);

// let text1 = "Hello World \uD800";

// let check = text1.isWellFormed();

// console.log(check)

// result = text1.toWellFormed();

// console.log(text1);

// console.log(result);

// let well = result.isWellFormed();

// console.log(well);

// let text = "   Hello World!     ";
// let text2 = text.trim();

// let startRemove = text.trimStart();

// console.log(text);
// console.log(text2);
// console.log(startRemove);

// JavaScript String padStart()

// let text = "5";

// let padded = text.padStart(5,"0"); //pad a string until it reach a given length

// console.log(padded);

// let padLength = text.padStart(4, "x");
// console.log(padLength);

// let numb = 5;
// let text = numb.toString();
// let padded = text.padStart(10, "$");

// console.log(padded)

// padded = text.padEnd(10, "$");

// console.log(padded);

// let text = "Hello, World!";
// let result = text.repeat(5);

// console.log(result);

// Replace String Content:

// let text = "Please visit me next week in Europe";
// let nextWeek = text.replace("next week", "next-month");

// console.log(nextWeek);

// let welcome = "Please visit Microsoft and Microsoft!";

// let newWelcome = welcome.replace(/microsoft/gi,"sajwan");

// console.log(newWelcome);

// text = "I love dogs. Dogs are very easy to love. Dogs are very popular.";

// text = text.replaceAll(/dogs/g,"cats" );
// text = text.replaceAll(/Dogs/g, "Cats");

// console.log(text);

// a string can be converted into array with the split() method

// let text = "a b c d e f";
// const myArray = text.split(",");

// console.log(myArray);

// console.log(myArray)

// let text = "a,b,c,d,e,f";

// let myArr = text.split(",");
// console.log(myArr);

// const string1 = "A string primitive";
// const string2 = "Also a string primitive";
// const string3 = `Yet another string primitive`;

// const string4 = new String(`a string created by objects`);

// console.log(`
// first string: ${string1}
// second string: ${string2}
// third string: ${string3}
    
// fourth string but object : ${string4}`);

// there are two ways to access an individual character in a string. The first is the charAt() method:

// console.log("cat".charAt(1))

// console.log("cat"[1]);

// const a = "a";
// const b = "b";

// if (a < b) {
//     console.log(`${a} is less than ${b}`);
// } else if (a > b){
//     console.log(`${a} is greater than ${b}`);
// } else {
//     console.log(`${a} and ${b} are equal.`);
// }

// const str1 = "hey";
// const str2 = "Hey";

// function areEqualCaseInsensitive(str1, str2) {
//     return str1.toUpperCase() === str2.toUpperCase();
// }

// const hello = areEqualCaseInsensitive("hey", "Hey");

// console.log(hello);

// const strPrim = "foo";
// const strPrim2 = String(1);
// const strPrim3 = String(true);
// const strObj = new String(strPrim);

// console.log(typeof strPrim);

// console.log(typeof strPrim2);
// console.log(typeof strPrim3);
// console.log(typeof strObj);

// const s1 = " 2 + 2";
// const s2 = new String("2 + 2");

// console.log(eval(s1));
// console.log(eval(s2));
// console.log(eval(s2.valueOf()));


// console.log("😁".split(""));


//String Conversion

// const nullVar = null;

// console.log(String(nullVar));

// const undefinedVar = undefined;

// console.log(String(undefinedVar));

// console.log(0 == "0");

// let a = 0;
// let b = "0";

// console.log(a == b)

// let first = Boolean(a);
// let second = Boolean(b);

// console.log(`Both ${a} and ${b} are equal ${a == b} but in boolean a is ${first} and b is ${second}`);

// console.log(0 == false);

// console.log(0 === false)

// console.log("" === false);

// console.log(null === undefined)

// console.log(null == undefined)

// console.log(null <= undefined)

// console.log(null > 0);

// console.log(null == 0);

// console.log(null >= 0);

// // An incomparable undefined

// console.log( undefined > 0);
// console.log( undefined <= 0)
// console.log( undefined == 0)

// console.log("2" > "12")

// let hours = new Date();

// console.log(hours);

// if (hours.getHours() < 18) {
//     console.log("Good day");

// } else if(hours.getHours() > 18 || hours.getHours() < 21) {
//     console.log("Good Evening");
// } else {
//     console.log("Good Night");
// }


// let time = new Date();

// if (time.getHours < 10){
//     console.log("Good Morning");
// } else if (time.getHours() < 20){
//     console.log("Good day");
// } else {
//     console.log("Good Night");
// }

// let text;

// if(Math.random() < 0.5){
//     text = "<a href='www.google.com'>Visit Chrome</a>";
// }else {
//     text = "<a href='www.odinproject.com'>Odin Project</a>";
// }

// console.log(text);

// if( 1 || 0) {
//     console.log("truthy");
// }else {
//     console.log("falsy");
// }

// let hour = 9;
// if (hour < 10 || hour > 18) {
//     console.log("The office is closed");
// }

//  hour = 12;

// let isWeekend = false;

// if (hour < 10 || hour > 18 || isWeekend) {
//     console.log("Office is closed");
// }else {
//     console.log("Come to office");
// }

// console.log(1 || 0)

// console.log(null || 1)

// console.log(null || 0 || 1);

// console.log(undefined || null || 0);

// let firstName = "";
// // let lastName = "";
// // let nickName = "SuperCoder";

// // console.log(firstName || lastName || nickName || "Anonymous");

// // console.log(true || console.log("not printed"));

// // console.log( false || console.log("printed"));

// let hour = 12;
// let minute = 30;

// if (hour == 12 && minute == 30) {
//     console.log("The time is 12:30");
// }

// console.log(1 && 0);

// console.log( 5 && 1);

// console.log(null && 5);

// console.log(0 && "No matter what");


// let x = 15;


// console.log(x > 12 && console.log("Greater than twelve"));

// console.log( ! true);

// console.log (!0);

// console.log(!!"hello");

// console.log(!!null);

// console.log(Boolean("hello"));

// console.log( Boolean(null));

// let shoppingDone = true;
// let childAllowance;


// if (shoppingDone) {
//     childAllowance = 10;

// } else {
//     childAllowance = 5;
// }

// console.log(childAllowance);

// const select = document.querySelector("select");
// const para = document.querySelector("p");
 

// function setWeather() {
//     const choice = select.value;

//     if(choice == "sunny"){
//         para.textContent = 
//         "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream."
//     } else if(choice == "rainy"){
//         para.textContent = 
//         "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
//     } else if(choice == "snowing"){
//     para.textContent =
//       "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
//   } else if (choice === "overcast") {
//     para.textContent =
//       "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
//   } else {
//     para.textContent= "";
//   }
// }

// select.addEventListener("change", setWeather);

// let cheese;

// if (cheese){
//     console.log("Yay! Cheese available for making cheese on toast.");
// }else {
//     console.log("No cheese on toast for you today");
// }


// let choice = "sunny";
// let temperature = 91;

// if ( choice === "sunny") {
//     if (temperature < 86) {
//         console.log(`It is ${temperature} degrees outside - nice and sunny. Let's go out to the beach, or the park, and get an ice cream.`);
//     } else if ( temperature >= 86) {
//         console.log(`It is ${temperature} degrees outside - REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`);
//     }
// }

// if (choice === "sunny" && temperature < 86){
//     console.log(`It is ${temperature} degrees outside - nice and sunny. Let's go out to the beach, or the park, and get an ice cream.}}`)
// }else if (choice === "sunny" && temperature >= 86){
//     console.log(`It is ${temperature} degrees outside - REALLY HOT! If you want to go outside, make sure to put some sunscreen on.`);
// }


// let iceCreamVanOutside;
// let houseStatus = "on fire";

// if(iceCreamVanOutside || houseStatus === "on fire"){
//     console.log("You should leave the house quickly.");
// }else {
//     console.log("Probably should just stay in then.");
// }

// if (!(iceCreamVanOutside || houseStatus === "on fire")){
//     console.log("Probably should just stay in then.");
// }else {
//     console.log("You should leave the house quickly");
// }


// const select = document.querySelector("#weather");
// const para = document.querySelector("p");

// function checkWeather() {
//     let choice = select.value;

//     switch (choice) {
//         case "sunny":
//             para.textContent = 
//             "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";

//             break;

//         case "rainy": 
//             para.textContent = 
//             "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";

//             break;

//         case "snowing":
//             para.textContent = 
//             "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";

//             break;

//         case "overcast":
//             para.textContent = 
//             "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";

//             break;

//         default:
//             para.textContent =
//             "";
        
//     }
// }

// select.addEventListener("change", checkWeather);

// // Ternary or conditional operator ---> 
// //  condition ? run this code : run this code instead
// let isBirthday = null;
// const greeting = isBirthday 
// ? "Happy birthday Mrs. Sajwan - we hope you have a great day!" 
// : "Good morning Prisha.";

// console.log(greeting);

// const selectTheme = document.querySelector("#theme");

// const html = document.querySelector("html");;

// document.body.style.padding = "10px";

// function update(bgColor, textColor) {
//     html.style.backgroundColor = bgColor;

//     html.style.color = textColor;
// }

// selectTheme.addEventListener("change", () => 
//     selectTheme.value === "black" ? update("black", "white") : update("white", "black"),
// )


// let age = 26;
// age = 31;
// console.log(age);

// let score = 0;
// score += 6;

// console.log(score);

// data types --> primitives - data is directly assigned to memory

// const name = "Suraj";
// const age = 26;
// const rating = 4.5;
// const isCool = true;
// const career = null;
// const wife = undefined;
// let kids;

// console.log(typeof career)
// console.log(kids);

// const s = "technology, computers, it, code";

// console.log(s.split(', '));

// Arrays: variables that hold multiple values

// const number = new Array(1, 2, 3, 4, 5);

// console.log(number)

// const fruits =["apples", "oranges", "pears"];

// fruits[3] = "grapes";

// fruits.push("mangos");
// fruits.unshift("strawberries")
// fruits.pop();

// console.log(Array.isArray('hello'));

// console.log(fruits.indexOf('oranges'));
// console.log(fruits);

// object literal

// const person = {
//     firstName: 'Suraj',
//     lastName: 'Sajwan',
//     age: 26,
//     hobbies: ['mma', 'reading', 'sports'],
//     address: {
//         street: '6 garhwal enclave',
//         city: 'Dehradun',
//         state: 'Bhaniyawala'
//     }
// }

// person.email = 'abc0-9@xyz.com';

// console.log(person)

// // destructuring
// const {firstName, age, address: {city}} = person;

// console.log()

// // Arrays of objects

// const todos = [
//     {
//         id: 1,
//         text: "take out trash",
//         isComplete: true

//     },
//     {
//         id: 2,
//         text: "meeting with boss",
//         isComplete: false

//     },
//     {
//         id: 3,
//         text: "meeting with Prisha(my wife)",
//         isComplete: true

//     }

// ];



// console.log(todos);

// console.log(todos[1].text)

// JSON data format --> we generally send or recieve data in JSON format in FSD.

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);
// console.log(todoJSON);


// Loops -For

// for ( let i = 1; i <= 10; i++){
//     console.log(`For loop number: ${i}`)
// }

// // while

// let counter = 1;

// while(counter <= 10){
//     console.log(`While loop number: ${counter}`);

//     counter++;
// }

// console.log("Hello!");

// console.log("hey");

// for (let i = 0; i <= todos.length - 1; i++){
//     console.log(todos[i].text);
// }

// for(let todo of todos){
//     console.log(todo.text);
// }


// High order array method
// forEach, map, filter

// todos.forEach(function(todo){
//     console.log(todo.text);
// })

// const todoText = todos.map(function(todo){
//     return todo.text;
// });

// console.log(todoText);


// const todoCompleted = todos.filter(function(todo){
//     return todo.isComplete === true;
// }).map(function(todo){
//     return todo.text;
// })

// console.log(todoCompleted);

// Conditional

// const x= 10;

// if(x ==10) {
//     console.log("x is 10");
// }

// function

// function addNums(num1 = 0, num2 = 0) {
//     return num1 + num2;
// }

// const result = addNums(4, 556);

// console.log(result);


// Arrow function

// const addNums = (num1, num2) =>  num1 + num2;

// const result = addNums(4, 556);

// console.log(result);

// OOP

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = dob;

//     }
// }

//ES 5
// // Constructor function
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob =new Date(dob);
//     // this.getBirthYear = function() {
//     //     return this.dob.getFullYear();
//     // }

//     // this.getFullName = function(){
//     //     return `${this.firstName} ${this.lastName}`;
//     //     }
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }


// // Inatantiate Object

// const person1 = new Person("Suraj", "Sajwan", "12-05-1998");

// const person2 = new Person("Prisha", "Sajwan", "04-07-2003");


// console.log(person2.getFullName());
// console.log(person1.getBirthYear());

// console.log(person2);


// console.log(`${person1.firstName} is husband of ${person2.firstName}`);

// console.log(person2.dob);
// console.log(person1.dob);

// const birthY = person1.getBirthYear();

// console.log(birthY);

// console.log(person1.getFullName());
// console.log(person2.getFullName());

// console.log(person1)


// Prototype


// ES6

// class

// class Person {
//     constructor(firstName, lastName, dob){
//          this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob =new Date(dob);
//     }
//     getBirthYear(){
//         return this.dob.getFullYear();
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }


// //Instantiate Object

// const person1 = new Person("Suraj", "Sajwan", "12-05-1998");

// const person2 = new Person("Prisha", "Sajwan", "04-07-2003");

// console.log(person2.getFullName());
// console.log(person1.getBirthYear());
// console.log(person2);

// function favoriteAnimal(blah) {
//     return blah + " are my favorite animal!";
// }

// console.log(favoriteAnimal('Cats'));

// // console.log(function favoriteAnimal(animal) {
// //     return animal + " are my favorite animal!";
// // });

// function sum(num1, num2){
//     return num1 + num2;
// }

// const result = sum(4, 5);

// console.log(result);

// // Buit in and user defined -every time we manipulate a string or array - or every time we generate a random number

// const myText = "I am a string";
// const newString = myText.replace("string",'man');
// console.log(newString);

// const myArr = ["I", "love", "chocolate", "frogs"];
// const madeAString = myArr.join(" ");
// console.log(madeAString);

// const backToArray = madeAString.split(" ");
// console.log(backToArray);

// const myNumber = Math.random();

// console.log(Math.floor((myNumber * 55)));

// console.log(generateRandomNumber(100));


// function generateRandomNumber(number){
//     return Math.floor(Math.random() * number);
// }

// const num = generateRandomNumber(10);

// console.log(num);

// console.log(generateRandomNumber(100));

// console.log(generateRandomNumber(30))

// function draw() {
//     ctx.clearRect(0, 0, WIDTH, HEIGHT);
//     for(let i = 0; i < 100; i++){
//         ctx.beginPath();
//         ctx.fillStyle = "rgb(255 0 0 / 50%)";
//         ctx.arc(random(WIDTH), random(HEIGHT), 0, 2 * Math.PI );
//         ctx.fill();
//     }
// }

// const btn = document.querySelector("button");

// btn.addEventListener("click", draw);
// console.log(greeting);
// const greeting = myFunction();
// console.log(greeting);

// function myFunction() {
//     return "Hello, World!";
// }

// console.log(hello("Suraj Sajwan, husband of Prisha."))

// function hello(name = "Suraj") {
//     return "Hello, "+ name;
// }

// console.log(hello("Prisha"))


// Anonymous functions and arrow functions:
// const hello = function () {
//     return "Hello";

// }

// console.log(hello())
// console.log(age)

// const age = 26;
// console.log(x)
// var x;
// console.log(x)

// console.log(y);
// let y;

// console.log(y)

// console.log(number);

// var number = 10;

// console.log(number)

// console.log(number)
// const number = 10;
// console.log(number);

// function logKey (event) {
//     console.log(`You pressed "${event.key}"`);
// }

// const textBox = document.querySelector(".textbox")

// textBox.addEventListener("keydown", logKey);

// const textBox = document.querySelector(".textbox")



// textBox.addEventListener("keydown", function(e){
//     console.log(`You pressed "${e.key}"`);
// }
// );

// Instead of using anonymous function like this there's an alternative form you can use, called an arrow function

// textBox.addEventListener("keydown", (event) =>
//     console.log(`You pressed "${event.key}"`)
// );

// const originals = [1, 2, 3];

// const doubled = originals.map(items => items * 2);

// console.log(doubled)

// const textBox = document.querySelector(".textbox");

// const output = document.querySelector("#output");

// textBox.addEventListener("keydown", (event) => {
//     output.textContent = `You pressed "${event.key}"`;
// });

// const name = "Suraj";

// function greeting(){
//     console.log(`Hello ${name}: Welcome to our company.`);
// }


// const myText = "The weather is warm";
// const newString = myText.replace("cold", "warm");
// console.log(newString)

// const numberInput = document.querySelector(".numberInput");

// const para = document.querySelector("p");

// function squared(num) {
//     return num * num;
// }

// function cubed (num){
//     return num * num * num;
// }

// function sqrt (num) {
//     return Math.sqrt(num);
// }

// function circumOfCircle(num){
//     return (2 * Math.PI * num).toFixed(2); 
// }

// function factorial(num) {
//     if (num < 0) {
//         return undefined;
//     } else if (num === 1){
//         return 1;
//     } else {
//         let x = num - 1;
//         while (x > 1) {
//             num *= x;
//             x--;
//         }
//         return num;
//     }
// }

// numberInput.addEventListener("change", () => {
//     const num = parseFloat(numberInput.value);

//     if (isNaN(num)){
//         para.textContent = `You need to enter a valid number!`;
//     }else {
//         para.textContent = `${num} squared is ${squared(num)}.`;
//         para.textContent += ` 
//         ${num} cubed is ${cubed(num)}.`;
//         para.textContent += ` 
//         \n${num} factorial is ${factorial(num)}.`;

//         para.textContent += `  square root of ${num} is : ${sqrt(num)}`;
//         para.textContent += `  circumference of circle with radius ${num} is: ${circumOfCircle(num)}`;
//     }
// });

// // Local variable

// //A variable declared inside a function is only visible inside that function
// //Outer variable - A function can access an outer variable as well

// let userName = "Suraj";

// function showMessage(){
//     // let userName = "Prisha";
//      let userName = "Prisha";
//     let message = "Hello, I'm JavaScript";
//     message = message.replace("JavaScript", userName);

 
//    message = "Hello my name is "+ userName + " I am gf and wife of Suraj. We're happiest couple in the world!";
//     // console.log(message);
    
//     return message;
// }

// console.log(userName);

// let msg = showMessage();

// console.log(msg)

// console.log(userName);

// // console.log(message);

// Parameters 
// We can pass arbitrary data to functions using parameters.
// function showMessage(from, text){
//     return `${from} : ${text}`;
// }

// let chat = showMessage('Suraj', "How are you my baby?");
// console.log(chat)
// let reply = showMessage("Prisha", "Baba I'm alright, sorry, I love you.");

// console.log(reply)
// reply = showMessage("Suraj", "Baba i understand mourning is hard no pressure, don't say sorry please I love you baby. I was worried about you that's it.")


// console.log(reply)

// reply = showMessage("Prisha", "Thanks baba, I missed you soo much! come to me!" );
// console.log(reply)




// let from = "Prisha";

// let message = showMessage(from , "Hello, my love");
// message = showMessage(from, undefined)


// console.log(message);

// console.log(from);




// function showMessage( from, text="seen") {
//     from = "*" + from + "*";

//     return from + " : " + text;
// }


// // Default values:---


// Nullish coalescing operator


// function showCount(count) {
//     return count ?? "unknown";
// }

// let result = showCount(0)
// console.log(result);

// console.log(showCount(NaN));

// console.log(showCount(null));
// console.log(showCount(undefined));
// console.log(showCount(false));

// console.log(showCount(""));

// function checkAge(age) {
//     if (age >= 18){
//         return true;
//     }else {
//         return confirm('Do you have permission from your parents?');
//     }
// }

// let age = prompt("How old are you ?", 18);

// if (checkAge(age)) {
//     console.log("Access granted");
// }else {
//     console.log('Access denied');
// }

// function showMovie(age){
//     if (!checkAge(age)){
//         return;
//     }

//     console.log("Showing you the movie");

// }

// let movie = showMovie(age);
// let age = prompt("Enter your age: ");
// let permission = (age > 18) ? true : confirm('did your parents allow?');

// console.log(permission);


// let age = +prompt("Enter your age: ");

// let allow = (age > 18 ) || confirm('did your parents allow?');

// console.log(allow);

// function min ( a, b){
//     if( a < b){
//         return a;
//     } else if ( a === b){
//         return a || b; 
//     }else return b;
// }

// let minimum = min(2, 5);

// console.log(minimum)

// console.log(min(3,-1))
// console.log(min(1, 1))

// // solution using ternary operator

// function kam( a, b){
//     return  (a < b) ? a : b;
// }



// function pow( x = 1 , n = 0) {
//     return (x ** n);
// }



// let x = +prompt("x?");
// let n = +prompt("y?");

// if (n < 0) {
//     console.log("Please eneter valid power")
// }else {
//     console.log(pow(x , n))
// }

// function expression 

// function declaration 

// console.log(sayHi());

// function sayHi() {
//     return "Hello";
// }

// let sayHi = function () {
//     return "Hello";
// }

// console.log(sayHi())

// let sayHello = sayHi;

// console.log(sayHi());
// console.log(sayHello())

// function ask(question, yes, no){
//     if (confirm(question)) yes()
//         else no();
// }

// function showOk() {
//     console.log("You agreed");
// }

// function showCancel() {
//     console.log("you canceled the execution.");
// }

// console.log(ask("Do you agree?", showOk, showCancel))

// function say(question, yes, no) {
//     if ( confirm(question)) yes()
//     else no();
// }

// say(
//     "do you agree?",
//     function() {
//         console.log("You agreed");
//     },
//     () => {
//         console.log("You canceled the execution");
//     }
// );

// let sum = (a, b) => a+ b;

// console.log(sum(4, 5))

// let age  = prompt("What is your age?", 18);

// if (age < 18) {

//     function welcome() {
//         alert("Hello!");
//     }
// }else {
//     function welcome() {
//         alert("greetings!");
//     }
// }


// // use it later 

// console.log(welcome());
// "use strict"
// let age = prompt("What is your age?", 18);

// // conditionally declare a function
// if (age < 18) {

//   function welcome() {
//     alert("Hello!");
//   }

// } else {

//   function welcome() {
//     alert("Greetings!");
//   }

// }

// // ...use it later
// welcome();

// let age = prompt("what is your age?");

// let welcome;

// if (age < 18) {
//     welcome = function() {
//         return "Hello";
//     }
// }else {
//     welcome = function () {
//         return "greeting";
//     }

// }

// console.log(welcome());

// let age = prompt("What is your age?", 18);

// // conditionally declare a function
// if (age < 18) {

//   function welcome() {
//     alert("Hello!");
//   }

// } else {

//   function welcome() {
//     alert("Greetings!");
//   }

// }

// // ...use it later
// let hi = welcome();
// console.log(hi);


// let age = prompt("What is your age?", 18);

// let welcome = (age < 18) ?

// () => "Hello" :
// () => "Greetings!";

// console.log(welcome());

// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// }

// console.log(sum(4,8));

// let ask = (question, yes, no) => {
//     if( confirm(question, yes, no)) 
//         return yes();
//     else return no();
// }

// console.log(ask(
//     "do you agree?",
//     () => {
//         return "You agreed";
//     },

//     () => {
//         return "You canceled the execution";
//     }
// ));

// JS call stack

// function add(a, b) {
//     return a + b;
// }

// function average (a, b) {
//     return add(a, b)/2;
// }

// let result = average(10, 20);

// console.log(result);

// function fn () {
//     fn();
// }
// fn(); Stack overflow

//1
// let num = +prompt("Enter the number");

// function add7(num) {
//     return num + 7;
// }

// let result = add7(num);
// console.log(result);

// 2

// let multiply = (num1, num2) => {
//     return num1 * num2;
// }

// console.log(multiply(4, 10));

// 3

// let myText = prompt("enter a strig: ");
// let capitalize = function (myText) {
//     myText = myText.toLowerCase();

//     myText = myText[0].toUpperCase();

//     return myText;
// }

// console.log(capitalize(myText));

// https://www.theodinproject.com/lessons/foundations-function-basics

// function lastLetter(str) {
//     return str.at(str.length - 1);
// }

// console.log(lastLetter("hey"));

// 3.

// function capitalize(str) {
//     let newStr = str.toLowerCase();

//     let cap = newStr.at(0).toUpperCase();

//     newStr = newStr.replace(newStr[0], cap);

//     return newStr;
// }

// console.log(capitalize("WHAT"));

// function run() {
//     var foo = "Foo";
//     let bar = "Bar";


//     console.log(foo, bar);

//     {
//         var moo = "Mooo";
//         let baz = "Bazz";
//         console.log(moo, baz);
//     }

//     console.log(moo);
//     console.log(baz)
// }

// run();



// var foo = "Foo";
// let bar = "Bar";

// console.log(window.foo);
// console.log(window.bar);
'use strict'
// var foo = "Foo1";
// var foo = "foo2";

// console.log(foo);

// let bar = "Bar1";
// let bar = "Bar2";

// let x = "outer value";

//  (function () {
//     // console.log(x);
//     let x = "inner value";
//     console.log(x);
// } ());

// // hey();

// `{
//     console.log(typeof foo);
//     console.log(typeof aVariableThatIsNotDefinedYet);

//     let foo = "Foo";
// }`

// let x = x;

// let a = f();

// const b = 2;

// function f () {
//     return b;
// }

// let answer = parseInt(prompt("Please enter a number you would like FizzBuzz upto: "));

// for (let i = 1; i <= answer; i++){
//     if( i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz");
//     }
//     else if ( i % 3 === 0){
//         console.log("Fizz");
//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     }
//     else {
//         console.log(i);
//     }
// }
// console.log(b);

// const a = 5;
// const b = 10;

// function add() {
//     return c;
// }

// function print() {
//     add();
// }

// print();

// Syntax error

// function helloWorld () {
//     console.log "Hello World";
// }

// const str1 = "Hello";
// const str2 = "World!";

// const message = str1.concat(" ", str2);

// console.log(message);

    // let randomNumber = Math.floor(Math.random() * 100) + 1;

    // console.log(randomNumber);

    //   const guesses = document.querySelector(".guesses");
    //   const lastResult = document.querySelector(".lastResult");
    //   const lowOrHi = document.querySelector(".lowOrHi");
    // //   console.log(lowOrHi);
    //   const guessSubmit = document.querySelector(".guessSubmit");
    //   const guessField = document.querySelector(".guessField");

    //   let guessCount = 1;
    //   let resetButton;

    //   function checkGuess() {
    //     const userGuess = Number(guessField.value);
    //     if (guessCount === 1) {
    //       guesses.textContent = "Previous guesses: ";
    //     }
    //     guesses.textContent += userGuess + " ";

    //     if (userGuess === randomNumber) {
    //       lastResult.textContent = "Congratulations! You got it right!";
    //       lastResult.style.backgroundColor = "green";
    //       lowOrHi.textContent = "";
    //       setGameOver();
    //     } else if (guessCount === 10) {
    //       lastResult.textContent = "!!!GAME OVER!!!";
    //       setGameOver();
    //     } else {
    //       lastResult.textContent = "Wrong!";
    //       lastResult.style.backgroundColor = "red";
    //       if (userGuess < randomNumber) {
    //         lowOrHi.textContent = "Last guess was too low!";
    //       } else if (userGuess > randomNumber) {
    //         lowOrHi.textContent = "Last guess was too high!";
    //       }
    //     }

    //     guessCount++;
    //     guessField.value = "";
    //     guessField.focus();
    //   }
    //   guessSubmit.addEventListener("click", checkGuess);

    //   function setGameOver() {
    //     guessField.disabled = true;
    //     guessSubmit.disabled = true;
    //     resetButton = document.createElement("button");
    //     resetButton.textContent = "Start new game";
    //     document.body.appendChild(resetButton);
    //     resetButton.addEventListener("click", resetGame);
    //   }

    //   function resetGame() {
    //     guessCount = 1;

    //     const resetParas = document.querySelectorAll(".resultParas p");
    //     for (const resetPara of resetParas) {
    //       resetPara.textContent = "";
    //     }
    //     resetButton.parentNode.removeChild(resetButton);

    //     guessField.disabled = false;
    //     guessSubmit.disabled = false;
    //     guessField.value = "";
    //     guessField.focus();

    //     lastResult.style.backgroundColor = "white";

    //     randomNumber = Math.floor(Math.random()) + 1;
    //   }

//     // bad code 
//     const x= function (z) {
//       const w = "Hello ";
//     return w + z;
//     }

//     console.log(x("John"));

// const generateUserGreeting = (name) => {
//   const greeting = "Hello";
//   return greeting + name;
// };

// console.log(generateUserGreeting(" Suraj"));

// setTimeout(stopTimer, 3600000);

// const ONE_HOUR = 3600000; //60 * 60 * 1000;

// setTimeout(stopTimer, ONE_HOUR);

// // let reallyReallyLongLine = something + somethingElse + anotherThing + howManyTacos + oneMoreReallyLongThing;

// let reallyReallyLongLine =
//   something +
//   someThingElse +
//   anotherThing +
//   howManyTacos +
//   oneMoreReallyLongThing;

// let anotherReallyReallyLongLine = something + someThingElse + anotherThing +
//                                   howManyTacos +oneMoreReallyLongThing;

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// Loops

// While loop 

// let number = 1 ;
// while (number <= 20) {
//   console.log(number);
//   number++;
// }

// for loop

// let number;  //here number is a loop counter

// for (number = 1; number <= 20; number++){
//   console.log(number);
// }
// let i;
// for (i = 1; i <= 5; i++){
//   console.log(i);
// }

// console.log(i);


// let i = 1;

// while (i <= 2) {
//   console.log(i);
// }

// let letter = "";

// while (letter != "X"){
//   letter = prompt("Type a letter or type X to exit");
// }

// Write a program that launches a carousel for 10 turns, showing the turn number each time.

// let i;

// for (i = 1; i <= 10; i++){
//   console.log(`Turn number ${i}: ${i}`);
// }

// const numberOfTurns = prompt("Enter number of turns");
// // let i = 1;

// // while (i <= numberOfTurns){
// //   console.log(`Turn number ${i}`);
// //   i++;
// // }

// for (let i = 1; i <= numberOfTurns; i++) {
//   console.log(`Turn no. ${i}`);
// }

// const initialNum = +prompt("Enter the initial number");
// for (let i = initialNum; i <= 10; i++){
//   if (i % 2 === 0){
//     console.log(`${i} is even`);
//   }else {
//     console.log(`${i} is odd`);
//   }
// }

// let letter = "";

// while (letter != "X"){
//     letter = prompt("Enter the letters or press 'X' to exit");
//     console.log(letter); 
// }

// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

// Prompt user for a number and store it somewhere and parseInt it

// Keep prompting user for a number until number is less than or equal to 100

// let number;

// while(!()){
//     // number = parseInt(prompt("Enter a number greater than 100 to exit press 100 or less than 100!"));
//     // console.log(number);
// }

// Now improve the program so terminating number is between 50 and 100.

// prompt user for number until and unless number is between 50 and 100

// let number;

// while ( !(number > 50 && number < 100) ) {
//     number = parseInt(prompt("Please enter numbers if you wanna exit press any number between 50 and 100"));
//     console.log(number);
// }

// for

// for (let number; number != 100; number){
//     number = parseInt(prompt("Enter any number to keep prompting to exit press anything between 50 and 100"));
// }

//Write a program that asks the user for a number, then shows the multiplication table for this number.
// multiplication table for a given number

// prompt user for a number.
// use a counter for multiplying and increment that counter 
// display the table

// There are atleat two ways to solve this problem 1. while loop 2. for loop. Besides i only knew these loops so i can only come up with these solution

// for loop

// const number = parseInt(prompt("Enter the number"));

// for ( let i = 1; i <= 10; i++ ) {
//     let total = number * i;
//     console.log(`${number} * ${i} = ${total}`);
// }

// While loop

// let total = 0;
// let i = 1;
// while (i <= 10) {
//     total = number * i;
//     console.log(`${number} * ${i} = ${total}`);
//     i++;
    
// }

// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).
// let number = 2;
// if (number >= 2 && number <= 9) {
//     number = parseInt(prompt("Please enter number b/w 2 and 9"));
// }

// for (let i = 1; i <= 10; i++) {
//     let total = number * i;
//     console.log(`${number} * ${i} = ${total}`);
// }

// Write a program that plays "neither yes, nor no" with the user. Specifically, the program asks the user to enter text until either "yes" or "no" is typed, which ends the game.

// prompt user for text until and unless they press yes or no

// let text = "";

// while ( !(text === "yes" || text === "no")){
//     text = prompt("Please enter text to exit please enter yes or no").toLowerCase();
//     console.trace(text);
// }

// program which display number between 1 and 100

// for (let i = 1; i <= 100; i++){
//     if (i % 5 === 0 && i % 3 === 0 ) {
//         console.log("FizzBuzz");
//     }else if ( i % 3 === 0){
//         console.log("Fizz");
//     }else if (i % 5 === 0){
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// The basic tool for looping through the collection is the for...of loop:

// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// for (const cat of cats){
//     console.log(cat);
// }

// JS has more specialized loops for collections, and we'll mention two of them here.
// Map()

// function toUpper(string) {
//     return string.toUpperCase();
// }

// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// const upperCats = cats.map(toUpper);

// console.log(upperCats);

// function lCat(cat) {
//     return cat.startsWith("L");
// }

//  const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

//  const filtered = cats.filter(lCat);

//  console.log(filtered);

// filter() and map() are generally used with funtion expression convert above code to function expression

// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
// const filtered = cats.filter( (cat) => cat.startsWith("L") );

// console.log(filtered);

// const toUpper = cats.map( (cat) => cat.toUpperCase() );
// console.log(toUpper);

// to calculate square we should prompt user for a number 
// Fucntion square which is run on calling

// let number = 3;

// function square(number) {
//     let result = number ** 2;
//     console.log(`Square of ${number} is ${result}`)
// }

// square(5)

// Square for 1 to 9


// const calc = document.querySelector(".calculate");
// const clear = document.querySelector(".clear");
// const result = document.querySelector("#result");
// calc.addEventListener("click", calculate);
// clear.addEventListener("click", doClear)

// function calculate() {
//     for (let i = 1; i < 10; i++){
//         let square = i ** 2;
//         let newResult =  `${i} * ${i} = ${square}`;

//         result.textContent +=  `${newResult}\n`;
//     }
//     result.textContent += "\nFinished\n\n";
// }

// function doClear () {
//     result.textContent = "";
// }

// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// for (const cat of cats){
//     console.log(cat);
// }

// const upperSize = cats.map( (cat) => {
//     return cat.toUpperCase();
// })

// console.log(upperSize);

// const filtered = cats.filter( (cat) => cat.startsWith("J"));

// console.log(filtered);


// // we can also iterate through the collection with the help of for loop

// for ( let i = 0; i < cats.length; i++) {
//     console.log(cats[i]);
// }

// const cats = ["Pete", "Biggles", "Jasmine"];

// let myFavoriteCats = "My cats are called ";

// for (const name of cats){
//     myFavoriteCats += `${name}, `;

// }

// console.log(myFavoriteCats);

// let myFavoriteCats = "My cats are called ";

// for (let i = 0; i < cats.length; i++){
//     if (i === (cats.length - 1) ){
//         myFavoriteCats += `and ${cats[i]}.`;
//     } else {
//         myFavoriteCats += `${cats[i]}, `;
//     }
// }

// console.log(myFavoriteCats);



// const para = document.querySelector("p");
// const input = document.querySelector("input")
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//     const searchName = input.value.toLowerCase();
//     input.value = "";
//     input.focus();
//     para.textContent = "";

//     for (const contact of contacts){
//         const splitContact = contact.split(":");
        
//         if (splitContact[0].toLowerCase() === searchName) {
//             para.textContent = `${splitContact[0]}'s number is : ${splitContact[1]}.`;
//             break;
//         }

//         if (para.textContent === ""){
//             para.textContent = "Contact not found.";
//         }

//     }
// });



// btn.addEventListener("click", () => {
//     const searchName = input.value.toLowerCase();
//     input.value = "";
//     input.focus();

//     for (const contact of contacts) {
//         const splitContact = contact.split(":");

//         if(splitContact[0].toLowerCase() === searchName) {
//             para.textContent = `${splitContact[0]}'s number is: ${splitContact[1]}.`;
//             break;
//         }
//         if(splitContact[0] === ""){
//             return para.textContent = `Contact not found`;
//         }
//     }
// });

// const btn = document.querySelector("button");
// const input = document.querySelector("input");
// const para = document.querySelector("p");


// btn.addEventListener ("click", () => {
//     para.textContent = "Output: ";

//     const num = input.value;
//     input.value = "";
//     input.focus();

//     for ( let i = 1; i <= num; i++){
//         let sqRoot = Math.sqrt(i);

//         if (Math.floor(sqRoot) !== sqRoot) {
//             continue;
//         }
//         para.textContent += `${i} `;
//     }
// });

// const cats = ["Pete", "Biggles", "Jasmine"];

// let myFavoriteCats = "My cats are called ";

// let counter = 0;

// while (counter < cats.length){
//     if ( counter === cats.length - 1) {
//         myFavoriteCats += `and ${cats[counter]}.`; 
//     }else {
//         myFavoriteCats += `${cats[counter]}, `;
//     }
//     counter++;
// }

// console.log(myFavoriteCats);

// const cats = ["Pete", "Biggles", "Jasmine"];

// my cats are called Pete, Biggles and Jamine.
// let myFav = "My cats are called ";
// for (const cat of cats) {
//    myFav += cat + ", ";
// }

// console.log(myFav);
// let myFav = "My cats are called ";
// for (let i = 0; i < cats.length; i++){
//     if (i === cats.length -1) {
//         myFav += `${cats[i]}.`;
//     }else {
//         myFav += `${cats[i]}, `;
//     }
// }

// console.log(myFav)

// let i = 0;
// while (i < cats.length) {
//     if (i === cats.length - 1 ) {
//         myFav += `${cats[i]}.`;
//     }else {
//         myFav += `${cats[i]}, `;
//     }
//     i++;
// }

// do {
//     if (i === cats.length -1){
//         myFav += `${cats[i]}.`;
//     }else {
//         myFav += `${cats[i]}, `;
//     }
//     i++
// } while (i < cats.length);

// console.log(myFav);

// const output = document.querySelector(".output");

   

// let i = 10;

// while ( i >= 0){
//     const para = document.createElement("p");
//     output.appendChild(para);
//     if(i === 10) {
//         console.log("Countdown 10..");
//         para.textContent = `CountDown 10`;
//     }else if (i === 0) {
//         console.log("Blast off!");
//         para.textContent = `BlastOff!`;
//     }else {
//         console.log(`${i}`);
//         para.textContent = `${i}`;
//     }
    
//     i--;
// }

// const people = [
//   "Chris",
//   "Anne",
//   "Colin",
//   "Terri",
//   "Phil",
//   "Lola",
//   "Sam",
//   "Kay",
//   "Bruce",
// ];

// const admitted = document.querySelector(".admitted");
// const refused  = document.querySelector(".refused");
// admitted.textContent = "admitted: ";
// refused.textContent = "refused: ";

// for (let i = 0; i < people.length; i++){
//     if (people[i] === "Lola" || people[i] === "Phil"){
//         refused.textContent += `${people[i]}, `.slice(0, -2);
        
//     }else {
//         admitted.textContent += `${people[i]}, `.replace(/,\s*$/, " ");
//     }
// }

// getting the coordinates

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++){
//         let input = +prompt(`value at coords (${i},${j})`, "");

//     }
// }

// alert('Done');

// outer: 
// for (let i = 0; i < 3; i++){
//     for (let j = 0; j < 3; j++){
//         let input = prompt(`Value at coords (${i},${j})`);
//         if (!input) break outer;

//         console.log(`(${i}${j})`);
//     }
// }

// alert(`Done!`);


// // How to find prime 2 to n
// let n = +prompt("Enter a number: ");

// for (let i = 2; i <= n; i++) {
//     if (i === 2) {
//         true;
//         console.log(`Yes ${i} is prime`);
//     } else {
//         if ( i % 2 === 0) {
//             break;
//         }
//     }

//     for (let j = 3; j <= n; j+=2) {10
//         if (j % i === 0) {
            
//         } else {
//             console.log(`${j} is prime`);
//         }
//     }


// }


// prime number 2 to n ...
// let n = parseInt(prompt("Please eneter a numnber: "));
// for ( let i = 2; i <= n; i++) {
//     if ( i === 2) {
//         console.log(`${i} is prime.`);
//     }else if  (i % 2 === 0) {
//         console.log(`${i} is composite`);
//     } else {
//         for ( let j = 3; j <= Math.sqrt(i); j++) {
//             if (i % j === 0) {
//                 console.log(`${i} is composite number.`)
//             }
//         }
//         console.log(`${i}`)
//     }
// }

// let n = +prompt("Please enter a number:");
// let result;
// for (let i = 2; i <= n; i++) {
//     if(isPrime(i)) {
//         console.log(`${i} is prime`);
//     }
// }


// function isPrime(prime) {
//     if (prime === 2) {
//         return true;
//     }else if (prime % 2 === 0) {
//         return false;
//     }else {
//         for (let j = 3; j <= Math.sqrt(prime); j+=2) {
//             if (prime % j === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }

// let n = 30;
// nextPrime:
// for (let i = 2; i <= n; i++) {

//     for(let j = 2; j < i; j++) {
//         if (i % j === 0) continue nextPrime;
//     }

//     console.log(i);
// }

// let theNumber = parseInt(prompt("Likh number chal: "));

// if (!Number.isNaN(theNumber)){
//     console.log(`The number is sqrt of ${theNumber * theNumber}`);
// }

// let number = 0;
// while (number <= 12) {
//     console.log(number);
//     number += 2;
// }

// we can now write a program that calculates and shows the value of 2^10 

// we need a counter variable to check how many times we have multiplied the number.
// 

// let counter = 2;
// let total = 2;

// while (counter <= 10) {
//     total *= 2;
//     counter++;
// }

// console.log(total);

// let total = 1;
// let counter = 1;
// while(counter <= 10) {
//     total *= 2;
//     counter++;
// }

// console.log(total);

// let yourName;

// do {
//     yourName = prompt("Please enter your name :");

// }while (!yourName);

// console.log(`Hello ${yourName}`);

// which finds the first number that is both greater than or equal to 20 and divisible by 7:

// for (let current = 20; ; current++) {
//     if (current % 7 === 0) {
//         console.log(current);
//         break;
//     }
// }

// let container = "";

// for( let i = 1; i <= 10; i++){
//     container += "#";
//     console.log(container);
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0 && i % 3 === 0){
//         console.log("FizzBuzz");
//     }else if (i % 5 === 0) {
//         console.log("Buzz");
//     }
//     else if (i % 3 === 0) {
//         console.log("Fizz");
//     }else {
//         console.log(i)
//     }
// }

// const square = function(x) {
//     return x * x;
// }

// console.log(square(12));

// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

// for (const cat of cats){
//     console.log(cat);
// }

// function toUpper(string) {
//     return string.toUpperCase();
// }

// const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Carcal", "Lion"];

// const upperCats = cats.map(toUpper);

// console.log(upperCats);

// console.log(cats);

// function lCat(cat) {
//     return cat.startsWith("L");
// }

// const filtered = cats.filter(lCat);

// console.log(filtered);

// Calculating squares till given number:

// proompt user for a number till where you want to fing squares

// Then loop from 1 to that given number 

// every time you loop use counter * counter and increment it by one

// const number = parseInt(prompt("Enter a number: "));

// for (let i = 1; i <= number; i++) {
//     console.log(`Square of ${i} is ${i*i}`);
// }

// const results = document.querySelector("#results");

// function calculate () {
//     for (let i = 1; i <= 10; i++){
//         const newResult = `${i} * ${i} = ${i * i}`;
//         results.textContent += `${newResult}\n`;
//     }

//     results.textContent += "\nFinished\n\n";
// }

// const calculateBtn = document.querySelector("#calculate");

// const clearBtn = document.querySelector("#clear");

// calculateBtn.addEventListener("click", calculate);
// clearBtn.addEventListener("click", () =>
// (results.textContent = ""));


// const results = document.querySelector("#results");
// const num = parseInt(prompt("Enter a number: "));
// function calculate () {
//     for (let i = 1; i <= num; i++){
//         let newResult = `${i} * ${i} = ${i * i}`;
//         results.textContent += `${newResult}\n`;
//     }
//     results.textContent += "\nFinished\n\n";
// }

// const calculated = document.querySelector("#calculate");
// const clear = document.querySelector("#clear");

// calculated.addEventListener("click", calculate);

// clear.addEventListener("click", () =>
//     results.textContent = ""
// );

// Looping through collection with a for loop

// const cats = ["Leopard","Serval", "Jaguar", "Tiger", "Carcal", "Lion"
// ];

// for (let i = 0; i < cats.length; i++){
//     console.log(cats[i]);
// }

// // looping with for...of loop 

// for (const cat of cats) {
//     console.log(cat);
// }

// const cats = ["Pete", "Biggles", "Jasmine"];

// let myFavoriteCats = "My cats are called ";

// for (const cat of cats){
//     myFavoriteCats += `${cat}, `;

// }

// console.log(myFavoriteCats);

// // We want to iterate last item little bit differentely 
// //  so it should look like following:
// // My cats are called Pete, Biggles, and Jasmine.

// let myFavCats = "My cats are called ";

// for (let i = 0; i < cats.length; i++){
//     if (i === cats.length - 1) {
//         cats[i] = `and ${cats[i]}.`
//     }else {
//         cats[i] = `${cats[i]},`;
//     }

//     myFavCats += `${cats[i]}`;
// }

// console.log(myFavCats);


// Exiting loops with break:






// const para = document.querySelector("p");
// const input = document.querySelector("input");

// const btn = document.querySelector("button");

// btn.addEventListener('click', () => {
//     const searchName = input.value.toLowerCase();
//     input.value = "";
//     input.focus();

//     para.textContent = "";

//     for(const contact of contacts) {
//         const splitContact = contact.split(":");
//         if(splitContact[0].toLowerCase() === searchName) {
//             para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
//             break;
//         }
//     }

//     if(para.textContent === ""){
//         para.textContent = "Contact can not be found.";
//     }
// });

// Say we wanted to search through an array of contacts and telephone numbers and return just the number we wanted to find?


// const contacts = [
//     "Chris:2232322",
//     "Sarah:3453456",
//     "Bill:7654322",
//     "Bulbul:9865735241",
//     "Gaur:8218224752",
//     "Ajju:9837254635",
//     "Khanduri:9537712318",
//     "Tiwari:9065432716",
//     "Ankita:897463279",
//     "Mangtho:6789046532",
//     "mumma:8064738921",
//     "co-founder:7654362512",
//     "ca:64738202983",
//     "landy:7890543623",
// ];

// const input = document.querySelector("input");
// const p = document.querySelector("p");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//     const searchName = input.value.toLowerCase();
//     input.value = "";
//     input.focus();

//     p.textContent = "";

//     for (const contact of contacts) {
//         const splitContact = contact.split(":");
//         if (splitContact[0].toLowerCase() === searchName){
//             p.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
//             break;
//         }
//     }
//     if (p.textContent === ""){
//         p.textContent = `Number not found!`;
//     }
// })

// Without peeking

// const contacts = [
//     "Chris:2232322",
//     "Sarah:3453456",
//     "Bill:7654322",
//     "Bulbul:9865735241",
//     "Gaur:8218224752",
//     "Ajju:9837254635",
//     "Khanduri:9537712318",
//     "Tiwari:9065432716",
//     "Ankita:897463279",
//     "Mangtho:6789046532",
//     "mumma:8064738921",
//     "co-founder:7654362512",
//     "ca:64738202983",
//     "landy:7890543623",
//     "cto:765846373",
//     "mentor:8975653292",
// ];

// const para = document.querySelector("p");
// const input = document.querySelector("input");
// const btn = document.querySelector("button");

// btn.addEventListener("click", ()=> {
//     const searchName = input.value.toLowerCase();
//     input.value = "";
//     input.focus();
//     para.textContent = "";

//     for (const contact of contacts) {
//         const splitContact = contact.split(":");
//         if (splitContact[0].toLowerCase() === searchName) {
//             para.textContent = `${splitContact[0]}'s contact number is ${splitContact[1]}`;
//             break;
//         }
//     }
//     if(para.textContent === ""){
//         para.textContent = `Contact not found!`;
//     }
// });

// const p = document.querySelector("p");
// const input = document.querySelector("input");
// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//     p.textContent = "Output: ";
//     const num = input.value;
//     input.value = "";

//     input.focus();

//     for (let i = 1; i <= num; i++) {
//         let sqroot = Math.sqrt(i);
//         if (Math.floor(sqroot) !== sqroot ){
//             continue;
//         }
//         p.textContent += `${i} `;
//     }


// });


// While 

const cats = ["Pete", "Biggles", "Jasmine"];

let myFavCats = "My cats are called ";

// let i = 0;

// while (i < cats.length) {
//     if (i === cats.length -1) {
//         myFavCats += `and ${cats[i]}.`;
//     }else {
//         myFavCats += `${cats[i]}, `
//     }

//     i++;
// }

// console.log(myFavCats);

// let i = 0;

// do {
//     if (i === cats.length - 1){
//         myFavCats += `and ${cats[i]}.`
//     }else {
//         myFavCats += `${cats[i]}, `
//     }
//     i++;
// }while(i < cats.length);

// console.log(myFavCats);
// let number = 100;
// while (number <= 100 && number){
//     number = parseInt(prompt("Enter a number: "));
// }


// Prime numbers :
// let n = 16;
// for (let i = 2; i <= n; i++){
//     if (i === 2) {
//         console.log(`${i} is prime`);
//     }else if (i % 2 === 0){
//         console.log(`${i} is not prime`);
//     }else {
//         // Only odds
//         for (let j = 3; j < Math.sqrt(i); j+=2){
//             if (j % i === 0){
//                 console.log(`${i} is not prime`);
//                 break;
//             }
//         }

//     }
// }

// let n = 30;

// for (let i = 2; i <= n; i++){
//     let result = isPrime(i);
//     if(result) {
//         console.log(`${i} is prime`);
//     }
// }

// function isPrime(number) {
//     if (number === 2){
//         return true;
//     }else if (number % 2 === 0){
//         return false;

//     }else {
//         for (let j = 3; j <= Math.sqrt(number); j+=2){
//             if (number % j ===0 ){
//                 return false;
//             }
//         }
//         return true;
//     }
// }

// initializer 
// while(condition){
//     // code
//     // so called loop body
// }

// let i = 1;

// while(i <= 3){
//     console.log(i);
//     i++;
// }

// let i = 5;
 
// while(i) {
//     console.log(i);
//     i--;
// }

// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while(i <= 3)

// for loop
// for (begin; condition; incrementionORfinal-expression)


// let i = 1;

// for(;i <= 3; ){
//     console.log(i++);
// }


// break
// let sum = 0;

// while (true) {
//     let value = +prompt("Enter a number:", '');

//     if (!value) break;

//     sum += value;
// }

// console.log(`Sum: ${sum}`);

// continue to the next iteration:

// for (let i = 0; i <= 10; i++){
//     // i need all the odd numbers

//     if (i % 2 === 0) continue;

//     console.log(i);
// }

// let i = 5;

// if (i >= 5){
//     console.log(i);
// }else {
//     console.log("Can't");
//     i++;
//     continue;
// }

// let number;

// do {
//     number = parseInt(prompt("Please entere a number: "));
// } while (number <= 100 && number);


// output the prime number :

// outer:for (let i = 2; i <= 30; i++){
//     for (let j = 2; j < i ; j++){
//         if(i % j === 0){
//             continue outer;
//         }
//     }
//     console.log(i);
// }

// Declaration of arrays:
// let arr = new Array();
// let arr1 = [];
// console.log(arr);
// console.log(arr1);

// const fruits = ["Apple", "Orange", "Plum"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[fruits.length -1]);

// fruits[fruits.length - 1 ] = "Pear";

// console.log(fruits);
// console.log(fruits.length);

// fruits[fruits.length] = "Lemon";

// console.log(fruits);


// // Array can store element of any type:
// // mix of values

// let mixArr = ["Apple", {name:"John"}, true, function() {console.log("Hello");}];

// console.log(mixArr[1].name);
// console.log(mixArr[3]());


// Trailing comma

// let fruits = [
//     "Apple",
//     "Orange",
//     "Plum",
// ]

// const lastElement = fruits[fruits.length - 1];

// console.log(lastElement);

// console.log(fruits.at(-1));



// Methods like pop/push/shift/unshift

// shift<-[]<-push  ---> queue
// stack is usually illustrated as pack of cards  push and pop

// In javascript arrays work both as a queue and as a stack. They allow you to add/remove elements, both to/from the beginning or the end.

// In computer science , the data structure that allows this, is called deque

// const fruits = ["Apple", "Orange", "Plum"];

// fruits[fruits.length -1] = "Pear";

// console.log(fruits);

// // pop 
// // Extracts the last element of the array and returns it:

// const popped = fruits.pop();

// console.log(fruits);
// console.log(popped);
// fruits.push(popped);

// console.log(fruits)
// console.log(fruits.pop());
// console.log(fruits);

// // push 
// // Append the element to the end of the array:

// fruits.push(popped);
// console.log(fruits);

// // shift
// // Extract the first element of the array and returns it:

// const shift = fruits.shift();

// console.log(fruits);

// console.log(shift);

// // unshift 
// // Add the element to the beginning of the array

// console.log(fruits.unshift(shift));
// console.log(fruits);

// // Methods push and unshift can add multiple elements at once:

// let fruit  = ["Apple"];
// console.log(fruit);

// fruit.push("Orange", "Peach");
// console.log(fruit);
// fruit.unshift("Pineapple", "Lemon");

// console.log(fruit);

// arr[0] ---> obj[key];

// arrays are copied by reference:

// let fruits = ["Banana"];

// let arr = fruits;

// console.log(arr);
// console.log(fruits);

// console.log(fruits === arr);

// arr.push("Pear");

// console.log(fruits);
// console.log(arr);


// let fruits = [];
// fruits[99999] = 5;
// console.log(fruits);
// fruits.age = 25;

// console.log(fruits);


//Performance:

// Methods push/pop run fast, while shift/unshift are slow.


// Loops

// let arr = ["Apple", "Orange", "Pear"];

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// // But we can also use for...of loop for arrays

// for (const item of arr){
//     console.log(item);
// }

// // for..in loop 

// for (let key in arr) {
//     console.log(arr[key]);
// }

// generally we should avoid using for...in for arrays


// new Array()

// let arr = new Array("Apple", "Pear", "etc");
// console.log(arr);
// arr = new Array(2);
// console.log(arr);

// console.log(arr[0]);
// console.log(arr.length);

// Multidimensional arrays:

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];

// console.log(matrix[0][1]);



// // toString()
// let array = [1, 2, 3];

// console.log(array);

// console.log(String(array) === '1,2,3');

// console.log(array.toString());
// console.log(array);

// console.log([] + 1);
// console.log([1] + 1);
// console.log([1, 2] + 1);

// console.log([0] == [0]);

// const fruits = ["Apple"];
// let fruit = fruits;

// console.log(fruit === fruits);

// fruit.push("Peach","Lemon");

// console.log(fruits);

// console.log(fruit === fruits)

// console.log(0 == []);

// console.log('0' == []);


// Don't compare arrays with == , to compare either use iteration methods or 


// const styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// styles[Math.floor((styles.length - 1 ) / 2)] = "Classics";
// const shift = styles.shift();
// console.log(shift);


// styles.unshift("Rap", "Reggae");


// console.log(styles);


// Sum input numbers

// prompt the user for values: 
// Append those values to an array
// exit the prompt when user enters non numeric value. NaN or string etc.
// calculate and returns the sum of array items

// let sum = 0;
// let arr = [];
// // let container =  [];
// let num = 0;

// function sumInput() {
//     while(num || num === 0){
//         num = (prompt("Enter a number or skip pressing any text"));
//         arr.push(+num);
//     }

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     return sum;

// }

// console.log(sumInput());

// let arr = ["I", "go", "home"];
// console.log(arr);
// // arrays are objects, so we can try to use delete:

// delete arr[1];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[1]);

// // so we have to use something else like arr.splice which is Swiss army knife for arrays

// arr = ["I", "Study", "JavaScript"];

// arr.splice(1,1);
// console.log(arr);

// arr = ["I", "Study", "JavaScript", "right", "now"];

// let removed = arr.splice(0, 3, "Let\'s", "dance");

// console.log(arr);
// console.log(removed);

// // splice method can also insert the element without any removals. For that we need to set deletcount to 0

// arr = ["I", "Study", "JavaScript"];

// arr.splice(3,0, "Which", "Is", "Weird");
// console.log(arr);

// arr.splice(3,3);

// console.log(arr);

// arr.splice(2,0,"Complex", "Language");

// console.log(arr);

// // Negative index are allowed:

// arr = [1, 2, 5];

// arr.splice(-1,0,3,4);

// console.log(arr);

// // SLICE slice():

// // arr.slicr([start], [end])

// arr = ['t', "e", "s", "t"];

// console.log(arr.slice(1,3)); //e ,s

// console.log(arr.slice(-2)); //["s", "t"];


// // arr.slice can also be used to copy the arr.

// // CONCAT = > arr.concat

// arr = [1, 2];
// console.log(arr.concat([3,4]));

// console.log(arr.concat([3,4], [5,6]));

// console.log(arr.concat([3,4],5,6));


// Iterate: forEach

// Array.forEach(function(item, index, array){
//     // do some
// })


// const arr = ["Bilbo", "Gandalf", "Nazgul"];

// arr.forEach(alert);

// arr.forEach(item);
// arr.forEach((item, index, array) => {
//     console.log(`${item} is at index ${index} in array ${array}`);
// })


// Searching in array

// 1. indexOf/lastIndexOf and includes
// indexOf --> return index or if not found returns -1
//  && includes returns -- > true if found

// let arr = [1, 0, false];

// console.log(arr.indexOf(0));
// console.log(arr.indexOf(false));
// console.log(arr.indexOf(null));

// console.log(arr.includes(1));
// console.log(arr.includes(null));

// find and findIndex/findLastIndexOf


// filter

// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"},
// ];

// let someUsers = users.filter(item => item.id < 3);

// console.log(users);
// console.log(someUsers);

// let user = users.find(item => item.id === 3);

// console.log(user);


// Transform an array

// map:


// let arr = ['bilbo', "gandalf", "Nazgul"];

// let lengths = arr.map(x => x.length);
// console.log(lengths);

// let arr = ["Bilbo", "Gandalf", "Nazgul"];

// const lengths = arr.map( (item) => item.length);

// console.log(lengths);


// // sort function:

// let arr = [1, 2, 15];

// console.log(arr.sort());

// console.log(arr);

// arr = [2, 15, 123, 187, 56, 33, 6];

// arr.sort();
// console.log(arr);

// function compareNumeric(a, b){
//     if (a > b) return 1;
//     if ( a == b) return 0;
//     if (a < b) return -1;

// }

// arr = [1, 2, 15, 123, 0, 34, 20, 5,56, 666];

// arr.sort(compareNumeric);

// console.log(arr);

// arr.sort(function(a,b)
// {
//     console.log(`${a} <> ${b}`);
//     return a - b;
// });

// console.log(arr);


// arr = [1, 2, 15, 3, 4, 0, 5, 3, 3, 8];

// arr.sort((a,b) => a-b);

// console.log(arr);

// let countries = ["India", "Pakistan", "Bangladesh", "Nepal", "Bhutan", "China", "Russia","Myanmar"];
// countries.sort( (a,b)=> a > b ? 1 : -1 );

// console.log(countries);

// countries = ["Österreich", "Andora", "Vietnam"];
// console.log(countries.sort((a,b) => a > b ? 1 : -1));

// console.log(countries.sort( (a, b) => a.localeCompare(b) ))


// // reversig array ---> Reverse 

// arr = [1,4, 5, 3, 2];

// arr.sort( (a,b) => a > b ? 1 : - 1);

// console.log(arr);

// arr.reverse();

// console.log(arr);

// split and join 

// let names = "Landy, Khandu, Tiwari";

// const arr = names.split(", ");

// console.log(arr);

// for (const name of arr) {
//     console.log(`Hey,  ${name} you're invited in my companies IPO `);
// }

// let str = "test";

// console.log(str.split(""));

// console.log(arr);

// const identity = arr.join(", ");
// console.log(identity);


// reduce/ reduce right

// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((sum, current) => sum + current, 0);

// console.log(result);

// const array = [];

// let results = array.reduce((sum, current ) => sum + current, 0);

// console.log(results);


// Array.isArray: 

// console.log(typeof {});
// console.log(typeof []);

// console.log(Array.isArray({}));
// console.log(Array.isArray([]));



// // Most method support "thisArg":

// // Almost all array methods that call functions - like find, filter, map with notable exception of sort, accept an optional additional parameter thisArg.

// let army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin(user) {
//         return user.age >= this.minAge && user.age < this.maxAge;
//     }
// }

// let users = [
//     {age: 16},
//     {age : 20},
//     {age: 23},
//     {age: 30},
// ];

// let soldiers = users.filter(army.canJoin, army);

// console.log(soldiers.length);
// console.log(soldiers[0].age);
// console.log(soldiers[1].age);

// Array indices: 

// const arr = ["hey", "how", "are", "you"];

// console.log(arr[2]);

// const years = [2025, 2026, 2027, 2028, 2029, 2030];

// console.log(years[2]);
// console.log(years[3]);

// console.log(years["2"]);

// console.log(years["2"] !== years["02"]);


// // Relationship between length and numerical properties:

// const fruits = [];

// fruits.push("Banana", "Apple", "Peach");

// console.log(fruits.length);

// fruits[5] = "mango";

// console.log(fruits);
// console.log(fruits[2])
// console.log(fruits[4]);
// console.log(fruits[5]);
// console.log(fruits[6]);

// console.log(Object.keys(fruits));
// console.log(fruits.length);

// fruits.length = 2;

// console.log(Object.keys(fruits));
// console.log(fruits.length);

// const colors = ["red", "yellow", "blue"];
// colors[5] = "purple";

// colors.forEach( (item, index) => {
//     console.log(`${index} : ${item}`);
// })

// colors.reverse();

// console.log(colors);


// const colors = ["red", "yellow", "blue"];
// colors[5] = "purple";

// const iterator = colors.keys();

// // console.log(Object.keys(colors));
// for (const key of iterator) {
//     console.log(`${key}: ${colors[key]}`);


// }


// const newColors = colors.toReversed();
// console.log(newColors);

// const arr = [0, 1, 2];
// console.log(arr);
// arr.length = 3;
// arr.copyWithin(0, 1, 2);//muted array

// console.log(arr);

// const arr2 = arr.slice().copyWithin(0,1,2);

// console.log(arr2);

// const arr3 = [...arr].copyWithin(0,1,2);//Does not mutate array

// console.log(arr3);


// Iterative methods in array

// method(callbackFn, thisArg)

// where callbackFn takes three arguments:

// #element

// #index

// #array

// arrow function don't have their own this binding



// function method(callbackFn, thisArg) {
//     const length = this.length;

//     for(let i = 0; i < length; i++) {
//         if (i in this) {
//             const result = callbackFn.call(thisArg, this[i], i, this);
//             // Do something with result
//         }
//     }
// }


// Generic array methods 

// const arrayLike = {
//     0: "a",
//     1: "b",
//     length: 2,

// };
// console.log(Array.prototype.join.call(arrayLike, " + ")); // a + b

// NORMALIZATION OF LENGTH PROPERTY

// const arr = [];
// console.log(arr.length)

// console.log(Array.prototype.flat.call({}));

// const a = {length : 0.7 };

// Array.prototype.push.call(a);

// console.log(a);
// console.log(a.length);


// Array like objects:

// Create an array 
// -using array literal notation

// const fruits = ["Apple", "Banana"];
// console.log(fruits.length);
// // -using Array() constructor

// const fruits2 = ["Apple", "Banana", "Mango"];
// console.log(fruits2.length);
// // -finally using String.prototype.split() -- to build the array from string.

// const fruits3 = fruits2.join(", ");

// console.log(fruits3);

// const fruits4 = fruits3.split(",");

// console.log(fruits4);

// console.log(fruits4.length);


// Create a string from an array:

// const fruits = ["Apple", "Banana"];

// const fruitString = fruits.join(", ");

// console.log(fruitString);

// Access an array item by its index:

// const fruits = ["Apple", "Banana"];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[fruits.length - 1]);

// console.log(fruits[99]);


// // Find the index of an item in an array:

// console.log(fruits.indexOf("Banana"));


// // Check if an array contains a ceratain item:

// console.log(fruits.includes("Banana"));
// console.log(fruits.includes("Cherry"));


// console.log(fruits.indexOf("Banana") !== -1)  ;
// console.log(fruits.indexOf("Cherry") !== -1);

// // Append an item to an array

// const newLength = fruits.push("Orange");

// console.log(fruits);

// console.log(newLength);

// const removedItem = fruits.pop();

// console.log(removedItem);

// console.log(fruits);
// console.log(fruits.length);

// Remove the last item from an array:

// This example uses pop() method to remove the last item from the fruits array.

// Remove multiple items from the end of an array:

// const fruits = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];

// const start = -2;

// const removedItems = fruits.splice(start, 2, "Index", "Hey");

// console.log(fruits);

// console.log(removedItems);


// Remove the first item from an array:

// This example uses the shift method to remove the first item from the fruits array:

// const fruits = ["Apple", "Banana"];

// const removedItem = fruits.shift();
// console.log(fruits);

// console.log(removedItem);


// // To remove multiple items from starting of an array 

// const fruits = ["Apple", "Strawberry", "Cherry", "Banana", "Mango"];

// const start = 0;
// const deleteCount = 4;
// const removedItems = fruits.splice(start, deleteCount);

// console.log(fruits);

// console.log(removedItems);


// const newLength = fruits.unshift("Strawberry");

// console.log(fruits);

// console.log(newLength);

// Create an arry
// - using array literals notation

// const fruits = ["Apple", "Banana"];
// console.log(fruits.lenght);

// // using Array() constructor
// const fruits2 = new Array("Apple", "Banana");

// // using string.prototype.split().


// const fruits3 = "Banana, Apple".split(", ");

// console.log(fruits3);

// // Create a string from an array:
// console.log(fruits);
// const fruitsString = fruits.join(", ");
// console.log(fruitsString);

// // Access an array item by index

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[fruits.length -1 ]);
// console.log(fruits[99]);


// // Find the index of an item in an array:

// console.log(fruits.indexOf("Banana"));

// // Check if an array contain a ceratain item :

// console.log(fruits.includes("Apple"));
// console.log(fruits.includes("Strawberry"));

// console.log(fruits.indexOf("Apple") !== -1);
// console.log(fruits.indexOf("Strawberry") !== -1);

// // Append an item to an array:

// const newLength = fruits.push("Orange");
// console.log(newLength);
// console.log(fruits);

// // remove the last item from an array:

// const itemRemoved = fruits.pop();

// console.log(fruits.length);
// console.log(fruits);
// console.log(itemRemoved);

// // Remove multiple items from the end of an array:

// // const fal = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];

// // const start = -3;

// // const spliced = fal.splice(start);

// // console.log(spliced);
// // console.log(fal);

// // Truncate an array down to just its first N items:
// const fal = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];

// const starts = 2;

// const removeItems = fal.splice(starts);

// console.log(fal);
// console.log(removeItems);

// Remove the first item from an array:

// const fruits = ["Apple", "Banana"];

// const removeItems = fruits.shift();
// console.log(fruits);

// console.log(removeItems);


// Remove multiple items from the beginning of an array:

// const fruits = ["Apple", "Strawberry", "Cherry", "Banana", "Mango"];

// const start = 0;
// const deleteCount = 3;
// const removeItem = fruits.splice(start,deleteCount);

// console.log(removeItem);
// console.log(fruits);

// // add a new first Item to an array:

// const fruits2 = ["Banana", "Mango"];

// const newLength = fruits.unshift("Strawberry");

// console.log(fruits);
// console.log(newLength);

// // Remove a single item by index:

// const fruits3 = ["Apple", "Mango", "Cherry", "Banana", "Strawberry"];
// console.log(fruits3);
// // Let's suppose I want to remove cherry
// const starts = fruits3.indexOf("Cherry");

// // const starts = index;
// const deleteCounts = 1;
// const removeItems = fruits3.splice(starts, deleteCounts);

// console.log(fruits3);
// console.log(removeItems);

// console.log(fruits3.length);

// Replace multiple items in an array:

const fruits5 = ["Apple", "Banana", "Strawberry"];

const start = -2;
const deleteCount = 2;

const removedItems = fruits5.splice(start, deleteCount, "Mango", "Cherry");

console.log(removedItems);
console.log(fruits5);


// Iterate over an array

const fruits = ["Apple", "Mango", "Cherry"];

for (const fruit of fruits) {
    console.log(fruit);
}

// Call a function on each element in an array:

fruits.forEach( (item, index, arr) => {
    console.log(item, index);
});

// Merge multiple arrays together :

const moreFruits = ["Strawberry", "Cheeku"];

const combinedFruits = fruits.concat(moreFruits);

console.log(combinedFruits);

// copy an array:


fruits.splice(0, 1, "Strawberry");
fruits.pop();
console.log(fruits);

//there are three ways to copy an array:

// create a copy using spread syntax:

const fruitsCopy = [...fruits];

console.log(fruitsCopy);

// create a copy using form method

const fruitsCopy2 = Array.from(fruits);

console.log(fruitsCopy);

// Create a copy using slice() method

const fruitsCopy3 = fruits.slice();

console.log(fruitsCopy3);

const fruitsDeepCopy = JSON.parse(JSON.stringify(fruits));

fruitsCopy2.pop();
console.log(fruits);
console.log(fruits)


// Creating a two dimensional array:

// const board = [
//     ["R", "N", "B", "Q", "K", "B", "N", "R"],
//     ["P", "P", "P", "P", "P", "P", "P", "P"],
//     [" ", " ", " ", " ", " ", "  "," ", " "],
//     [" ", " ", " ", " ", " ", "  "," ", " "],
//     [" ", " ", " ", " ", " ", "  "," ", " "],
//     [" ", " ", " ", " ", " ", "  "," ", " "],
//     ["p", "p", "p", "p", "p", "p", "p", "p"],
//     ["r", "n", "b", "q", "k", "b", "n", "r"],
// ];

// console.log(`${board.join("\n")}\n\n`);

// board[4][4] = board[6][4];
// board[6][4] = " ";
// console.log(board.join("\n"));

// // Using an array to tabulate a set of values: 
// const values = [];

// for (let x = 0; x < 10; x++) {
//     values.push([2 ** x, 2 ** x ** 2]);
// }

// console.table(values);

// Creating a two-dimensional array:

const board = [
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "k", "b", "n", "r"],
];

console.log(`${board.join("\n")}\n\n`);

// Move King's Pawn forward 2

board[4][4] = board[6][4];
board[6][4] = " ";

console.log(board.join("\n"));

// using an array to tabulate set of values:

const values = [];
for (let x = 0; x < 10; x++) {
    values.push([2 ** x, 2 * x ** 2]);
}

console.log(values);

// Creating an array using the result of a match:


// As an example of what we mean, let’s consider a sumOfTripledEvens function. It will:

/* 
    Take in an array.
    For every even number, it will triple it.
    Then it will sum all those even numbers.
*/ 

/* Pseudocode

we will first have to have a variable for sum
Then we'll iterate through an array
If the item will be even so we'll triple it
and will store tripled elememnt in a variable and if even sum them and store them in sum

Or just use map
*/ 

// const sumOfTripledEvens = ( (array) => {
//     let sum = 0;

//     for (const item of array) {
//         if (item % 2 === 0) {
//             const tripledItems = item * 3;

//             sum += tripledItems;
//         }
//     }

//     return sum;
// })

// console.log(sumOfTripledEvens([1, 2, 3, 4, 5, 6]));

// const sumOfTripledEvens = ( (array) => {
//     let sum = 0;

//     for (let i = 0; i < array.length; i++){
//         if (array[i] % 2 === 0) {
//             const tripledEvenNumber = array[i] * 3;

//             sum += tripledEvenNumber;
//         }
//     }

//     return sum;
// });

// console.log(sumOfTripledEvens([2, 3, 4,5,6,7,8]));


// The map method

// function addOne(num) {
//     return num + 1;
// }

// const arr = [1, 2, 3, 4, 5];

// const mappedArr = arr.map(addOne);

// console.log(mappedArr);

// // map returns the new array and does not change the original array.

// console.log(arr);

// const arr = [1, 2, 3, 4, 5];

// const mappedArr = arr.map( (num) => {
//     return num + 1;
// } );

// console.log(mappedArr);

// The filter method:

// get all the odd numbers 

// function oddNum(num) {
//     if (num % 2){
//         return num;
//     }
// }

// const oddNumberArr = arr.filter(oddNum);
// console.log(oddNumberArr);

// const oddNumberArr = arr.filter( (num) => num % 2);

// console.log(oddNumberArr);


// // The reduce method :

// const array = [1, 2, 3, 4, 5];
// const initialValue = 1;
// const productOfAllNums = array.reduce((total, currentItem) => {
//     return total * currentItem;
// }, initialValue);

// console.log(productOfAllNums);
// console.log(arr);

// const sumOfTripledEvens = ( (arr) => {
//     let sum = 0;

//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             const tripledEven = arr[i] * 3;

//             sum += tripledEven;
//         }
//     }

//     return sum;
// })

// console.log(sumOfTripledEvens([1, 2, 3, 4, 5, 0]));

// map
// const array = [1,2,3,4,5];

// const evenArray = array.filter((num) => {
//     if (num % 2 === 0){
//         return true;
//     }
// })

// console.log(evenArray);

// const tripledEven = evenArray.map((num) => num * 3);

// console.log(tripledEven);

// const sumOfTripledArr = tripledEven.reduce((total, current) => {
//     return total + current;
// }, 0);

// console.log(sumOfTripledArr);

// const sumOfTripledEvens = ((array) => {
//     return array.
//     filter((num) => num % 2 === 0).
//     map((num) => num * 3).
//     reduce((total, current) => total + current);
// });

// console.log(sumOfTripledEvens([1,2,3,4,5,6]));

// Excercise:

// border-left-width ---> borderLeftWidth

// find the index of -
// then using index+1 item we will capitalize that
// splice dash splice(index,1)
// return string

// function camelize(str) {
//     const arr = str.split("");

//    for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "-") {
//         arr[i+1] = arr[i+1].toUpperCase();
//         arr[i] = "";
//     }
//    }

//    return arr.join("");
// }

// console.log(camelize("-webkit-transition"));

// function camelize(str) {
//     return str =
//     str.split("-").map 
//     ((item, index) => index === 0 ? item : item[0].toUpperCase() + item.slice(1)).join("");
// }
// console.log(camelize("-webkit-transition"));

// Filter range excercise
// we have an array 
// we'll filter array in such a way that it gives us >= a and <= b

// function filterRange(arr, a, b) {
//     const filteredArr = arr.filter((item) => item >= a && item <= b )

//     return filteredArr;
// }

// console.log(filterRange([5,3,8,1],1,4));

// // Filter range "in place"

// function filterRangeInPlace (arr, a, b) {
    

//     for (let i = 0; i < arr.length; i++) {
//         if (a <= arr[i] && b >= arr[i]){
//             arr[i] = arr[i];
//         }else {
//             arr.splice(i,1);
//             i--;
//         }
//     }

//     return arr;
// }

// console.log(filterRangeInPlace([5,3,8,1,5,6,7,4,3,8,9,78],1,4));

// function sumOfTripledEvens (arr) {
//     return arr.
//     filter((item) => item % 2 === 0).map
//     ((item) => item * 3).reduce((acc, current) => acc + current,0);
// }

// console.log(sumOfTripledEvens([1, 2, 3, 4, 5, 6]));

// without map filter and reduce

// function sumOfTripledEven (arr) {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             const tripledEven = arr[i] * 3;

//             sum += tripledEven;

//         } 
//     }

//     return sum;
// }

// console.log(sumOfTripledEven([1, 2, 3, 4, 5, 6]));

// border-left-width ---> borderLeftWidth

function camelize(str) {
    const arr = str.split("-");
    const mappedArr = arr.map((item, index) => index === 0 ? item : item[0].toUpperCase() + item.slice(1));

    str = mappedArr.join("");

    return str;
}

console.log(camelize("-webkit-transition") );
console.log(camelize("list-style-image"));
console.log(camelize("background-color"));


// Filter range:

/*
    
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.
*/ 

/*
Pseudocode:
//we can not mutate the array:
// arr: const array = arr
// filter : 
// if item inside array is in the range of a and b so we'll just filter it to new array:



*/

function filterRange(arr, a, b) {
    const array = arr.filter((item) => item >= a && item <= b);

    return array;
}

console.log(filterRange([5, 3, 8, 1], 1, 4));
console.log(filterRange([1, 2, 4, 8, 47, 0], 1, 5));

/*
Filter range "in place"
importance: 4
Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.
*/ 

/*
    Pseudocode:
    //so we have to mutate the array:
    // we'll iterate through array and it will not be in range of a and b it will be removed
    // to remove we will just use splice right. so we will be able to mutate the array itself



*/ 

function filterRangeInPlace (arr, a, b) {

   const deleteCount = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
           arr.splice(i, deleteCount);
            i--;
        }
    }

    return arr;
}

console.log(filterRangeInPlace([1, 2, 3, 56, 0, 4], 1, 4));

/*
Sort in decreasing order

Pseudocode:

// we have an array we'll sort it in ascending order 
// and just reverse it.

// [1, 4, 2, 6, -10] ----> [-10, 1, 2, 4, 6] ----reverse --[6, 4, 2, 1, -10]
*/ 

function arrReverseInD(arr) {
    const array = arr.sort((a, b) => a - b);

    const arrInReverseOrder = array.toReversed();

    return arrInReverseOrder;
}

console.log(arrReverseInD([1, 4, 2, 6, 3, 34, 23, 18]));

console.log(arrReverseInD([1, 4, 2, 6, 3, -3, 34, -10, 23, 18]));


// Copy and sort array:
/*
    We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.

Pseudocode :
// we don't have to mutate the array:
// sort it 
*/ 

// function sortedArr(arr) {
//     return arr.toSorted();
// }

// console.log(sortedArr(["HTML", "JavaScript", "CSS"]));
// const arr = ["HTML", "JavaScript", "CSS"];
// console.log(sortedArr(arr));

function sortedArr (arr) {
    const mappedArr = arr.map((item) => item).toSorted();

    return `sorted array: ${mappedArr} ,\noriginal array: ${arr}`;
}
const arr = ["HTML", "JavaScript", "CSS"];
console.log(sortedArr(arr))
 





















