const keys = ["a", "s", "d", "f", "g", "h", "j", "w", "e", "t", "y", "u"]; //global.

document.addEventListener("keydown", function (event){
    if(keys.includes(event.key)){
        console.log(`The '${event.key.toUpperCase()}' key is pressed.`);
    }
    else{
        console.warn(`'${event.code}'`);
    }
})
function playMusic() {

    document.addEventListener("keydown", (e) => {
        if (keys.includes(e.key)) new Audio(`music/${e.key}.mp3`).play();
    });
}
playMusic();