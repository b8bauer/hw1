function travel (direction, count){
  var steps = 0;
  while (steps < count){
    direction();
    steps = steps + 1;
  }
}

travel (down, 2);
var c = getColor();
travel (down, 3);
travel (right, 2);
setColor(c);
travel (right, 2);
travel (up, 1);
