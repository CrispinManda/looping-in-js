for (let i = 6; i >= 1; i--) {
  let stars = '';
  for (let j = 0; j < i; j++) {
    stars += '*';
  }
  console.log(stars);
}





let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
 
  for (let j = n; j > i; j--) {
    string += " ";
  }
  
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}

for (let i = 1; i <= n - 1; i++) {
  
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    string += "*";
  }
  string += "\n";
}
console.log(string);









let p = 5;
let star = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    star += " ";
  }
  for (let k = 0; k < i; k++) {
    star += "*";
  }
  star += "\n";
}
for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < i; j++) {
    star += " ";
  }
  for (let k = 0; k < n - i; k++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);



//*******
//      *
//      *
//      *
//      *
//      *
//      *
//      *
let z=7;
console.log("*".repeat(z));
for(z=1;z<=7;z++){
let spaces=" ".repeat(7-1);
console.log(spaces+ "*".repeat(1));
}




//*******
//*
//*
//*
//*
//*
//*

let y=7;
console.log("*".repeat(y));
for(y=1;y<=7;y++){
let spaces=" ".repeat(7-1);
console.log("*".repeat(1)+spaces);
}




//generate six random numbers between 1 and 49
console.log("Generates six random numbers between 1 and 49");

let randomNumbers = [];

for (let i = 0; i < 6; i++) { 
    let randomNumber;
    randomNumber = Math.floor(Math.random() * 49 + 1);
    randomNumbers.push(randomNumber);
}
console.log(randomNumbers);