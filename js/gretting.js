const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    gretting = document.querySelector(".js-grettings");


const USER_LS = "currentUser",
    SHOWING_CN = "showing",
    DIR_CHANGE = "drReverse"; // flex-direction


function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentVlaue = input.value;
    paintGretting(currentVlaue);
    saveName(currentVlaue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGretting(text){
    form.classList.remove(SHOWING_CN); 
    gretting.classList.add(SHOWING_CN);
    const date = new Date();
    const hours = date.getHours();

    if (hours < 12 && hours > 0){
        gretting.innerText = `Good Morning, ${text}!`;
    }else if (hours > 12 && hours < 18){
        gretting.innerText = `Good Afternoon, ${text}!`;
    }else
        greeting.innterText = `Good Evening, ${text}!`;
}

function loadNmae(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGretting(currentUser);
    }
}

function init(){
    loadNmae();
}

init();