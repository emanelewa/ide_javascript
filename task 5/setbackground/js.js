// variables
const btnButton = document.getElementById("myButton"),
    pAll =document.querySelectorAll(".myP");

// Action (functions)
const pHandel = function (e) {
    addBackground();
};
const addBackground = function(e){
    for (let i = 0; i < pAll.length; i++){
        pAll[i].classList.add("bg_white") ;
    }
};

// Event
btnButton.addEventListener("click", pHandel);
