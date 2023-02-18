console.log(
    "Javascript Calculator Made by Satyam Rai"
  );
  let flag = 0;
  function isNumber(char) {
    return /^\d$/.test(char);
  }
  
  document.getElementById("answer").readOnly = true;
  let screen = document.getElementById("answer");
  buttons = document.querySelectorAll("button");
  let screenValue = "";
  let maxItems = 6;
  for (item of buttons) {
    item.addEventListener("click", (e) => {
      buttonText = e.target.innerText;
      if (buttonText == "X") {
        if (flag == 1) {
          flag = 0;
        }
        buttonText = "*";
        screenValue += buttonText;
        screen.value = screenValue;
      } else if (buttonText == "C") {
        if (flag == 1) {
          flag = 0;
        }
        screenValue = "";
        screen.value = screenValue;
      } else if (buttonText == "=") {
        checkForBracketMulti();

      } else if (isNumber(buttonText)) {
        if (flag == 1) {
          screenValue = buttonText;
          flag = 0;
        } else {
          screenValue += buttonText;
        }
        screen.value = screenValue;
        console.log("im an operator");
      } else {
        if (flag == 1) {
          flag = 0;
        }
        screenValue = screen.value + buttonText;
        screen.value = screenValue;
      }
    });
  }
