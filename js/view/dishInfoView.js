var DishInfoView = function(container, model){
	this.container = container;

	this.buttonInfoBack = document.getElementById('buttonInfoBack');
	this.confirmDish = document.getElementById("confirmDish");
	
	this.dishName = document.getElementById("dishName");
	this.dishImg = document.getElementById("dishImg");
	this.dishDescr = document.getElementById("dishDescr");
	this.numberOfGuests = document.getElementById("numberOfGuests");
	this.ingredientTable = container.find("ingredientTable");
	this.dishCost = document.getElementById("dishCost");
	
	
	function loadDishInfo(){
		dishName.innerHTML = model.getDish(model.getFocusedId()).name;
		dishImg.innerHTML = model.getDish(model.getFocusedId()).image;
		dishDescr.innerHTML = model.getDish(model.getFocusedId()).description;
		numberOfGuests.innerHTML = model.getNumberOfGuests();
		dishCost.innerHTML = model.getDishCost2(model.getFocusedId());
		
		while (ingredientTable.rows.length > 0 ){		
			ingredientTable.deleteRow(0);
		}
		
		for(i=0; i < model.getDish(model.getFocusedId()).ingredients.length ; i++){
			var row = ingredientTable.insertRow(-1);
			var cell0 = row.insertCell(0);
			var cell1 = row.insertCell(1);
			var cell2 = row.insertCell(2);
		 
			cell0.innerHTML = model.getDish(model.getFocusedId()).ingredients[i].quantity;
			cell1.innerHTML = model.getDish(model.getFocusedId()).ingredients[i].name;
			cell2.innerHTML = model.getDish(model.getFocusedId()).ingredients[i].price;
		}	
		
	};
	
	loadDishInfo();
	
	
	this.update = function(){
		loadDishInfo();
	}
	
	model.addObserver(this);
};


/*
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
	document.getElementById('leftDishListView').style.display = 'block';
    var select = document.getElementById('selectDishView')
    if (select.style.display == 'none') {
        select.style.display = 'block';
    }
    else {
        select.style.display = 'block';
    }
};
*/