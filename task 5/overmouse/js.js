/// variables
const linkElement = document.getElementById("myLink"),
    myAllSpan = document.querySelectorAll(".mySpan");

// Action (functions)
const overMouseHandel = function(e){
    AddActive();
};

// Event
const AddActive = function (e) {
    for(let i = 0; i<myAllSpan.length; i++){
        myAllSpan[i].classList.add("active")
    }
};
linkElement.addEventListener("mouseover", overMouseHandel);