
const tal1 = document.getElementById("tal1"); 
const tal2 = document.getElementById("tal2");

function plus(){
let t1 = parseInt(tal1.value);
let t2 = parseInt(tal2.value);
svar = t1+t2;
document.querySelector("#svar").value = svar;   
}
function minus(){
    let t1 = parseInt(tal1.value);
    let t2 = parseInt(tal2.value);
    svar = t1-t2;
    document.querySelector("#svar").value = svar;   
}
function delat(){
    let t1 = parseInt(tal1.value);
    let t2 = parseInt(tal2.value);
    svar = t1/t2;
    document.querySelector("#svar").value = svar;   
    }
function gånger(){
    let t1 = parseInt(tal1.value);
    let t2 = parseInt(tal2.value);
    svar = t1*t2;
    document.querySelector("#svar").value = svar;   
        }