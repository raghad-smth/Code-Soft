let buttons = document.getElementsByClassName("calculator-btn");
let screen = document.getElementById("screen");
let firstNum = null;
let secondNum = null;
let opreation = null;
let ans = null;

let opreationBtns = document.getElementsByClassName("opreations-btn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    let aduioEffect = new Audio("click.mp3");
    aduioEffect.play();

    const buttonText = buttons[i].innerText;

    if (buttonText === "AC") {
      screen.innerText = "";
      for (let i = 0; i < opreationBtns.length; i++) {
        opreationBtns[i].style.backgroundColor = "#f9a825";
        opreationBtns[i].style.color = "white";
      }
    } else if (buttonText === "DEL") {
      screen.innerText = screen.innerText.slice(0, -1);
      for (let i = 0; i < opreationBtns.length; i++) {
        opreationBtns[i].style.backgroundColor = "#f9a825";
        opreationBtns[i].style.color = "white";
      }
    } else if (buttonText === "%") {
      screen.innerText += buttonText;
      firstNum = parseFloat(screen.innerText);
      opreation = "%";
    } else if (buttonText === "/") {
      screen.innerText += buttonText;
      firstNum = parseFloat(screen.innerText);
      opreation = "/";
    } else if (buttonText === "*") {
      screen.innerText += buttonText;
      firstNum = parseFloat(screen.innerText);
      opreation = "*";
    } else if (buttonText === "-") {
      screen.innerText += buttonText;
      firstNum = parseFloat(screen.innerText);
      opreation = "-";
    } else if (buttonText === "+") {
      screen.innerText += buttonText;
      firstNum = parseFloat(screen.innerText);
      opreation = "+";
    } else if (buttonText === "=") {
      if (opreation === "%") {
        let startIndx = screen.innerText.indexOf("%");
        secondNum = parseFloat(screen.innerText.slice(startIndx + 1));

        ans = firstNum % secondNum;
        screen.innerText = eval(ans);

        //resting
        firstNum = null;
        secondNum = null;
        opreation = null;
      } else if (opreation === "/") {
        let startIndx = screen.innerText.indexOf("/");
        secondNum = parseFloat(screen.innerText.slice(startIndx + 1));
        ans = firstNum / secondNum;
        screen.innerText = eval(ans);

        //resting
        firstNum = null;
        secondNum = null;
        opreation = null;
      } else if (opreation === "*") {
        let startIndx = screen.innerText.indexOf("*");
        secondNum = parseFloat(screen.innerText.slice(startIndx + 1));

        ans = firstNum * secondNum;
        screen.innerText = eval(ans);

        //resting
        firstNum = null;
        secondNum = null;
        opreation = null;
      } else if (opreation === "-") {
        let startIndx = screen.innerText.indexOf("-");
        secondNum = parseFloat(screen.innerText.slice(startIndx + 1));

        ans = firstNum - secondNum;
        screen.innerText = eval(ans);

        //resting
        firstNum = null;
        secondNum = null;
        opreation = null;
      } else if (opreation === "+") {
        let startIndx = screen.innerText.indexOf("+");
        secondNum = parseFloat(screen.innerText.slice(startIndx + 1));

        ans = firstNum + secondNum;
        screen.innerText = eval(ans);

        //resting
        firstNum = null;
        secondNum = null;
        opreation = null;
      }
      try {
        screen.innerText = eval(ans);
      } catch (error) {
        screen.innerText = "Error";
      }
    } else {
      screen.innerText += buttonText;
    }
  });
}

for (let i = 0; i < opreationBtns.length; i++) {
  opreationBtns[i].addEventListener("click", (e) => {
    if (opreationBtns[i].innerText != "=") {
      opreationBtns[i].style.backgroundColor = "white";
      opreationBtns[i].style.color = "#f9a825";
    } else {
      for (let i = 0; i < opreationBtns.length; i++) {
        opreationBtns[i].style.backgroundColor = "#f9a825";
        opreationBtns[i].style.color = "white";
      }
    }
  });
}
