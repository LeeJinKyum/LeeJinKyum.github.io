//ID, PW 둘 중에 하나라도 빈칸이면, sign in 버튼 클릭 시
//안내 경고문이 뜨게 만들기
const clock = document.querySelector("div#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}


getClock();
setInterval(getClock, 1000);