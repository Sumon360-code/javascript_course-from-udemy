function sum_args(num1,num2){
    let sum = num1 + num2;
    return sum;
}
let result = sum_args(-27,55);
document.getElementById("sum_result").innerHTML = result;


var names = {
    n1 : "ahmed", 
    n2 : "sumon", 
     fullName : function(){
         return this.n1 + ' ' + this.n2
    }
    }
    console.log(names.fullName())