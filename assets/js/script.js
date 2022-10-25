/**
 * Introduce username input event listener.
 * Add validation to username input 
 */

let usernameForm = document.getElementById("username-form");
let usernameButton = document.getElementById("username-submit");

usernameButton.addEventListener("click", (e) => {
    e.preventDefault();
    let username = usernameForm.username.value;

    if (username.length < 3) {
        alert("Username must be atleast 3 charactrs long, Please Try Again!");
    } else {
        alert("Your name is saved!!");
    }
})