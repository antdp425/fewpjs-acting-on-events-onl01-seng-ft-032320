// Your code here

let dodger = document.getElementById("dodger")
let leftSideEdge = dodger.style.left.replace("px","")
let left = parseInt(leftSideEdge,10)

addEventListener("keydown", function(e){
   if (e.key === "ArrowLeft"){
      moveDodgerLeft();
   } else if (e.key === "ArrowRight"){
      moveDodgerRight();
   }
})

function moveDodgerLeft() {
   if (left > 0){
      dodger.style.left = `${left - 1}px`  
   }
}

function moveDodgerRight() {
   if (left < 360){
      dodger.style.left = `${left + 1}px`  
   }
}