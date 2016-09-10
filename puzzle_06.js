var c = getColor;

function travel (direction, count){
  var steps = 0;
	while (steps < count){
  direction();
  steps = steps + 1;
  c = getColor();
  }
}

travel (right, 1);

if (c == "red"){
  travel (up, 4);
  if (c == "red"){
		  travel (left, 1);
    }
    else {
      travel (right, 1);
    }
  travel (up, 1);
}

else {
  travel (down, 4);
    if (c == "red"){
		  travel (left, 1);
    }
    else {
      travel (right, 1);
    }
  travel (down, 1);
  }
