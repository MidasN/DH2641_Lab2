var SelectDishController = function(view, model){
	
	function displayDishInfoView(){
		document.getElementById("selectDishView").style.display = 'none';
		document.getElementById("dishInfoView").style.display = 'block';
	};
	
	var result = model.getAllDishes(view.typeDropDown.value, view.keyWords.value);
	
	for(i=0; i<5;i++){
		if(i >= result.length){
			break;
		}
		
		view.search.getElementsByTagName('img')[i].onclick = function(){
			model.setFocusedId(view.getDishIds()[i]);
			displayDishInfoView();
			
		};
		
		view.search.getElementsByTagName('a')[i].onclick = function(){
			model.setFocusedId(view.getDishIds()[i]);
			displayDishInfoView();
		};
	}

	view.keyWordBtn.onclick = function(){
		view.update();
		
		var result = model.getAllDishes(view.typeDropDown.value, view.keyWords.value);
		
		for(i=0; i<5;i++){
		if(i >= result.length){
			break;
		}
		
		view.search.getElementsByTagName('img')[i].onclick = function(){
			model.setFocusedId(view.getDishIds()[i]);
			displayDishInfoView();
			
		};
		
		view.search.getElementsByTagName('a')[i].onclick = function(){
			model.setFocusedId(view.getDishIds()[i]);
			displayDishInfoView();
		};
		}
	};
};