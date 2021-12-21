const btn = document.querySelector("#btn");
// console.log(userNumber.value);
const containerDiv = document.querySelector("#containerOfResults");

const randomNumber = Math.floor(Math.random() * 100);
// console.log(randomNumber);
let i = 0;
let successFilled = false;
function whatIsSituation() {
  if (i === 10 || successFilled) {
    btn.disabled = true;
  }
  const userNumber = document.querySelector("#userNumber");
  const p = document.createElement("p");

  if (Number(userNumber.value) === randomNumber) {
    const text = document.createTextNode("Yes You Made it!");
    p.appendChild(text);
    successFilled = true;
  } else if (Number(userNumber.value) >= randomNumber) {
    const text = document.createTextNode("too far");
    p.appendChild(text);
  } else {
    const text = document.createTextNode("too low");
    p.appendChild(text);
  }

  containerDiv.appendChild(p);
  i++;
}

btn.addEventListener("click", whatIsSituation());
