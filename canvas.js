const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// ctx.fillStyle = "green";
// ctx.fillRect(20, 10, 150, 100);
// ctx.fillStyle = "red";
// ctx.fillRect(200, 10, 150, 100);

// ctx.strokeStyle;
// ctx.strokeRect(100, 200, 150, 100);

// ctx.clearRect(25, 15, 140, 90);

// ctx.font = "30px Arial";
// ctx.fillStyle = "green";
// ctx.fillText("Next Level", 400, 50);

// ctx.fillStyle = "brown";
// ctx.strokeText("Dreams Come true", 400, 100);

// const textNode = document.createTextNode(canvas.height);
// document.body.appendChild(textNode);

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(150, 50);
ctx.lineTo(75, 200);
ctx.lineTo(50, 50);
ctx.closePath();
ctx.fillStyle = "purple";
// ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.moveTo(200, 50);
ctx.lineTo(100, 200);
ctx.lineTo(300, 200);
// ctx.lineTo(50, 50);
ctx.closePath();
//
ctx.stroke();
