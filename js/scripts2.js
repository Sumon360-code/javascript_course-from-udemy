/* document.getElementById("click-me").onclick = function(){
    alert("you clicked me");
};
document.getElementById("hover-me").onmouseover = function(){
    alert("you mouse on over me")
};
document.getElementById("leave-me").onmouseleave = function(){
    prompt("write your full name coz you leave your mouse from me")
}; */

function clickMe(){
    alert("you clicked me")
};

function mouseOverMe(){
    prompt("why you bring mouse over me");

};

function mouseLeave(){
    alert("don't leave your mouse");
};

document.onkeydown = function(event){
    
    if(event.Key !== 97){
        alert("you've just pressed the 'a' key ")
    }
}