const clockTitle = document.querySelector(".js-clock");
const clock = document.querySelector("h2#clock");

// const dday = document.querySelector("h1#dday");
// const countDown = document.querySelector("h1#countDown");


function getCountDown() {
   const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth()+1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const secound = String(date.getSeconds()).padStart(2, "0");

//    const ddate = new Date("2023-12-25 00:00:00");
//    const ddayClock = ddate - date;
//    const days = Math.floor(ddayClock / (1000 * 60 * 60 * 24));
//    const hours = Math.floor((ddayClock % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//    const minutes = Math.floor((ddayClock % (1000 * 60 * 60)) / (1000 * 60));
//    const secounds = Math.floor((ddayClock % (1000 * 60)) / (1000));

        clock.innerHTML = `
        <div style="text-align: center;">
            ${year}-${month}-${day}<br>
            ${hour}:${minute}:${secound}
        </div>
        `;


    // clock.innerText = `${year}년 ${month}월 ${day}일 \n${hour}:${minute}:${secound}`;
    // dday.innerText = "행복한 크리스마스 : 2023년 12월 25일"
    // countDown.innerText = `남은 시간 : ${days}일 ${hours}시간 ${minutes}분 ${secounds}초`
}

getCountDown();
setInterval(getCountDown, 1000);