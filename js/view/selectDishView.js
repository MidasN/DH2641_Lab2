var SelectDishView = function(container, model){
	this.container = container;
	
	this.keyWords = document.getElementById("keyWords");
	this.keyWordBtn = document.getElementById("keyWordBtn");
	this.typeDropDown = document.getElementById("typeDropDown");
	this.search = document.getElementById("search");
	
	function loadDishesSelection(){
		//Empty Selection
		search.innerHTML = "";
	
		var result = model.getAllDishes(typeDropDown.value, keyWords.value);
		
		for(i=0; i<result.length; i++){
			var img = document.createElement("img");
			img.setAttribute('id', result[i].id);
			img.src = "images/toast.jpg";
			
			var name = document.createElement("a");
			name.innerHTML = result[i].name;
			
			var description = document.createElement("p");
			description.innerHTML = result[i].description;
			
			search.appendChild(img);
			search.appendChild(name);
			search.appendChild(description);
		}
	};
	
	this.loadDishSearch = loadDishesSelection;
	
	this.update = function() {
		loadDishesSelection();
	}
	
	loadDishesSelection();
	
	model.addObserver(this);
};