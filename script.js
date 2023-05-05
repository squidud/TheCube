document.getElementById("indevSettings").style.display = "none";
frontS = document.getElementById("frontS");
backS = document.getElementById("backS");
leftS = document.getElementById("leftS");
rightS = document.getElementById("rightS");
topS = document.getElementById("topS");
bottomS = document.getElementById("bottomS");
const cube = document.querySelector('.cube');
let mouseX = 0;
let mouseY = 0;
let rotationX = 0;
let rotationY = 0;

// Rotate the cube by default
cube.style.animation = 'rotate 6s infinite linear';

// Rotate the cube in response to mouse movement
document.addEventListener('mousemove', e => {
  mouseX = e.clientX / window.innerWidth - 0.1;
  mouseY = e.clientY / window.innerHeight - 0.1;
});

setInterval(() => {
  // Rotate the cube faster and in the opposite direction of mouse movement
  rotationY += -mouseX * 2;
  rotationX += mouseY * 2;
  
  cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}, 1000 / 60);

function showHide(){
 checkBox = document.getElementById("isComplex");
 if(checkBox.checked){
   document.getElementById("indevSettings").style.display = "block";
   document.getElementById("simpleSettings").style.display = "none";
 } else {
   document.getElementById("indevSettings").style.display = "none";
   document.getElementById("simpleSettings").style.display = "block";
 }
}

function makeCube(){
  if(document.getElementById("isComplex").checked){
    frontS.src = document.getElementById("frontPic").value;
    backS.src = document.getElementById("backPic").value;
    topS.src = document.getElementById("topPic").value;
    bottomS.src = document.getElementById("bottomPic").value;
    leftS.src = document.getElementById("leftPic").value;
    rightS.src = document.getElementById("rightPic").value;
    for (el of document.querySelectorAll("img[src]")) {
    el.style.opacity = document.getElementById("transparency").value/10
}
  } else {
    frontS.src = document.getElementById("allPic").value;
    backS.src = document.getElementById("allPic").value;
    topS.src = document.getElementById("allPic").value;
    bottomS.src = document.getElementById("allPic").value;
    leftS.src = document.getElementById("allPic").value;
    rightS.src = document.getElementById("allPic").value;
    for (el of document.querySelectorAll("img[src]")) {
    el.style.opacity = 0.5;
  }
}