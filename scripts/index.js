// 전역변수
let n; // showDice 안에서 n 쓰면 { } 밖에서 사용하지 못함. 전체에서 사용하기 위함

// 주사위 번호 선택
const showDice = () => {
    // 랜덤수 생성
    n = Math.floor(Math.random() * 6 ) + 1 ; // 소수점 제거 Math.floor

    const s1 = document.querySelector("#s1");
    s1.innerHTML = `<img src="./images/${n}.png" / >`
    console.log(n);

    show("none", "block", "none", "none", "block");
}

// 주사위 번호 결과 확인
const showOk = () => {
    // radio 정보 가져오기, SelectorAll 배열 -> 배열 순회 : 반복문
    const radios = document.querySelectorAll("input[type=radio]");

    // 사용자가 선택한 숫자
    let usern ;
    for(let r of radios){ // 배열에서 1개씩 가져오기
        // 라디오 버튼 체크 되어있는것 가져오기
        if(r.checked){
            usern = r.value;
            // usern = parseInt(r.value); 숫자로 이루어진 문자열을 숫자로 변환 
            // console.log(r);
            break;
        }
    }
    console.log(n, usern); // n : 숫자, usern : 문자
    let tag ;
    // 비교연산자 === : == 와 비교
    if(n == usern) tag = "o"; // === 3개면 값 + 데이터 타입까지 확인함. == 는 값만 같은지 확인
    else tag = "x";

    // 다시 주사위 선택 버튼 누르면 그 전 숫자 이미 입력 되어있던거 리셋 (값 초기화)
    // form -> submit , reset 
    // form : 사용자로부터 값을 입력
    document.querySelector("form").reset();

    document.querySelector("#s1").innerHTML = `<img src="./images/${n}.png">`
    document.querySelector("#s3").innerHTML = `<img src="./images/${tag}.png">`
    show("block", "none", "block", "block", "none");
}

// 요소 보이기 함수
const show = (dspS1,dspS2,dspS3,dspBt1,dspBt2) => {
    const s1 = document.querySelector("#s1");
    const s2 = document.querySelector("#s2");
    const s3 = document.querySelector("#s3");
    const bt1 = document.querySelector("#bt1");
    const bt2 = document.querySelector("#bt2");

    s1.style.display = dspS1;
    s2.style.display = dspS2;
    s3.style.display = dspS3;
    bt1.style.display = dspBt1;
    bt2.style.display = dspBt2;

}

// DOM 로드가 된 후
document.addEventListener("DOMContentLoaded", () => {
    show("none", "none", "none", "block", "none");

});
