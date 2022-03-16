"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginbtn = document.querySelector("button");


loginbtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        psword: psword.value,
    };
    // console.log(req);
    // console.log(JSON.stringify(req));
    fetch("/login", {
        method: "POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(req),
    }).then((res)=> console.log(res.json()))
    .then((res)=>console.log(res)); 
}
console.log(id);
console.log("hello");