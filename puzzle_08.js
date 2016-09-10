for (var switchBacks = 0; switchBacks < 5; switchBacks++){
    
for (var steps = 0; steps < 8; steps = steps + 1) {
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
