const btnNextGuess = document.querySelector("#btnNextGuess");
const btnRestart = document.querySelector("#btnRestart");
const containerDiv = document.querySelector("#containerOfResults");
let randomNumber = Math.floor(Math.random() * 100);
const innerContainerDiv = document.createElement("div");
containerDiv.appendChild(innerContainerDiv);
console.log("random==" + randomNumber);

let i = 0;
let successFilled = false;

function whatIsSituation() {
  if (i === 0 && successFilled) {
    successFilled = false;
    console.log("random==" + randomNumber);
  }

  if (i === 9) {
    btnNextGuess.disabled = true;
  }

  containerDiv.appendChild(innerContainerDiv);
  const userNumber = document.querySelector("#userNumber");
  let divInDiv = document.createElement("div");

  if (Number(userNumber.value) === randomNumber) {
    const textNode = document.createTextNode(
      userNumber.value + ":Yes You Made it!"
    );
    divInDiv.style.backgroundColor = "green";
    divInDiv.style.color = "white";
    divInDiv.appendChild(textNode);
    successFilled = true;
    btnNextGuess.disabled = true;

    console.log(userNumber.value + ":Yes You Made it!");
  } else if (Number(userNumber.value) >= randomNumber) {
    divInDiv.style.backgroundColor = "red";
    divInDiv.style.color = "white";
    const textNode = document.createTextNode(userNumber.value + ":too far");
    divInDiv.appendChild(textNode);

    console.log(userNumber.value + ":too far");
  } else {
    divInDiv.style.backgroundColor = "red";
    divInDiv.style.color = "white";
    const textNode = document.createTextNode(userNumber.value + ":too low");
    divInDiv.appendChild(textNode);

    console.log(userNumber.value + ":too low");
  }

  i++;
  innerContainerDiv.appendChild(divInDiv);
}

btnNextGuess.addEventListener("click", () => whatIsSituation());

userNumber.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    console.log(e);
    whatIsSituation();
  }
});
btnRestart.addEventListener("click", () => {
  document.querySelector("#userNumber").value = "";
  btnNextGuess.disabled = false;
  userNumber.focus();

  i = 0;
  innerContainerDiv.remove();
  innerContainerDiv.innerHTML = "";
  randomNumber = Math.floor(Math.random() * 100);
});
