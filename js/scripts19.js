    let students = ['Peter', 'Mary', 'Joseph', 'John', 'Charles'];
    for (let i = 0; i < students.length; i++){
        console.log(students[i])
    }

    var car = {
        'Year': 2018,
        'Model': 'Evoke',
        'Manufacturer': 'Land Rover',
        'FuelType': 'Diesel'

    }

    for(let prop in car){
        console.log(prop + ':' + ' ' + car[prop])
    }
    /* 
    for (var prop in car) {
        console.log( prop + ': ' + car[prop] );
    } */

    let elements = document.getElementsByClassName("example");
    for(let i =0; i < elements.length; i++){
        elements[i].style.color = "red";
    }