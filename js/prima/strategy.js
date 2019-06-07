'use strict';

//counter that say number of circles
let countrina = storage.tops;

//class parent
function Parent() {}
//add method start()
Parent.prototype.start = function() {
  console.log('strategy work');
};


function DrawTops() {}
//resubmit method start()
DrawTops.prototype.start = function() {
  //say to observers
  observable.send('You can draw circles');
  //off drawing arrows
  finalArrow();
  //change function on click
  c.onclick = function manually(event) {
    countrina++;
    const x = event.offsetX;
    const y = event.offsetY;
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.arc(x, y, 30, 0, 2 * storage.pi, true);
    ctx.strokeText(countrina, x, y);
    ctx.stroke();
  };
};

//connect with the class parent
Object.setPrototypeOf(DrawTops.prototype, Parent.prototype);

function DrawArrows() {}
DrawArrows.prototype.start = function() {
  observable.send('You can draw arrows');
  finalRounds();
  c.onmousedown = function begin(event1) {
    const x1 = event1.offsetX;
    const y1 = event1.offsetY;
    c.onmouseup = function over(event2) {
      const x2 = event2.offsetX;
      const y2 = event2.offsetY;
      arrows(
        x1 + 10,
        x2 + 10,
        -y1 - 215 + storage.height,
        -y2 - 215 + storage.height,
        2
      );
    };
  };
};

Object.setPrototypeOf(DrawArrows.prototype, Parent.prototype);

function TurnOff() {}
TurnOff.prototype.start = function() {
  observable.send('You can not draw');
  finalRounds();
  finalArrow();
};

Object.setPrototypeOf(TurnOff.prototype, Parent.prototype);

//class that have act
function Context(act) {
  this.act = act;
}

//add method to class Context
Context.prototype.process = function() {
  return this.act.start();
};

function finalRounds() {
  c.onclick = function() {};
}

function finalArrow() {
  c.onmousedown = function() {};
  c.onmouseup = function() {};
}

//Usage

//create new objects
const round = new Context(new DrawTops());
const arrow = new Context(new DrawArrows());
const off = new Context(new TurnOff());

hend1.onclick = function() {
  round.process();
};

hend2.onclick = function() {
  arrow.process();
};

hend3.onclick = function() {
  off.process();
};
