const TAB = "js-tab";
const SHIFT_L = "js-shift-l";
const SHIFT_R = "js-shift-r";

// function handleTab(element) {
//     element.addEventListener("keyup", function(e){
//         element.classList.remove(TAB);
//     });
// }
let box;

function handleKeyEvent(e) {
    const tab = document.querySelector(`.js-key[data-key="${e.keyCode}"]`);
    const shift_L = document.querySelector(`.${SHIFT_L}[data-key="${e.keyCode}"]`);;
    const shift_R = document.querySelector(`.${SHIFT_R}[data-key="${e.keyCode}"]`);;


    if(e.keyCode === 16 && e.location === 1){
        box = shift_L.parentNode;
    }else if(e.keyCode === 16 && e.location === 2){
        box = shift_R.parentNode;
    }else {
        box = tab.parentNode;
    }

    e.preventDefault();
    box.classList.add(TAB);
    // handleTab(box);
}

function init(){
    window.addEventListener("keydown", handleKeyEvent); 
    window.addEventListener("keyup", function(e){
        box.classList.remove(TAB);
    });
}

init();