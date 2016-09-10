function travel (direction, count){
 var steps = 0;
  while (steps < count){
  direction();
  steps = steps + 1;
  }
}

travel (down, 4);
travel (right, 1);
var c = getColor();
travel (down, 1);
setColor(c);
travel (right, 2);
travel (up, 1);
travel (right, 1);
c = getColor();
travel (down, 1);
setColor(c);
travel (right, 2);
