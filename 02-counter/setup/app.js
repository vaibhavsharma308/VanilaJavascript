const valueSpan = document.getElementById("value");
var currentCounterValue = valueSpan.innerText;

const decreseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const increaseBtn = document.querySelector(".increase");

decreseBtn.addEventListener("click", function () {
    currentCounterValue = currentCounterValue - 1;
    valueSpan.innerText = currentCounterValue;
    valueSpan.style.color = "red";
});

resetBtn.addEventListener("click", function () {
    currentCounterValue = 0;
    valueSpan.innerText = currentCounterValue;
    valueSpan.style.color = "black";
});

increaseBtn.addEventListener("click", function () {
    currentCounterValue = currentCounterValue + 1;
    valueSpan.innerText = currentCounterValue;
    valueSpan.style.color = "blue";
});



// More Generic Code 


// btns = document.querySelectorAll(".btn");
// btns.forEach(function(btn){
//     btn.addEventListener("click",function(e){
//         const styles= e.currentTarget.classList;
//         if(styles.contains("decrease")){
//             currentCounterValue=currentCounterValue-1;
//         }
//         else if(styles.contains("increase")){
//             currentCounterValue=currentCounterValue+1;
//         }
//         else{
//             currentCounterValue=0;
//         }
//     })
// });
