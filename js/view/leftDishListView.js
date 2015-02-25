var LeftDishListView = function(container, model){
	this.container = container;
	
	this.leftNumGuests = document.getElementById("leftNumGuests");
	this.dishTable = container.find("#dishTable");
	var total = document.getElementById("leftTotalCost");
	this.confirmBtn = document.getElementById('confirmBtn');

	var loadDishList = function(){
		//dishTable.innerHTML("");
		while (dishTable.rows.length > 0 ){		
			dishTable.deleteRow(0);
		}

		for(i = 0; i < model.getFullMenu().length ; i++){
			var row = dishTable.insertRow(-1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
		
			cell1.innerHTML = model.getFullMenu()[i].name;
			cell2.innerHTML = model.getDishCost(i);
			
		}
		
		leftNumGuests.value = model.getNumberOfGuests();
		total.innerHTML = model.getTotalMenuPrice();
	};
	
	this.update = function(){
		loadDishList();
	}
	
	loadDishList();
	
	model.addObserver(this);
};