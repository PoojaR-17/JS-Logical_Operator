function Logic(num){
    if(num*3 == 12 || num%3 == 0) return "Hello";
    else return num;
}
console.log( Logic(7));
console.log( Logic(8));
console.log( Logic(9));
console.log( Logic(12));


let a =1;
let b = -1;
let c= 0 ;
console.log(a ||b && c)

let x = 0;
let y= "";
let z = NaN;
console.log(x||y||z);
console.log(x && y && z);

const t = 9;
if(!t){
    console.log("it is not 9"); 
}
else {
    console.log("its a 9")
}


const e = 7 ;
const w = 8;
const s = (e == w);
if(!s){
    console.log("Both are not equal");
}else{
    console.log("Both are equal");
}

const age = 20;
const hasID = true;

if (age >= 18 && hasID) {
    console.log("Allowed to enter.");  // Both conditions are true, so this will execute.
} else {
    console.log("Not allowed to enter.");
}


const isWeekend = true;
const isHoliday = false;

if (isWeekend || isHoliday) {
    console.log("You can relax!");  // Since one condition (isWeekend) is true, this will execute.
} else {
    console.log("Time to work.");
}

const isRaining = true;

if (!isRaining) {
    console.log("You can go outside without an umbrella.");  // This won't execute because isRaining is true.
} else {
    console.log("Better take an umbrella.");
}

const isLoggedIn = true;
const hasPremiumAccount = false;
const isAdmin = true;

if (isLoggedIn && (hasPremiumAccount || isAdmin)) {
    console.log("Access granted to premium features.");
} else {
    console.log("Access denied.");
}
