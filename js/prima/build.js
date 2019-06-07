'use strict';

// storage object
const storage = {
  width: 1000,
  height: 900,
  Colors: ['red', 'blue', 'black', 'green', 'brown', 'orange', 'pink'],
  pi: Math.PI,
  num: 4,
  num1: 5,
  num2: 9,
  num3: 12,
  tops: 12
};

//clear canvas
const clf = () => ctx.clearRect(0, 0, storage.width, storage.height);

//converts string-matrix into matrix-js
const matrix = input => {
  const P = [];
  const arr = input.match(/\d+/g).map(Number);
  storage.tops = Math.sqrt(arr.length);
  storage.num = Math.ceil(storage.tops / 3);
  storage.num1 = storage.num + 1;
  storage.num2 = storage.num * 2 + 1;
  storage.num3 = storage.num * 3;
  if (storage.num <= 4) storage.balans = 1;
  else storage.balans = 4 / storage.num;
  if (storage.tops % 1 !== 0) return false;
  let count1 = -1;
  let count2;
  for (let i = 0; i < arr.length; i++) {
    if (i % sqrt === 0) {
      count1++;
      P[count1] = [];
      count2 = 0;
    }
    P[count1][count2] = arr[i];
    count2++;
  }
  return P;
};

//easier to draw lines
function lines(x1, x2, y1, y2, color) {
  let k = storage.Colors[color];
  if (k === undefined) k = 'black';
  ctx.beginPath();
  ctx.strokeStyle = k;
  ctx.moveTo(x1 - 10, storage.height - y1 - 215);
  ctx.lineTo(x2 - 10, storage.height - y2 - 215);
  ctx.stroke();
}

//easier to draw arrows
function arrows(x1, x2, y1, y2, color) {
  const n = 10;
  const angle = Math.atan2(y2 - y1, x2 - x1);
  lines(x1, x2, y1, y2, color);
  ctx.lineTo(
    x2 - 10 - n * Math.cos(angle - Math.PI / 6),
    storage.height - (y2 - n * Math.sin(angle - Math.PI / 6)) - 215
  );
  ctx.moveTo(x2 - 10, storage.height - y2 - 215);
  ctx.lineTo(
    x2 - 10 - n * Math.cos(angle + Math.PI / 6),
    storage.height - (y2 - n * Math.sin(angle + Math.PI / 6)) - 215
  );
  ctx.stroke();
}

//easier to write
function xstring(x, y, str) {
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.strokeText(str, x, storage.height - y - 215);
  ctx.stroke();
}

//easier to draw circles
function xarc(x, y, radius, duga) {
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.arc(x + 15, storage.height - y - 185, radius, 0, duga, true);
  ctx.stroke();
}

//lower canvas
const canvas2 = document.getElementById('c1');
const ctx2 = canvas2.getContext('2d');

//easier to write for lower canvas
function xsstring(x, y, str) {
  ctx2.beginPath();
  ctx2.font = '18px Arial';
  ctx2.strokeText(str, x, y + 10);
  ctx2.stroke();
}
