const TAB = "js-tab";
const SHIFT_L = "js-shift-l";
const SHIFT_R = "js-shift-r";

const keyList = document.querySelectorAll(".js-key");
const transitionSec = 300;

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
        const tab = document.querySelector(`.js-key[data-key="${e.keyCode}"]`);
        const shift_L = document.querySelector(`.${SHIFT_L}[data-key="${e.keyCode}"]`);;
        const shift_R = document.querySelector(`.${SHIFT_R}[data-key="${e.keyCode}"]`);;
        let keyBox;
        if(e.keyCode === 16 && e.location === 1){
            keyBox = shift_L.parentNode;
        }else if(e.keyCode === 16 && e.location === 2){
            keyBox = shift_R.parentNode;
        }else {
            keyBox = tab.parentNode;
        }
        console.log(keyBox);
        keyBox.classList.remove(TAB);
    });

    keyList.forEach(key => {
        key.addEventListener("click", function(e){
            console.log(e.target.parentNode.classList);
            e.target.parentNode.classList.add(TAB);
            setTimeout(function(){
                e.target.parentNode.classList.remove(TAB);
            },transitionSec);
        });
    });
}

init();