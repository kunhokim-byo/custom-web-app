

const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");



//위에와 같은 뜻이지만 다른 방법
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");


const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
function onLoginSubmit(info){
    //브라우저의 기본적 기능인 새로고침을 막아줌.
    info.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    
    
}

function handleLinkClick(event){
    //사이트로 넘어가는 브라우저의 기본 기능을 막아줌.
    event.preventDefault();
    alert("clicked");
}



function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}



const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    //submit event가 발생할때 javascript는 onloginsubmit function을 호출 하고 있고,
    //이때 info object를 argument로 준다.
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}


