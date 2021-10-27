// section1
let a,b;
function change1(e){
    a=e.target.value;
}

function change2(e){
    b=e.target.value;
}

 function addition () {
    document.querySelector("#add").innerHTML= parseInt (a)+ parseInt (b);
}

function substraction () {
    document.querySelector("#sub").innerHTML= parseInt (a)- parseInt (b);
} 

function multiplication () { 
  document.querySelector("#mult").innerHTML= parseInt (a)* parseInt (b);
 } 
 
 function division () { 
document.querySelector("#div").innerHTML= parseInt (a)/ parseInt (b);
 }

// //  section 2
let x,y;
function firstchange(e){
    x=e.target.value;
}

function secondchange(e){
    y=e.target.value;
}

document.getElementById("addition").addEventListener('click',function firstchange(e){
    document.querySelector(".add").innerHTML= parseInt (x)+parseInt (y);

})

document.getElementById("substraction").addEventListener('click',function firstchange(e){
    document.querySelector(".sub").innerHTML= parseInt (x)-parseInt (y);

})

document.getElementById("multiplication").addEventListener('click',function firstchange(e){
    document.querySelector(".mult").innerHTML= parseInt (x)*parseInt (y);

})

document.getElementById("division").addEventListener('click',function firstchange(e){
    document.querySelector(".div").innerHTML= parseInt (x)/parseInt (y);

})