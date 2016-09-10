function keepGoing (){

	var c = getColor();
	
  while (c!="red" && c!="blue"){
    right();
    c = getColor();
 
  if (c == "blue"){
    down();
    c = getColor();
  }
    
  if (c == "red"){
    up();
    c = getColor();
  }
    
  }
  
}

keepGoing();
