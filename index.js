for (var i = 0; i<=6;i++){
document.querySelectorAll("button")[i].addEventListener("click", function(){
    var sounds = this.innerHTML;
    console.log(sounds);
    handleClick(sounds);
} );
}
var obj = {
    "D": "sounds/tom-1.mp3",
    "R": "sounds/tom-2.mp3",
    "U": "sounds/tom-3.mp3",
    "M": "sounds/tom-4.mp3",
    "M": "sounds/snare.mp3",
    "E": "sounds/crash.mp3",
    "R": "sounds/kick-bass.mp3"
}
const audio = new Audio("sounds/tom-1.mp3")
const audio1 = new Audio("sounds/kick-bass.mp3")
function handleClick(sounds){
    let audio = new Audio(obj[sounds]);
    audio.play();
}
