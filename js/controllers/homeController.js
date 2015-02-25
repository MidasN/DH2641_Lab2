var HomeController = function(view, model){
	
	view.buttonCreate.click( function(e) {
		document.getElementById('homeView').style.display = 'none';
		
		document.getElementById('bgdiv').className = "";
		document.getElementById('bgdiv').className = "container-fluid";
		
		document.getElementById('dishView').style.display = 'block';
		document.getElementById('leftDishListView').style.display = 'block';
		document.getElementById('selectDishView').style.display = 'block';
	});
};