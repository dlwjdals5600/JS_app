
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const _hidden_className = "hidden";
const _username_key = "username";


function paintGreetings(username){
    greeting.innerText = `안녕하세요 ${username} 님`;
    greeting.classList.remove(_hidden_className);
}

function LoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(_hidden_className);
    const username = loginInput.value;
    localStorage.setItem(_username_key, username);
    paintGreetings(username);
}

const savedUsername = localStorage.getItem(_username_key);

if(savedUsername === null){
    loginForm.classList.remove(_hidden_className);
    loginForm.addEventListener("submit", LoginSubmit);
} else{
    //loginForm.classList.add(_hidden_className);
    paintGreetings(savedUsername);
}