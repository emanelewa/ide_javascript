// variables
const btnButton = document.getElementById("myClick"),
    selectValue = document.getElementById("allSelect");

// Action function

const HndelSelect = function (e) {
    removeItem();

};
let removeItem = function (e) {
    for (let i = 0; i < selectValue.options.length; i++ ){
        if(selectValue.options[i].selected){
            selectValue.remove(i)
        }
    }
    };

// Event
btnButton.addEventListener("click", HndelSelect);