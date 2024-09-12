// coding: ut8-8


function update_screen(new_value){
    let screen = document.querySelector('.calculator-container .screen');
    screen.textContent = new_value;
}

function get_screen(){
    let screen = document.querySelector('.calculator-container .screen');
    return screen.textContent;
}


function handle_equal(event){
    screen = get_screen()
    let result = eval(screen); // A ne pas utilser sauf pour cet exemple. priviligiez dautres fonctions
    update_screen(result);
}


function handle_touch(event){
    target = event.target;
    touch_label = target.textContent
    new_screen = get_screen() + touch_label;
    update_screen(new_screen);
}

function handle_clear(event){
    update_screen('');
}

function handle_backspace(event){
    screen = get_screen();
    let new_screen = screen.slice(0, -1, 1); //https://www.geeksforgeeks.org/python-list-slicing/
    update_screen(new_screen);
}

function main(){
    // add listener to digit touch
   let touchs = document.querySelectorAll('.calculator-container .digit, .operator');
   for (let touch of touchs){
    touch.addEventListener('click', handle_touch);
   }

   //add listener to equal touch
   let equal = document.querySelector('.calculator-container .equal');
   equal.addEventListener('click', handle_equal);

   //handle clear touch
   let clear = document.querySelector('.calculator-container .clear');
   clear.addEventListener('click', handle_clear);

   //handle backspace
   let backspace = document.querySelector('.calculator-container .backspace');
   backspace.addEventListener('click', handle_backspace);

}


document.addEventListener('DOMContentLoaded', main);