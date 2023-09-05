let bulb=document.querySelector("#bulb"); //select div container
let btn=document.querySelector("button");//select button element
let flag=0;
btn.addEventListener("click",()=>
{
    if(flag==0)
    {
        bulb.style.backgroundColor="yellow";
        flag=1;
    }
    else
    {
        bulb.style.backgroundColor="black"
        flag=0;
    }
})