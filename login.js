let usernameInput = document.getElementById("loginUser")
let passwordInput = document.getElementById("loginPassword")
let button = document.getElementsByClassName("submit-btn")[0]
console.log(usernameInput);

button.addEventListener("click", function(e){
    console.log("Name:", usernameInput.value);
    e.preventDefault()
    usernameInput.value =""
    passwordInput.value =""
} )





// const form = document.querySelector("form");
// const firstName = document.querySelector("[name=fname]")?.value;
// const lastName = document.querySelector("[name=lname]")?.value;
// const button = document.getElementById("submit");
// function logFormInputs(e){
//     e.preventDefault();
//     console.log(firstName, lastName);
//     console.log("EVENT", e );
// }
// button?.addEventListener("click", logFormInputs)

// const form = document.querySelector("form");
// function logFormInputs(e){
//     e.preventDefault();
//     const firstName = document.querySelector("[name=fname]")?.value;
//     const lastName = document.querySelector("[name=lname]")?.value;
//     const ul = document.querySelector(".useAnswer");
//     const firstLi = document.createElement("li");
//     const secondLi= document.createElement("li");
    
//     if( firstName === "" || lastName === "")return alert( "Please fill in all fields");
//     ul.innerHTML = "" ; 
//     firstLi.innerText = firstName; 
//     secondLi.innerText = lastName; 
//     ul.append(firstLi,secondLi);
// }
// form.addEventListener("submit", logFormInputs)