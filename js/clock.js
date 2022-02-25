const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");
    dateTitle = clockContainer.querySelector("h3");

function getTime(){
    const date = new Date();
    var hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();    
    var amPm = 'AM';
    const currentDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-"
        + date.getDate();

    if(hours >= 12){
        amPm = 'PM';
        hours = hours - 12;
    }

    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
            seconds < 10 ? `0${seconds}` : seconds} ${amPm}`;
    dateTitle.innerText = currentDate;
}
function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();
