const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener("click",function(){
    var newColor="#";
    for(let k=0;k<6;k++){
        var randomNumber = getRandomNumber();
        newColor+=hex[randomNumber];
    }
    document.body.style.backgroundColor = newColor;
    color.textContent =newColor;
    console.log(newColor);
})

function getRandomNumber(){
    var len = hex.length;
    var myrand = Math.random()*len;
    myrand = Math.floor(myrand);
    return myrand;
}