function travel (direction, count){
  var steps = 0;
  while (steps < count){
    direction();
    steps = steps + 1;
  }
}

travel (down, 7);
travel (right, 5);
travel (up, 2);
travel (right, 2);
