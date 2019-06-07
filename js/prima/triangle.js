'use strict';

//check availability of array
if (storage.array === undefined) {
  storage.array = [
    [1, 0, 0, 0, 0, 0, 71, 0, 0, 0, 0, 43],
    [0, 1, 0, 0, 0, 0, 0, 0, 62, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 41, 0, 0, 0, 23],
    [0, 0, 0, 0, 0, 0, 51, 72, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 4, 43, 0, 0, 0, 0, 35],
    [0, 0, 0, 0, 4, 0, 65, 0, 0, 0, 19, 42],
    [71, 0, 0, 51, 43, 65, 0, 0, 0, 0, 0, 33],
    [0, 0, 41, 72, 0, 0, 0, 0, 0, 0, 0, 73],
    [0, 62, 0, 0, 0, 0, 0, 0, 0, 83, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 83, 0, 0, 84],
    [0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 84],
    [43, 0, 23, 0, 35, 42, 33, 73, 0, 84, 84, 0]
  ];
}

//draw circle
function form1(el) {
  if (el <= storage.num1) {
    xarc(90 + (el - 1) * 100, 10 + (el - 1) * 100, 25, 2 * storage.pi);
    xstring(el * 100, (el - 1) * 100 - 30, el);
  } else if (el > storage.num1 && el <= storage.num2) {
    xarc(
      90 + (el - 1) * 100,
      910 - (storage.num - 4) * 100 + (storage.num * 3 - 12) * 100 - el * 100,
      25,
      2 * storage.pi
    );
    xstring(
      el * 100 - 10,
      870 - (storage.num - 4) * 100 + (storage.num * 3 - 12) * 100 - el * 100,
      el
    );
  } else {
    xarc(
      290 + (storage.num * 3 - 12) * 200 + (12 - el) * 200,
      10,
      25,
      2 * storage.pi
    );
    xstring(290 + (storage.num * 3 - 12) * 200 + (12 - el) * 200, -30, el);
  }
}

