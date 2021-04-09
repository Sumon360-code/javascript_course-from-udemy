function result(celsius){
    let fahrenheit = (9 * celsius/5) + 32;
    return fahrenheit;
}

document.getElementById("convert").onclick = function(){
    let getValue = parseFloat(document.getElementById("temp_celsius").value);
    if(getValue == ""){
        alert("this value cannot be empty")
    } else{
        document.getElementById("temp_fahr").innerHTML = result(getValue);
    }

}


// #2
document.getElementById("anos_copa").innerHTML = "";
let currentYear = 2022;
while(currentYear <= 2050){
    document.getElementById("anos_copa").innerHTML += "<li>" + currentYear + "</li>";
    currentYear += 4;
}

// #4
document.getElementById("calculate").onclick = function () {
    var grade1 = parseFloat(document.getElementById("grade1").value);
    var grade2 = parseFloat(document.getElementById("grade2").value);
    var absences = parseFloat(document.getElementById("absences").value);
    var total = 20;
    if (grade1 == "" || grade2 == "" || absences == "") {
        alert("this field cannot be empty");
    } else {
        var average = (grade1 + grade2) / 2;
        var presence = (total - absences) / total;
        var result;
        if (average < 6.5 && presence < 0.7) {
            result = "the student has failed because of insufficient grade";
        } else if (average < 6.5) {
            result = "the student has failed because of less grade";
        } else if (presence < 0.7) {
            result = "the student has failed because of too many absences";
        } else {
            result = " the student has been approved"
        }
    }
    document.getElementById("result").innerHTML = result;
}



// #5

var sales = [
    {
        'student': 'Jason Gomes',
        'date': '10/06/2018',
        'amount': 34.99,
        'refundRequested': null
    },
    {
        'student': 'Carlos Blue',
        'date': '10/06/2018',
        'amount': 29.99,
        'refundRequested': null
    },
    {
        'student': 'Martin Heyes',
        'date': '11/06/2018',
        'amount': 39.99,
        'refundRequested': '13/06/2018'
    },
    {
        'student': 'Isabella Hopkins',
        'date': '11/06/2018',
        'amount': 29.99,
        'refundRequested': null
    },
    {
        'student': 'Andrew Walt',
        'date': '12/06/2018',
        'amount': 34.99,
        'refundRequested': null
    }
];
document.getElementById("course_sales").innerHTML = "";
let total = 0;
for(i = 0; i< sales.length; i++){
    let sale = sales[i];
    
        if(!sale.refundRequested){
            let line = "<tr>";
            line += "<td>" + sale.student + "</td>";
            line += "<td>" + sale.date + "</td>";
            line += "<td>" + sale.amount.toString() + "</td>";
            line += "</tr>";
            document.getElementById("course_sales").innerHTML += line;
            total += sale.amount; 
   
        }
        document.getElementById("total_sold").innerHTML = total;
}