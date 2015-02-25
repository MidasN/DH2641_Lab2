var DinnerOverviewView = function(container, model){
	this.buttonBack = document.getElementById("buttonBack");
	this.buttonPrint = document.getElementById("buttonPrint");
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
	this.dinnerGuests = document.getElementById("dinnerGuests");
	 
	this.dinnerGuests.innerHTML = model.getNumberOfGuests();
	this.starterName.html(model.getFullMenu()[0].name);
	this.startercost.html(model.getDishCost(0));
	this.mainname.html(model.getFullMenu()[1].name);
	this.maincost.html(model.getDishCost(1));
	this.dessertname.html(model.getFullMenu()[2].name);
	this.dessertcost.html(model.getDishCost(2));
	this.totalCost.html(model.getTotalMenuPrice());
	
};
/*
var buttonBack = document.getElementById('buttonBack');
buttonBack.onclick = function() {
    //hide
	
    var dinnerView = document.getElementById('dinnerView');
    if (dinnerView.style.display !== 'none') {
        dinnerView.style.display = 'none';
    }
    var dinnerOverviewView = document.getElementById('dinnerOverviewView');
    if (dinnerOverviewView.style.display !== 'none') {
        dinnerOverviewView.style.display = 'none';
    }
    var dinnerPreparationView = document.getElementById('dinnerPreparationView');
    if (dinnerPreparationView.style.display !== 'none') {
        dinnerPreparationView.style.display = 'none';
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
	document.getElementById("leftDishListView").style.display = 'block';
};
*/
/*
var buttonPrint = document.getElementById('buttonPrint');

buttonPrint.onclick = function() {
    //hide
    var dinnerOverviewView = document.getElementById('dinnerOverviewView');
    if (dinnerOverviewView.style.display !== 'none') {
        dinnerOverviewView.style.display = 'none';
    }
    //show
    var dinnerPreparationView = document.getElementById('dinnerPreparationView');
    if (dinnerPreparationView.style.display == 'none') {
        dinnerPreparationView.style.display = 'block';
    }
};
*/