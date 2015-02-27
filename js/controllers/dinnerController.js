var DinnerController = function(view, model){
	view.buttonBack.onclick = function(){
		 //hide
		document.getElementById("dinnerOverviewView").style.display = 'none';
		document.getElementById("dinnerView").style.display = 'none';
		
		document.getElementById("dishView").style.display = 'block';
		document.getElementById("leftDishListView").style.display = 'block';
		document.getElementById("selectDishView").style.display = 'block';
		
		
	};
	
	view.buttonPrint.onclick = function(){
		 //hide
		document.getElementById('dinnerOverviewView').style.display = 'none';
		//show
		document.getElementById('dinnerPreparationView').style.display = 'block';
    };
};