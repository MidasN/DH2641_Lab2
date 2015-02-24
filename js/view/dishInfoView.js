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

var buttonInfoBack = document.getElementById('buttonInfoBack');

buttonInfoBack.onclick = function() {
    //hide
    var dishInfoView = document.getElementById('dishInfoView');
    if (dishInfoView.style.display !== 'none') {
        dishInfoView.style.display = 'none';
    }
    var ingrList = document.getElementById('ingrList');
    if (ingrList.style.display !== 'none') {
        ingrList.style.display = 'none';
    }
    //show
    var dishView = document.getElementById('dishView')
    if (dishView.style.display == 'none') {
        dishView.style.display = 'block';
    }
    else {
        dishView.style.display = 'block';
    }
    var select = document.getElementById('selectDishView')
    if (select.style.display == 'none') {
        select.style.display = 'block';
    }
    else {
        select.style.display = 'block';
    }
};