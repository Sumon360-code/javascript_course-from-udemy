var firstName = "Ahmed";
var lastName = "Sumon";
var birthYear = 1995;
var currentYear = 2021;
var age = currentYear - birthYear;
var mainString =  "Hi, my name is"+ ' ' + firstName + ' ' + lastName + ", I'm " + ' ' + age.toString() + ' ' +  "years old and I'm learning Javascript";
console.log(mainString)

document.getElementById("student_message").innerHTML = mainString;

// show decimal numbers

let number1 = 107;
let number2 = 7;
let total = parseFloat(number1 / number2);
let result = total.toFixed(2);

document.getElementById("result").innerHTML = result;

//valid 9 digit phone number
var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;
if(phone1.length == 9){
    console.log('this is a valid number');
} else{
    console.log("this number is invalid")
}

if(phone2.length == 9){
    console.log("valid")
}
else{
    console.log("invalid")
}
if(phone3.length == 9){
    console.log("valid")
} else{
    console.log("invalid")
}


var quantity = "25";
var number = 6;
var pressure;
var temperature = null;

console.log(quantity += quantity); 
console.log( (7+5) / number + 2 ); 
console.log(pressure); 
console.log(temperature); 
console.log(typeof pressure); 
console.log(typeof temperature);


// number 8

let url = "https://" + document.getElementById('url_1').innerHTML;
document.getElementById('url_2').innerHTML = url;


let url3 = document.getElementById('url_3').innerHTML;
url3 = url3.replace("https://", "");
document.getElementById('url_4').innerHTML = url3;

