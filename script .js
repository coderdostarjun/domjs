// 4 pillar of DOM
// 1. selection of an Element
let check=document.querySelector("h1");
console.log(check);

// 2. changing HTML
let change=document.querySelector(".pg");
// console.log(change);
change.innerHTML="changed html";
// 3. changing CSS
check.style.color="blue";
check.style.backgroundColor="yellow";
// 4.Event listner
var butt=document.querySelector(".btn");
butt.addEventListener("click",function()
{
 butt.innerHTML="new button";
 butt.style.color="red";
 butt.style.backgroundColor="yellow";
})