var h5=document.querySelector("h5")

var add=document.querySelector("#add")
var remove=document.querySelector("#remove")
var flag=0;

add.addEventListener("click",()=>{
    if(flag==0){

   
    h5.innerHTML="Friends"
    h5.style.color="green"
    add.innerHTML="REMOVE"
    flag=1
}else{
    h5.innerHTML="Stranger"
    h5.style.color="red"
    add.innerHTML="ADD FRIEND"
    flag=0
}

})
// remove.addEventListener("click",()=>{
//     h5.innerHTML="Stranger"
//     h5.style.color="red"
// })