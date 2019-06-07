'use strict';

function Observable() {
  //array for storing observers
  storage.observers = [];
  //send message for all observers
  this.send = function(msg) {
    for (let i = 0; i < storage.observers.length; i++) {
      storage.observers[i].told(msg);
    }
  };
  // add new observer
  this.add = function(observer) {
    storage.observers.push(observer);
  };
}

function Observer(job) {
  //add method told that call callback
  this.told = function(msg) {
    job(msg);
  };
}

//create new object
const observable = new Observable();

//object that storage messages
const beams = {
  count: false,
  line1: '',
  line2: '',
  line3: '',
  line4: '',
  line5: '',
  line6: '',
  line7: '',
  line8: '',
  line9: '',
  line10: '',
  line11: '',
};

//create new observer
const obs1 = new Observer(((msg) => {
  ctx2.clearRect(0, 0, 1000, 300);
  if (beams.line11 !== '') beams.line1 = beams.line2;
  if (beams.line1 !== '') beams.count = true;
  else if (beams.line1 === '') beams.line1 = msg;
  xsstring(10, 5, beams.line1);
}));

const obs2 = new Observer(((msg) => {
  if (beams.line2 !== '') beams.count = false;
  else if (
    beams.line2 === '' &&
    beams.line1 !== '' &&
    beams.line3 === '' &&
    beams.count === true
  )
    beams.line2 = msg;
  if (beams.line11 !== '') beams.line2 = beams.line3;
  xsstring(10, 30, beams.line2);
}));

const obs3 = new Observer(((msg) => {
  if (beams.line3 !== '') beams.count = true;
  else if (
    beams.line3 === '' &&
    beams.line2 !== '' &&
    beams.line4 === '' &&
    beams.count === false
  )
    beams.line3 = msg;
  if (beams.line11 !== '') beams.line3 = beams.line4;
  xsstring(10, 55, beams.line3);
}));

const obs4 = new Observer(((msg) => {
  if (beams.line4 !== '') beams.count = false;
  else if (
    beams.line4 === '' &&
    beams.line3 !== '' &&
    beams.line5 === '' &&
    beams.count === true
  )
    beams.line4 = msg;
  if (beams.line11 !== '') beams.line4 = beams.line5;
  xsstring(10, 85, beams.line4);
}));

const obs5 = new Observer(((msg) => {
  if (beams.line5 !== "") beams.count = true;
  else if (
    beams.line5 === '' &&
    beams.line4 !== '' &&
    beams.line6 === '' &&
    beams.count === false
  )
    beams.line5 = msg;
  if (beams.line11 !== '') beams.line5 = beams.line6;
  xsstring(10, 115, beams.line5);
}));

const obs6 = new Observer(((msg) => {
  if (beams.line6 !== '') beams.count = false;
  else if (
    beams.line6 === '' &&
    beams.line5 !== '' &&
    beams.line7 === '' &&
    beams.count === true
  )
    beams.line6 = msg;
  if (beams.line11 !== '') beams.line6 = beams.line7;
  xsstring(10, 145, beams.line6);
}));

const obs7 = new Observer(((msg) => {
  if (beams.line7 !== '') beams.count = true;
  else if (
    beams.line7 === '' &&
    beams.line6 !== '' &&
    beams.line8 === '' &&
    beams.count === false
  )
    beams.line7 = msg;
  if (beams.line11 !== '') beams.line7 = beams.line8;
  xsstring(10, 175, beams.line7);
}));

const obs8 = new Observer(((msg) => {
  if (beams.line8 !== '') beams.count = false;
  else if (
    beams.line8 === '' &&
    beams.line7 !== '' &&
    beams.line9 === '' &&
    beams.count === true
  )
    beams.line8 = msg;
  if (beams.line11 !== '') beams.line8 = beams.line9;
  xsstring(10, 205, beams.line8);
}));

const obs9 = new Observer(((msg) => {
  if (beams.line9 !== '') beams.count = true;
  else if (
    beams.line9 === '' &&
    beams.line8 !== '' &&
    beams.line10 === '' &&
    beams.count === false
  )
    beams.line9 = msg;
  if (beams.line11 !== '') beams.line9 = beams.line10;
  xsstring(10, 235, beams.line9);
}));

const obs10 = new Observer(((msg) => {
  if (beams.line10 !== '') beams.count = false;
  else if (
    beams.line10 === '' &&
    beams.line9 !== '' &&
    beams.line11 === '' &&
    beams.count === true
  )
    beams.line10 = msg;
  if (beams.line11 !== '') beams.line10 = beams.line11;
  xsstring(10, 265, beams.line10);
}));

const obs11 = new Observer(((msg) => {
  if (beams.line10 !== '') beams.line11 = msg;
  xsstring(10, 285, beams.line11);
}));

//add all observers into array

observable.add(obs1);
observable.add(obs2);
observable.add(obs3);
observable.add(obs4);
observable.add(obs5);
observable.add(obs6);
observable.add(obs7);
observable.add(obs8);
observable.add(obs9);
observable.add(obs10);
observable.add(obs11);
