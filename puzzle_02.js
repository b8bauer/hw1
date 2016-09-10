function travel (direction, count){
  var steps = 0;
  while (steps < count){
    direction();
    steps = steps + 1;
  }
}

travel (down, 6);
travel (right, 3);
travel (up, 2);
travel (right, 2);
travel (down, 4);
