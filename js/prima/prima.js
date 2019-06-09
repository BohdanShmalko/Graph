'use strict';

document.getElementById('knp2').onclick = function() {
  prima();
};


//algorithm Prima
function prima() {
  const array = storage.array;
  clf();

  const U = [];

  for (let i = 0; i < storage.tops; i++) {
    for (let j = i; j < storage.tops; j++) {
      if (array[i][j] !== 0) {
        U.push(i);
        break;
      }
    }
    if (U.length !== 0) break;
  }

  for (let i = 0; i < storage.tops; i++) {
    array[i][U[0]] = 0;
  }

  form1(U[0] + 1);

  function r() {
    const N = [0, 0, Infinity];
    for (let i = 0; i < U.length; i++) {
      for (let j = 0; j < storage.tops; j++) {
        if (array[U[i]][j] !== 0) {
          if (N[2] > array[U[i]][j]) {
            N[0] = U[i];
            N[1] = j;
            N[2] = array[U[i]][j];
          }
        }
      }
    }

    U.push(N[1]);

    for (let i = 0; i < storage.tops; i++) {
      array[i][N[1]] = 0;
    }

    if ( N[0] !==  N[1]) {
      form1(N[1] + 1);
      form2(N[0] + 1, N[1] + 1, N[2], true, 'other');
    };

  }
  document.getElementById('knp2').onclick = function() {
    r();
  };
}
