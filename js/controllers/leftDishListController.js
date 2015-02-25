var LeftDishListController = function(view, model){
	
	view.confirmBtn.onclick = function() {
		//hide Views
		document.getElementById('dishView').style.display = 'none';
		document.getElementById('selectDishView').style.display = 'none';
		document.getElementById('leftDishListView').style.display = 'none';
		
		//Show the new ones
		document.getElementById('dinnerView').style.display = 'block';
		document.getElementById('dinnerOverviewView').style.display = 'block';
		
		//modify model
		model.setNumberOfGuests(view.leftNumGuests.value);
	};
	
	
};