for (var steps = 0; steps < 20; steps++){
  
	var color = getColor();
  
  if (color == "yellow"){
    down();
    color = getColor();
    while (color == ""){
      down();
      color = getColor();
    }
  }
	if (color == "green"){
  	right();
    color = getColor();
    while (color == ""){
      right();    
      color = getColor();

    }
  }
  if (color == "blue"){
    up();
    color = getColor();
    while (color == ""){
      up();    
      color = getColor();

    }
  }
  if (color == "red"){
    left();
    color = getColor();
    while (color == ""){
      left();    
      color = getColor();
    }
  }
  
}
