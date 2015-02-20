var DishInfoView = function(container, model){
	this.container = container;
	
	this.dishName = container.find("#dishName");
	this.dishImg = container.find("#dishImg");
	this.dishDescr = container.find("#dishDescr");
	this.numberOfGuests = container.find("#numberOfGuests");
	this.ingredientTable = container.find("#ingredientTable");
	this.totalCost = container.find("#totalCost");
	 
	this.dishName.html(model.getDish(id).name);
	this.dishImg.html(model.getDish(id).image);
	this.dishDescr.html(model.getDish(id).description);
	this.numberOfGuests.html(model.getNumberOfGuests());
	 
	for(i=0; i < model.getDish(id).ingredients.length ; i++){
		var row = ingredientTable.insertRow(-1);
		var cell0 = row.insertCell(0);
		var cell1 = row.insertCell(1);
		var cell2 = row.insertCell(2);
		 
		cell0.innerHTML = model.getDish(id).ingredients[i].quantity;
		cell1.innerHTML = model.getDish(id).ingredients[i].name;
		cell2.innerHTML = model.getDish(id).ingredients[i].price;
	}
	 
	this.totalCost.html(model.getDishCost(1));
};