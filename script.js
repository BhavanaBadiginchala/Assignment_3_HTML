const box1 = document.getElementById("box1");
function onclickFunc() {
  box1.style.backgroundColor = "red";
  box1.style.color="white";
}
const box2 = document.getElementById("box2")
box2.addEventListener('click',()=>{
  box2.style.backgroundColor = "blue";
  box2.style.color="white";
})
const box3 = document.getElementById("box3")
box3.addEventListener('click',()=>{
  box3.style.backgroundColor = "green";
  box3.style.color="white";
})
const box4 = document.getElementById("box4")
box4.addEventListener('click',()=>{
  box4.style.backgroundColor = "yellow";
  box4.style.color="black";
})
function onbtnclick(){
    let txt=document.getElementById("texte").value
    document.getElementById('header').innerText='Hello, '+txt

}
