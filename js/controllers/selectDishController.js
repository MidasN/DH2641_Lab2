var SelectDishController = function(view, model){
	
	function displayDishInfoView(){
		document.getElementById("selectDishView").style.display = 'none';
		document.getElementById("dishInfoView").style.display = 'block';
	};
	
	
	function loadSelectDishListeners(){
	
	var images = view.search.getElementsByTagName("img");
		for(var i=0; i<images.length; i++){
			var img = images[i];
			img.onclick = function(){
				model.setFocusedId(this.id);
				model.notifyObservers();
				displayDishInfoView();
			};
		}
	};
	
	view.keyWordBtn.onclick = function(){
		view.update();
		loadSelectDishListeners();
	};
	
	this.update = function(){
		loadSelectDishListeners();
	};
	
	loadSelectDishListeners();
	
	model.addObserver(this);
};