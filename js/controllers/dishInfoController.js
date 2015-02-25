var DishInfoController = function(view, model){
	
	view.buttonInfoBack.onclick = function() {
		//hide
		document.getElementById('dishInfoView').style.display = 'none';
		//show
		document.getElementById("selectDishView").style.display = 'block';
	};
	
	view.confirmDish.onclick = function() {
		model.addDishToMenu(model.getFocusedId());
		//hide
		document.getElementById('dishInfoView').style.display = 'none';
		//show
		document.getElementById("selectDishView").style.display = 'block';
	};
	
};