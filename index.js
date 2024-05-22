let AA = 4
let A = 3.75
let Aa = 3.50
let BB = 3.25
let B = 3.00
let Ba = 2.75
let CC = 2.50
let C = 2.25
let D = 2.00
let F = "Fail"

const FirstClass = (Aa+C+C+BB+A+B+B)/7

console.log(parseFloat(FirstClass).toFixed(2));

if (FirstClass > 2.99 ) {
  console.log("Congratulation You Achieved First Class");
  
} else if (FirstClass > 2.24 && FirstClass < 3) {
  console.log("Congratulation You Achieved Secend Class");
  
}
else if (FirstClass > 1.99 && FirstClass < 2.25) {

  console.log("Congratulation You Achieved Third Class");
} else if (FirstClass < 2.00) {
  console.log("You are Fail");
  
} 
  




