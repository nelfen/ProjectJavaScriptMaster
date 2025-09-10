const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display p")

//buttons = 19개의 버튼을 포함하고있는 배열(이름은 내가 원하는걸로 설정 가능)
//button = 배열 안에 있는 값(이름은 내가 원하는걸로 설정 가능)
buttons.forEach(button => {
  button.addEventListener("click", () => {
    //buttonValue = 계산기 버튼을 눌렀을때의 그 값
    const buttonValue = button.textContent;
    //currentDisplayValue = p태그 안에 들어있는 값
    const currentDisplayValue = display.textContent;

    switch (buttonValue) {
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
        if (currentDisplayValue === '0') {
          display.textContent = buttonValue;
        }
    }


  });
});







function add1() {

}

const add2 = function() {

}

const add3 = () => {

}
