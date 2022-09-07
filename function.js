// ID, PW 둘 중에 하나라도 빈칸이면, sign in 버튼 클릭 시
// 안내 경고문이 뜨게 만들기
function login() {
    const id = document.querySelector('#user_id');
    const pw = document.querySelector('#user_pw');

    if(id.value == "" || pw.value == ""){
        alert("다시 입력하세요.");
    }else{
        location.href = 'loading.html';
    }
}

// 현재 시각 나타내는 기능
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