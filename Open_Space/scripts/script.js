const checkboxes = document.querySelectorAll('.chk');
const input_field = document.querySelector('#password_field');
const okay_btn = document.querySelector('#ok_btn');
const range = document.querySelectorAll('.vertical');
const launch_btn = document.querySelector('#launch');
const rocket = document.querySelector('#rocket');


const password = 'ChillyLemon';


document.querySelector('.control-panel__inner').onchange = function toLaunch() {
    let counter = 0;
    let cnt = 0;
    for (let i = 0; i < range.length; i++) {
        if (range[i].value == 75) {
            counter += 1;
        }
    }
    for(let j = 0; j<checkboxes.length; j++){
        if (checkboxes[j].checked == true) {
            cnt += 1;
        }
    }

    if (counter == range.length && cnt == checkboxes.length) {
        enabled_launch();
    }

}


okay_btn.addEventListener('click', function(){
    if(input_field.value === password){
        enabled();

    }
    else{
        disabled();
    }
    input_field.setAttribute("disabled", "");
    okay_btn.setAttribute("disabled", "");
});

if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {//this if statement for acknowledge that if user reload the page
    disabled();
}



function enabled_launch(){
    launch_btn.disabled = false;
}

function enabled(){
    for(let i = 0; i<checkboxes.length;i++){
        checkboxes[i].disabled = false;
    }
    for(let j = 0; j<range.length;j++){
        range[j].disabled = false;
    }


}
function disabled(){//this function will be invoked when the page is reloaded, it's useful i think for reset the password and conditions of levers and checkboxes
    for(let i = 0; i<checkboxes.length;i++){
        checkboxes[i].disabled = true;
        checkboxes[i].setAttribute("aria-checked", "false")
    }
    for(let j = 0; j<range.length;j++){
        range[j].disabled = true;
        range[j].value = range.max / 2;
    }
    launch_btn.disabled = true;

}
launch_btn.addEventListener('click',function rocket_move(){
    rocket.animate([

        { // current position of your rocket
            top: '24%',
            left: '9%'
        },

        { //  final position of your rocket
            top: '-65%',
            left: '50%'
        }
    ], {
        // timing options
        duration: 2000,
        iterations: 1,
    })
})
