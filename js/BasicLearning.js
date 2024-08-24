/*
constant(상수) : 값 변경 불가
let : 값 변경 가능 (첫 생성 시에만 작성)
*/

const a = 5;
const b = 2;
let myName = "nico";

console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log("hello " + myName);

myName = "nicolas";

console.log("your new name is " + myName);
/*
 null : 값은 정해졌으나 그 값이 '비어있음'인 경우 ex) 이름도 있고 건물도 있지만 내부에 뭐가 없음
 undefined : 값이 정해져있지 않은 경우 ex) 이름만 있고 건물은 없음
 */
const amIFat = true;
const nullType = null;
let something;
console.log(something, amIFat, nullType);

const toBuy = ["potato", "tomato", "pizza"];

// Get Item from Array
console.log(toBuy[2]);

//Add one more day to the array
toBuy.push("kimbab");

console.log(toBuy);

//object
const player = {
    name: "nico",
    points: 10,
    fat: true,
};

console.log(player);
console.log(player.name);
player.fat = false;
console.log(player);
player.lastName = "potato";
console.log(player);

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
function divide(a, b) {
    console.log(a / b);
}

plus(60, 8);
divide(46, 2);

const player2 = {
    name: "nico",
    sayHello: function (otherPersonName) {
        console.log("hello! " + otherPersonName + "! nice to meet you!");
    }
}

console.log(player2.name);
player2.sayHello("Lynn");
player2.sayHello("nico");
player2.name = "Nicolas";
console.log(player2);

//항상 const! 가끔 let! 네버 var!

//argument를 하나만 받기 때문에 많은 걸 보내도 제일 처음 하나만 받음
function minusFive(potato) {
    console.log(potato - 5);
}
minusFive(5, 10, 20, 23, 15, 65, 87);

//
const calculator = {
    add: function (a, b) {
        return(a + b);
    },
    minus: function (a, b) {
        return(a - b);
    },
    times: function (a, b) {
        return(a * b);
    },
    divide: function (a, b) {
        return(a / b);
    },
    power: function (a, b) {
        return(a ** b);
    }
}

const plusResult = calculator.add(2, 3);
const minusResult = calculator.minus(2, 3);
const timesResult = calculator.times(2, 3);
const divideResult = calculator.divide(2, 3);
const powerResult =  calculator.power(2, 3);

//
const age = 96;
function calculatorKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

krAge = calculatorKrAge(age);
console.log(krAge);

//
const agePrompt = parseInt(prompt("How old are you?"));
console.log();

if (isNaN(agePrompt) || agePrompt < 0) { 
    console.log("Please write a number.");
} else if (agePrompt < 18) {
    console.log("You are too young.");
} else if (agePrompt >= 18 && agePrompt <= 50) { 
    console.log("You can drink.");
} else if (agePrompt > 50 && agePrompt <= 80) {
    console.log("You should exercise.");
} else if (agePrompt === 100) {
    console.log("Wow. You are wise.");
} else if (agePrompt > 80) {
    console.log("You can do whatever you want.");
} 