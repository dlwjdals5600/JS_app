
// ``` 
// querySelector id 일때는 #을 class 일때는 .을 붙여준다.
// 선택한 것의 하위의 css를 가져올 수 있다.

// const title = document.querySelector(".test h1");

// --------------

// getElementById id를 써주면 querySelector와 같은 역할을 하지만
// 하위의 것을 가져올 수 없다.

// const title2 = document.getElementById("test");


// console.log(title);
// console.log(title2);
// ```



const title = document.querySelector("div.test h1");

function handleTitleClick() {
    
    title.classList.toggle("clicked"); // 밑에 코드와 동일, 
                                       // 클레스리스트에 clicked가 있으면 삭제, 없으면 추가

    // const clickedClass = "clicked";
    // if(title.classList.contains(clickedClass)){
    //     title.classList.remove(clickedClass);
    // } else {
    //     title.classList.add(clickedClass);
    // }
}
title.addEventListener("click", handleTitleClick);