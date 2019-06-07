'use strict';

//class that have method .get()
function clearCanvas() {
  this.get = function() {
    //clf();
    console.log('all clear');
  };
}

//class that accepts the object
function Decorator(obj) {
  this.obj = obj;
}

//inherit from class clearCanvas
Decorator.prototype = Object.create(clearCanvas.prototype);
//create constructor, returns a reference to a function
Decorator.prototype.constructor = Decorator;

function Triangle(obj) {
  //take this property obj, call another object
  Decorator.call(this, obj);
  //resubmit method get()
  this.get = function() {
    this.obj.get();
    //talk to the observer
    observable.send('You build triangle');
    //draws circles along the triangle
    rounds();
  };
}

//inherit from class Decorator
Triangle.prototype = Object.create(Decorator.prototype);
//create constructor
Triangle.prototype.constructor = Triangle;

function Circle(obj) {
  Decorator.call(this, obj);
  this.get = function() {
    this.obj.get();
    observable.send('You build a circle');
    circletops(storage.array, 30);
  };
}

Circle.prototype = Object.create(Decorator.prototype);
Circle.prototype.constructor = Circle;

function BlackCircle(obj) {
  Decorator.call(this, obj);
  this.get = function() {
    this.obj.get();
    observable.send('graph edges are black');
    circlerebra(storage.array, 30, 2);
  };
}

BlackCircle.prototype = Object.create(Decorator.prototype);
BlackCircle.prototype.constructor = BlackCircle;

function RedCircle(obj) {
  Decorator.call(this, obj);
  this.get = function() {
    this.obj.get();
    observable.send('graph edges are red');
    circlerebra(storage.array, 30, 0);
  };
}

RedCircle.prototype = Object.create(Decorator.prototype);
RedCircle.prototype.constructor = RedCircle;

function MultiCircle(obj) {
  Decorator.call(this, obj);
  this.get = function() {
    this.obj.get();
    observable.send('graph edges are multicolored');
    circlerebra(storage.array, 30, 'other');
  };
}

MultiCircle.prototype = Object.create(Decorator.prototype);
MultiCircle.prototype.constructor = MultiCircle;

function BlackTriangle(obj) {
  Decorator.call(this, obj);
  this.get = function() {
    this.obj.get();
    observable.send('graph edges are black');
    rebra(2);
  };
}

BlackTriangle.prototype = Object.create(Decorator.prototype);
BlackTriangle.prototype.constructor = BlackTriangle;

function RedTriangle(obj) {
  Decorator.call(this, obj);
  this.get = function() {
    this.obj.get();
    observable.send('graph edges are red');
    rebra(0);
  };
}

RedTriangle.prototype = Object.create(Decorator.prototype);
RedTriangle.prototype.constructor = RedTriangle;

function MultiTriangle(obj) {
  Decorator.call(this, obj);
  this.get = function() {
    this.obj.get();
    observable.send('graph edges are multicolored');
    rebra('other');
  };
}

MultiTriangle.prototype = Object.create(Decorator.prototype);
MultiTriangle.prototype.constructor = MultiTriangle;

//create objects
const objects = {
  obj1: new MultiCircle(new Circle(new clearCanvas())),
  obj2: new BlackCircle(new Circle(new clearCanvas())),
  obj3: new RedCircle(new Circle(new clearCanvas())),
  obj4: new MultiTriangle(new Triangle(new clearCanvas())),
  obj5: new RedTriangle(new Triangle(new clearCanvas())),
  obj6: new BlackTriangle(new Triangle(new clearCanvas())),
};

function OnCircle() {
  //check default value
  if (document.getElementById('color3').checked) objects.obj1.get();
  else if (document.getElementById('color1').checked) objects.obj2.get();
  else if (document.getElementById('color2').checked) objects.obj3.get();

  //change default functions
  color3.onclick = function go() {
    objects.obj1.get();
  };
  color1.onclick = function go() {
    objects.obj2.get();
  };
  color2.onclick = function go() {
    objects.obj3.get();
  };
};

function OnTriangle() {
  //check default value
  if (document.getElementById('color3').checked) objects.obj4.get();
  else if (document.getElementById('color1').checked) objects.obj6.get();
  else if (document.getElementById('color2').checked) objects.obj5.get();

  //change default functions
  color3.onclick = function go() {
    objects.obj4.get();
  };
  color1.onclick = function go() {
    objects.obj6.get();
  };
  color2.onclick = function go() {
    objects.obj5.get();
  };
};

//Usage

location1.onclick = function() {
  OnCircle();
};
location2.onclick = function() {
  OnTriangle();
}

//default functions

//draw multicolored triangle
objects.obj4.get();

color3.onclick = function go() {
  objects.obj4.get();
};

color1.onclick = function go() {
  objects.obj6.get();
};

color2.onclick = function go() {
  objects.obj5.get();
};
