var SelectDishView = function(container, model){
	this.container = container;
	
	this.keyWords = document.getElementById("keyWords");
	this.keyWordBtn = document.getElementById("keyWordBtn");
	this.typeDropDown = document.getElementById("typeDropDown");
	this.search = document.getElementById("search");
	
	var dishIds = new Array(5);
	
	this.getDishIds = function(){
		return dishIds;
	}
	
	function loadDishesSelection(){
		//Empty Selection
		for(i=0; i<5; i++){
			search.getElementsByTagName('a')[i].innerHTML = "";
			search.getElementsByTagName('p')[i].innerHTML = "";
			search.getElementsByTagName('img')[i].src= "";
		}
		var result = model.getAllDishes(typeDropDown.value, keyWords.value);
		//Repopulate selection
		for(i=0 ; i<5; i++){
			if(i >= result.length){
				break;
			}
			search.getElementsByTagName('a')[i].innerHTML = result[i].name;
			search.getElementsByTagName('p')[i].innerHTML = result[i].description;
			
			search.getElementsByTagName('img')[i].src="images/toast.jpg";
			
			dishIds[i] = result[i].id;
		}
		
	};
	
	this.loadDishSearch = loadDishesSelection;
	
	this.update = function() {
		loadDishesSelection();
	}
	
	loadDishesSelection();
	
	model.addObserver(this);
};