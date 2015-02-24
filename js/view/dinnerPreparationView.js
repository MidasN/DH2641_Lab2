var DinnerPreparationView = function(view, model){
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
};

var button = document.getElementById('buttonBack');

button.onclick = function() {
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
};