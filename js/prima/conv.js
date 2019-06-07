'use strict';

//create upper canvas
const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');

//create graph on click
knp1.onclick = function create() {
  clf();
  const p = document.getElementById('ar').value;
  try {
    storage.array = matrix(p);
    storage.new = matrix(p);
    countrina = storage.array.length;
    if (document.getElementById('location2').checked) OnTriangle();
    else if (document.getElementById('location1').checked) OnCircle();
    document.getElementById('knp2').onclick = function() {
      prima();
    };
  } catch (e) {
    observable.send('You have entered the wrong matrix');
  }
};
