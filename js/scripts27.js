
function addSolution(number){
    if(number <= 10){
        return "0" + number.toString();
    } else{
        return number.toString();
    }
}

window.setInterval(function(){
    let newDate = new Date();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    
    document.getElementById("hours").innerHTML = addSolution(hours);
    document.getElementById("minutes").innerHTML = addSolution(minutes);
    document.getElementById("seconds").innerHTML = addSolution(seconds);
    
    // let getSeconds = seconds;
    

}, 1000);