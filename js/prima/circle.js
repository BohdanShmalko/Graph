'use strict';

//builds circles from the matrix
function circletops(matrix, radius) {
  clf();
  countrina = storage.tops;
  storage.X = [];
  storage.Y = [];

  for (let i = 0; i < matrix.length; i++) {
    storage.X[i] = ((2 * storage.pi) / matrix.length) * i;
    storage.Y[i] = ((2 * storage.pi) / matrix.length) * i;
    xarc(
      Math.cos(storage.X[i]) * (matrix.length + radius + 200) + 450,
      Math.sin(storage.Y[i]) * (matrix.length + radius + 200) + 300,
      radius,
      storage.pi * 2
    );
    xstring(
      Math.cos(storage.X[i]) * (matrix.length + radius + 200) +
        radius / 2 +
        445,
      Math.sin(storage.Y[i]) * (matrix.length + radius + 200) -
        radius / 2 +
        290,
      i + 1
    );
  }
}

//builds arrows from the matrix
function circlerebra(matrix, radius, color) {
  let k;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (color === 'other')
        k = Math.floor(Math.random() * storage.Colors.length);
      else if (color === 0) k = 0;
      else k = 2;
      if (matrix[j][i] >= 1) {
        storage.a =
          radius / 2 +
          Math.cos(storage.X[j]) * (matrix.length + radius + 200) +
          (Math.cos(storage.X[j] + storage.pi) * radius) / 2 +
          450;
        storage.b =
          radius / 2 +
          Math.cos(storage.X[i]) * (matrix.length + radius + 200) +
          (Math.cos(storage.X[i] + storage.pi) * radius) / 2 +
          450;
        storage.c =
          -radius / 2 +
          Math.sin(storage.Y[j]) * (matrix.length + radius + 200) +
          (Math.sin(storage.Y[j] + storage.pi) * radius) / 2 +
          300;
        storage.d =
          -radius / 2 +
          Math.sin(storage.Y[i]) * (matrix.length + radius + 200) +
          (Math.sin(storage.Y[i] + storage.pi) * radius) / 2 +
          300;
        if (j === i) {
          xarc(storage.b - 5, storage.d + 38, 30, 0.85 * storage.pi);
        } else {
          arrows(storage.b, storage.a, storage.d, storage.c, k);
        }
      }
    }
  }
}

//builds circles graph
function createCirclesGraph(matrix, radius, color) {
  circletops(matrix, radius);
  circlerebra(matrix, radius, color);
}
