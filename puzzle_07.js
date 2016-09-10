for (var switchBacks = 0; switchBacks < 5; switchBacks++){    
  for (var c = getColor(); c != "red"; c = getColor()){
    if (switchBacks%2 == 0){
		 down();
    }
    else{
     up();
    }
  }
  right();
  right();
}