//draw arrow
function form2(z, k, v, napram, color) {
  const coord = [];
  coord[0] = 0;
  if (color === 'other')
    color = Math.floor(Math.random() * storage.Colors.length);
  if (z <= storage.num1) {
    coord[1] = z * 100;
    coord[2] = (z - 1) * 100;
  } else if (z > storage.num1 && z <= storage.num2) {
    coord[1] = z * 100;
    coord[2] =
      900 - (storage.num - 4) * 100 + (storage.num * 3 - 12) * 100 - z * 100;
  } else {
    coord[1] = 300 + (storage.num * 3 - 12) * 200 + (12 - z) * 200;
    coord[2] = 0;
  }
  if (k <= storage.num1) {
    coord[3] = k * 100;
    coord[4] = (k - 1) * 100;
  } else if (k > storage.num1 && k <= storage.num2) {
    coord[3] = k * 100;
    coord[4] =
      900 - (storage.num - 4) * 100 + (storage.num * 3 - 12) * 100 - k * 100;
  } else {
    coord[3] = 300 + (storage.num * 3 - 12) * 200 + (12 - k) * 200;
    coord[4] = 0;
  }
  const l = 25 / storage.num1;
  if (z === k & z) {
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.arc(
      coord[1] - 10,
      storage.height - coord[2] - 215,
      30,
      0,
      0.65 * storage.pi,
      true
    );
    ctx.stroke();
    arrows(coord[1] - 15, coord[3] - 10, coord[2] - 25, coord[4] - 25);
  } else if (z <= storage.num1 && k <= storage.num1 && z < k) {
    const const1 = (coord[3] - coord[1]) / 100;
    xstring(coord[1] - storage.tops * const1, coord[2] + l * const1 + 25, v);
    lines(
      coord[1] - 10,
      coord[1] - storage.tops * const1,
      coord[2] - 25 + (const1 - 1) * l,
      coord[2] + l * const1 + 25,
      color
    );
    if (napram === false)
      lines(
        coord[1] - storage.tops * const1,
        coord[3] - 10,
        coord[2] + l * const1 + 25,
        coord[4] - 25 + const1 * 2,
        color
      );
    else if (napram === true)
      arrows(
        coord[1] - storage.tops * const1,
        coord[3] - 10,
        coord[2] + l * const1 + 25,
        coord[4] - 25 + const1 * 2,
        color
      );
  } else if (z <= storage.num1 && k <= storage.num1 && z > k) {
    const const1 = (coord[1] - coord[3]) / 100;
    xstring(coord[1] - storage.tops * const1, coord[2], v);
    lines(
      coord[1] - 10,
      coord[1] - storage.tops * const1,
      coord[2] - 25 + const1 * l,
      coord[2],
      color
    );
    if (napram === false)
      lines(
        coord[1] - storage.tops * const1,
        coord[3] + l * const1,
        coord[2],
        coord[4] + 6,
        color
      );
    else if (napram === true)
      arrows(
        coord[1] - storage.tops * const1,
        coord[3] + l * const1,
        coord[2],
        coord[4] + 6,
        color
      );
  } else if (
    (z <= storage.num) & (z > 1) &&
    k > storage.num1 &&
    k < storage.num2
  ) {
    xstring(
      (coord[1] + 35 + coord[3] - 8) / 2 - 10,
      (coord[2] - 20 + coord[4] - 1) / 2 - 10,
      v
    );
    if (napram === false)
      lines(coord[1] + 35, coord[3] - 8, coord[2] - 20, coord[4] - 15, color);
    else if (napram === true)
      arrows(coord[1] + 35, coord[3] - 8, coord[2] - 20, coord[4] - 15, color);
  } else if (z === 1 && k > storage.num1 && k < storage.num2) {
    xstring(
      (coord[1] + 35 + coord[3] - 8) / 2 - 10,
      (coord[2] - 15 + coord[4] - 20) / 2 - 10,
      v
    );
    if (napram === false)
      lines(coord[1] + 35, coord[3] - 8, coord[2] - 15, coord[4] - 20, color);
    else if (napram === true)
      arrows(coord[1] + 35, coord[3] - 8, coord[2] - 15, coord[4] - 20, color);
  } else if (z === 1 && k >= storage.num2) {
    xstring((coord[3] - 100) / 2 + 70, -100, v);
    lines(135, (coord[3] - 100) / 2 + 70, -20, -100, color);
    if (napram === false)
      lines((coord[3] - 100) / 2 + 70, coord[3], -100, -35, color);
    else if (napram === true)
      arrows((coord[3] - 100) / 2 + 70, coord[3], -100, -35, color);
  } else if (z < storage.num1 && z > 1 && k >= storage.num2) {
    xstring(
      (coord[1] + 35 + coord[3]) / 2 + 20,
      (coord[2] - 20 + coord[4]) / 2 - 10,
      v
    );
    if (napram === false)
      lines(coord[1] + 40, coord[3] - 5, coord[2] - 20, coord[4], color);
    else if (napram === true)
      arrows(coord[1] + 40, coord[3] - 5, coord[2] - 20, coord[4], color);
  } else if (
    z >= storage.num1 &&
    z <= storage.num2 &&
    k >= storage.num1 &&
    k <= storage.num2 &&
    z < k
  ) {
    let const1 = (coord[3] - coord[1]) / 100;
    xstring(coord[1] + 30 * const1 + 35, coord[2] + l * const1 + 35, v);
    lines(
      coord[1] + 35 + 2,
      coord[1] + 30 * const1 + 35,
      coord[2] - (const1 - 1) * l,
      coord[2] + l * const1 + 35,
      color
    );
    if (napram === false)
      lines(
        coord[1] + 30 * const1 + 35,
        coord[3] + const1 * 6,
        coord[2] + l * const1 + 35,
        coord[4] + 8,
        color
      );
    else if (napram === true)
      arrows(
        coord[1] + 30 * const1 + 35,
        coord[3] + const1 * 6,
        coord[2] + l * const1 + 35,
        coord[4] + 8,
        color
      );
  } else if (
    z >= storage.num1 &&
    z <= storage.num2 &&
    k >= storage.num1 &&
    k <= storage.num2 &&
    z > k
  ) {
    const const1 = (coord[1] - coord[3]) / 100;
    xstring(coord[1] + 30 * const1 + 35, coord[2] + l * const1 + 25, v);
    lines(
      coord[1] + 35,
      coord[1] + 30 * const1 + 35,
      coord[2] - (const1 - 1) * l,
      coord[2] + l * const1 + 25,
      color
    );
    if (napram === false)
      lines(
        coord[1] + 30 * const1 + 33,
        coord[3] + 35,
        coord[2] + l * const1 + 25,
        coord[4],
        color
      );
    else if (napram === true)
      arrows(
        coord[1] + 30 * const1 + 33,
        coord[3] + 35,
        coord[2] + l * const1 + 25,
        coord[4],
        color
      );
  } else if (z > storage.num1 && z < storage.num2 && k < storage.num1) {
    xstring(
      (coord[1] - 10 + coord[3] + 35) / 2,
      (coord[2] - 10 + coord[4]) / 2,
      v
    );
    if (napram === false)
      lines(coord[1] - 10, coord[3] + 35, coord[2] - 10, coord[4], color);
    else if (napram === true)
      arrows(coord[1] - 10, coord[3] + 35, coord[2] - 10, coord[4], color);
  } else if (z === storage.num2 && k < storage.num1 && k > 1) {
    if (napram === false)
      lines(coord[1] - 10, coord[3] + 35, coord[2] - 10, coord[4], color);
    else if (napram === true)
      arrows(coord[1] - 10, coord[3] + 35, coord[2] - 10, coord[4], color);
  } else if (z > storage.num1 && z < storage.num2 && k > storage.num2) {
    xstring(
      (coord[1] - 11 + coord[3] + 35) / 2,
      (coord[2] - 15 + coord[4] + 5) / 2,
      v
    );
    if (napram === false)
      lines(coord[1] - 11, coord[3] + 35, coord[2] - 15, coord[4] + 5, color);
    else if (napram === true)
      arrows(coord[1] - 11, coord[3] + 35, coord[2] - 15, coord[4] + 5, color);
  } else if (z > storage.num2 && k <= storage.num1 && k > 1) {
    xstring(
      (coord[1] + coord[3] + 20) / 2,
      (coord[2] + 7 + coord[4] - 35) / 2,
      v
    );
    if (napram === false)
      lines(coord[1], coord[3] + 20, coord[2] + 7, coord[4] - 35, color);
    else if (napram === true)
      arrows(coord[1], coord[3] + 20, coord[2] + 7, coord[4] - 35, color);
  } else if (z > storage.num2 && k > storage.num1 && k < storage.num2) {
    xstring(
      (coord[1] + 5 + coord[3] - 10) / 2,
      (coord[2] + 10 + coord[4] - 20) / 2,
      v
    );
    if (napram === false)
      lines(coord[1] + 5, coord[3] - 10, coord[2] + 10, coord[4] - 20, color);
    else if (napram === true)
      arrows(coord[1] + 5, coord[3] - 10, coord[2] + 10, coord[4] - 20, color);
  } else if (z >= storage.num2 && k >= storage.num2 && z > k) {
    const const1 = (coord[1] - coord[3]) / 100;
    xstring(coord[3] + const1 * 50, -80, v);
    lines(
      coord[1] + const1 * 2,
      coord[3] + const1 * 50,
      coord[2] - 35,
      -80,
      color
    );
    if (napram === false)
      lines(
        coord[3] + const1 * 50,
        coord[3] + const1 * 2,
        -80,
        coord[4] - 35,
        color
      );
    else if (napram === true)
      arrows(
        coord[3] + const1 * 50,
        coord[3] + const1 * 2,
        -80,
        coord[4] - 35,
        color
      );
  } else if (z >= storage.num2 && k >= storage.num2 && z < k) {
    const const1 = (coord[1] - coord[3]) / 100;
    xstring(coord[3] + const1 * 50, -80, v);
    lines(
      coord[1] - const1 * 2 + 35,
      coord[3] + const1 * 50,
      coord[2] - 35 - 7,
      -80,
      color
    );
    if (napram === false)
      lines(
        coord[3] + const1 * 50,
        coord[3] - const1 * 2 + 35,
        -80,
        coord[4] - 35,
        color
      );
    else if (napram === true)
      arrows(
        coord[3] + const1 * 50,
        coord[3] - const1 * 2 + 35,
        -80,
        coord[4] - 35,
        color
      );
  }
}

