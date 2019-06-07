'use strict';

//algorithm Prima
function prima() {
  const array = storage.array;
  clf();
  let a = 0;
  const skok = [];
  let co = 0;
  const rad = [];
  const zk = [];
  for (let i = 0; i < storage.tops; i++) {
    rad[i] = 0;
    skok[i] = 0;
  }
  let n = 0;
  for (let i = 0; i < storage.tops; i++) {
    for (let j = i; j < storage.tops; j++) {
      if (array[i][j] !== 0) {
        a = i;
        n = 1;
        break;
      }
    }
    if (n !== 0) {
      break;
    }
  }

  const U = [];
  U[0] = a;
  let p = 1;

  for (let i = 0; i < storage.tops; i++) {
    array[i][a] = 0;
  }

  form1(a + 1);

  function r() {
    const N = [0, 0, Infinity];
    for (let i = 0; i < U.length; i++) {
      for (let j = 0; j < storage.tops; j++) {
        const m = U[i];
        if (array[m][j] !== 0) {
          if (N[2] > array[m][j]) {
            N[0] = U[i];
            N[1] = j;
            N[2] = array[U[i]][j];
          }
        }
      }
    }

    const s = N[0];
    zk[co] = N[0];
    zk[co + 1] = N[1];
    co += 2;
    skok[s]++;
    U[p] = N[1];
    p++;

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

document.getElementById('knp2').onclick = function() {
  prima();
};
