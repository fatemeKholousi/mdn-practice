const btnNextGuess = document.querySelector("#btnNextGuess");

const btnRestart = document.querySelector("#btnRestart");

// console.log(userNumber.value);
const containerDiv = document.querySelector("#containerOfResults");

const randomNumber = Math.floor(Math.random() * 100);

let i = 0;
let successFilled = false;

function whatIsSituation() {
  if (i === 10 || successFilled) {
    btnNextGuess.disabled = true;
  }
  const userNumber = document.querySelector("#userNumber");
  const p = document.createElement("p");

  if (Number(userNumber.value) === randomNumber) {
    const text = document.createTextNode(
      userNumber.value + ":Yes You Made it!"
    );
    p.appendChild(text);
    successFilled = true;
    btnNextGuess.disabled = true;
  } else if (Number(userNumber.value) >= randomNumber) {
    const text = document.createTextNode(userNumber.value + ":too far");
    p.appendChild(text);
  } else {
    const text = document.createTextNode(userNumber.value + ":too low");
    p.appendChild(text);
  }

  containerDiv.appendChild(p);
  i++;
}

btnNextGuess.addEventListener("click", whatIsSituation());
btnRestart.addEventListener("click", () => {
  i = 0;
});
