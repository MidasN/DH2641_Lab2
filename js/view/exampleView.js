//ExampleView Object constructor
var ExampleView = function (container,model) {
 
 // Get all the relevant elements of the view (ones that show data
 // and/or ones that responded to interaction)
 this.numberOfGuests = container.find("#numberOfGuests");
 this.plusButton = container.find("#plusGuest");
 this.minusButton = container.find("#minusGuest");
 
 this.numberOfGuests.html(model.getNumberOfGuests());
 
}

 var DishOverview = function(container, model){
	 this.starterimg = container.find("#starterimg");
	 this.starterName = container.find("#starterName");
	 this.startercost = container.find("#startercost");
	 this.mainimg = container.find("#mainimg");
	 this.mainname = container.find("#mainname");
	 this.maincost = container.find("#maincost");
	 this.dessertimg = container.find("#dessertimg");
	 this.dessertname = container.find("#dessertname");
	 this.dessertcost = container.find("#dessertcost");
	 this.totalCost = container.find("#totalCost");
	 this.numGuests = container.find("#numGuests");
	 
	 this.numGuests.html(model.getNumberOfGuests());
	 
	 this.starterName.html(model.getFullMenu()[0].name);
	 this.startercost.html(model.getDishCost(0));
	 this.mainname.html(model.getFullMenu()[1].name);
	 this.maincost.html(model.getDishCost(1));
	 this.dessertname.html(model.getFullMenu()[2].name);
	 this.dessertcost.html(model.getDishCost(2));
	 this.totalCost.html(model.getTotalMenuPrice());
 }
 
 var DishSelectionPanel = function(container, model){
	 this.keyWords = container.find("#keyWords");
	 this.keyWordBtn = container.find("#keyWordBtn");
	 this.typeDropDown = container.find("#typeDropDown");
 }

 
 var LeftDishList = function (container, model){
	 if(container.find("#dishTable").length > 0){
	 this.numGuests = container.find("#numberOfGuests");
	 this.dishTable = container.find("#dishTable");
	 this.total = container.find("#totalCost");
	 this.confirmBtn = container.find("#confirmBtn");
	
	 for(i = 0; i < model.getFullMenu().length ; i++){
			var row = dishTable.insertRow(-1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
		 
			cell1.innerHTML = model.getFullMenu()[i].name;
			cell2.innerHTML = model.getDishCost(i);
	 }
	 
	 this.numGuests.html(model.getNumberOfGuests());
	 this.total.html(model.getTotalMenuPrice());
	 }
 }
 
 var DishSpecs = function(container, model, id){
	 if(container.find("#ingredientTable").length > 0){
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
	 
	 this.totalCost.html(model.getDishCost(2));
	 }
 }
 
 var PreparationView = function(container, model){
	 
	 this.numGuests = container.find("#numGuests");
	 
	 this.starterimage = container.find("#starterimage");
	 this.startertitle = container.find("#startertitle");
	 this.startertext = container.find("#startertext");
	 this.starterinstructions = container.find("#starterinstructions");
	 
	 this.mainimage = container.find("#mainimage");
	 this.maintitle = container.find("#maintitle");
	 this.maintext = container.find("#maintext");
	 this.maininstructions = container.find("#maininstructions");
	 
	 this.dessertimage = container.find("#dessertimage");
	 this.desserttitle = container.find("#desserttitle");
	 this.desserttext = container.find("#desserttext");
	 this.dessertinstructions = container.find("#dessertinstructions");
	 
	 this.numGuests.html(model.getNumberOfGuests());
	 
	 this.startertitle.html(model.getSelectedDish('starter').name);
	 this.startertitle.html(model.getSelectedDish('starter').name);
	 this.maintitle.html(model.getSelectedDish('main dish').name);
	 this.desserttitle.html(model.getSelectedDish('dessert').name);
	 
	 this.starterinstructions.html(model.getSelectedDish('starter').description);
	 this.maininstructions.html(model.getSelectedDish('main dish').description);
	 this.dessertinstructions.html(model.getSelectedDish('dessert').description);
 }
 
