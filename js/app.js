$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	model.setNumberOfGuests(1);
	model.addDishToMenu(-1);
	model.addDishToMenu(-2);
	model.addDishToMenu(-3);
	
	//And create the needed controllers and views
	/*
	var exampleView = new ExampleView($("#exampleView"), model);
	var leftDishList = new LeftDishList($("#leftDishList"), model);
	var dishSpecs = new DishSpecs($("#dishSpecs"), model, 100);
	var dishOverview = new DishOverview($("#overview"), model);
	var preparationView = new PreparationView($("#preparationView"), model);
	*/
	
	//var mainController = new MainController();
	
	var homeView = new HomeView($("#homeView"), model);
	var homeController = new HomeController(homeView, model);
	
	var leftDishListView = new LeftDishListView($("#leftListDishView"), model);
	var leftDishListController = new LeftDishListController(leftDishListView, model);
	
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var selectDishController = new SelectDishController(selectDishView, model);
	
	var dishInfoView = new DishInfoView($("#dishInfoView"), model);
	var dishInfoController = new DishInfoController(dishInfoView, model);
	
	var dinnerOverviewView = new DinnerOverviewView($("#dinnerOverviewView"), model);
	var dinnerViewController = new DinnerViewController(dinnerOverviewView, model);

	
});