$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	model.setNumberOfGuests(2);
	model.addDishToMenu(1);
	model.addDishToMenu(100);
	model.addDishToMenu(201);
	
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"), model);
	var leftDishList = new LeftDishList($("#leftDishList"), model);
	var dishSpecs = new DishSpecs($("#dishSpecs"), model, 100);
	var dishOverview = new DishOverview($("#overview"), model);

});