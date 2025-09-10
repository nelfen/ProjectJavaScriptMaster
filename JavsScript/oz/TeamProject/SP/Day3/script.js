//버튼배열에는 button 클래스가 들어간 버튼 19개가 들어가있다
const 버튼배열 = document.querySelectorAll(".button");
//p태그는 0으로 기본 설정 되어있는 상태이다
const p태그 = document.querySelector(".display p")

버튼배열.forEach(버튼배열요소 => {
  버튼배열요소.addEventListener("click", () => {
    const 버튼값 = 버튼배열요소.textContent;
    const p태그값 = p태그.textContent;

    switch (버튼값) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if (p태그값 === '0') {
          p태그.textContent = 버튼값;
        } else {
          p태그.textContent += 버튼값;
        }
    }
  });
});