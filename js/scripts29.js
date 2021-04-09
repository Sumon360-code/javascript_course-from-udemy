
document.getElementById("show_option").onclick = function () {

    let getOptions = document.getElementById("options");
    let selectedIndex = getOptions.options.selectedIndex;
    let selectedValue = getOptions.options[selectedIndex];

    document.getElementById("selected_option").innerHTML = selectedValue.innerHTML;

}



document.getElementById("show_radio").onclick = function () {

    let radio = document.getElementsByName("gender");
    let radioSelected;
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            radioSelected = radio[i];
            document.getElementById("selected_radio").innerHTML = radioSelected.value;
        }

    }
}

// checkbox
document.getElementById("show_check").onclick = function () {
    document.getElementById("selected_check").innerHTML = "<ul>";
    let check = document.getElementsByName("interest");
    for (let i = 0; i < check.length; i++) {
        if (check[i].checked) {
            document.getElementById("selected_check").innerHTML += "<li>"+ check[i].value + "</li>";
        }
        document.getElementById("selected_check").innerHTML += "</ul>";
    }

}