//draws circles along the triangle
function rounds() {
  clf();
  countrina = storage.tops;
  for (let x = 1; x <= storage.tops; x++) {
    form1(x);
  }
}

//draw arrows
function rebra(color) {
  storage.z = [];
  storage.k = [];
  const vaga = [];
  let conum = 0;
  let n = 0;
  for (let p = 0; p < storage.tops; p++) {
    for (let y = p; y < storage.tops; y++) {
      if (storage.array[p][y] > 0) {
        vaga[n] = storage.array[p][y];
        n++;
        if (p + 1 <= storage.num1) {
          storage.z[conum] = p + 1;
        } else if (p + 1 > storage.num1 && p + 1 <= storage.num2) {
          storage.z[conum] = p + 1;
        } else {
          storage.z[conum] = p + 1;
        }
        if (y + 1 <= storage.num1) {
          storage.k[conum] = y + 1;
          conum++;
        } else if (y + 1 > storage.num1 && y + 1 <= storage.num2) {
          storage.k[conum] = y + 1;
          conum++;
        } else {
          storage.k[conum] = y + 1;
          conum++;
        }
      }
    }
  }
  for (let i = 0; i < storage.z.length; i++) {
    form2(storage.z[i], storage.k[i], vaga[i], true, color);
  }
}

//create triangle graph
function createTringleGraph(array) {
  storage.array = array;
  rounds();
  rebra('other');
}
