const quotes = [
    {
        quote: "산다는것 그것은 치열한 전투이다.",
        author: "로망로랑",
    },
    {
        quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.",
        author: "파울로 코엘료",
    },
    {
        quote: "한번의 실패와 영원한 실패를 혼동하지 마라.",
        author: "F.스콧 핏제랄드",
    },
    {
        quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안된다.",
        author: "단테",
    },
    {
        quote: "한번 포기하면 습관이 된다. 절대 포기하지 말아라.",
        author: "마이클 조던",
    },
    {
        quote: "\"지금이 최악\" 이라고 말 할 힘이 있다면 아직은 최악이 아니다.",
        author: "윌리엄 셰익스피어",
    },
    {
        quote: "오늘을 붙들어라. 되도록 이면 내일에 의지하지 말라. 그날 그날이 일 년 중에서 최선의 날이다.",
        author: "에머슨",
    },
    {
        quote: "시간과 정성을 들이지 않고 얻을 수 있는 결실은 없다.",
        author: "그라시안",
    },
    {
        quote: "순간으르 미루면 인생마저 미루게 된다.",
        author: "마틴 베레가드",
    },
    {
        quote: "절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.",
        author: "론 허바드"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote spen:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
