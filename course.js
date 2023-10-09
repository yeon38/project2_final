const memberList = new Map();

let listJson = [
    {
        score: "3학점",
        place: "NMH 105",
        professor: "김성옥 교수님",
        subject: "선형대수학",
        date: "월,목 2교시",
        content: "내용을 입력해주세요."
    }, {
        score: "3학점",
        place: "OH 401",
        professor: "최희열 교수님",
        subject: "Discrete Mathemtics",
        date: "월,목 4교시",
        content: "내용을 입력해주세요."
    }, {
        score: "3학점",
        place: "NMH 105",
        professor: "지범하 교수님",
        subject: "경영학 입문",
        date: "월,목 5교시",
        content: "내용을 입력해주세요."
    }, {
        score: "3학점",
        place: "HDH 403",
        professor: "김군오 교수님",
        subject: "하이브리드 웹 설계",
        date: "월,목 6교시",
        content: "내용을 입력해주세요."
    }, {
        score: "3학점",
        place: "OH 401",
        professor: "용환기 교수님",
        subject: "컴퓨터 구조",
        date: "월,목 7교시",
        content: "내용을 입력해주세요."
    }
    // 나머지 데이터 항목들
];

const container = document.querySelector('.log'); // 데이터를 표시할 요소
// 현재 URL에서 파라미터 문자열을 가져옵니다.
const queryString = window.location.search;

// URLSearchParams 객체를 사용하여 파라미터 값을 읽습니다.
const urlParams = new URLSearchParams(queryString);

// "data" 파라미터 값을 가져옵니다.
const dataValue = urlParams.get("data");

for (let i = 0; i < 5; i++) {
    memberList.set(i, listJson[i]);
}
document
    .getElementById('data1')
    .value = memberList
    .get(Number(dataValue))
    .subject;

// const parts = memberList
//     .get(Number(dataValue))
//     .date
//     .replace(/-/g, '/');

// document
//     .getElementById('data2')
//     .value = Date(parts);
document
    .getElementById('data2')
    .value = memberList
    .get(Number(dataValue))
    .date; 
document
    .getElementById('data3')
    .value = memberList
    .get(Number(dataValue))
    .place;
document
    .getElementById('data4')
    .value = memberList
    .get(Number(dataValue))
    .professor;
document
    .getElementById('data5')
    .value = memberList
    .get(Number(dataValue))
    .score;
document
    .getElementById('data6')
    .value = memberList
    .get(Number(dataValue))
    .content;


function deleteData() {
    if (confirm('게시물을 삭제할까요?')) {
        alert("삭제되었습니다.");
        window.location.href = "../index.html"
    } else {
        alert("취소 되었습니다.");
    }
}