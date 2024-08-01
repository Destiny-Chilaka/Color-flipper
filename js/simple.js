const colors = ["black", "green", "orange", "red", "blue", "white", "indigo", "purple", "violet"];
 var color = document.querySelector(".color");
const btn = document.getElementById("btn");

 btn.addEventListener("click", function(){
    const randomColor = Math.floor(Math.random()*colors.length);
    const body = document.body
    body.style.background = colors[randomColor];
    color.textContent = colors[randomColor];
 });
 