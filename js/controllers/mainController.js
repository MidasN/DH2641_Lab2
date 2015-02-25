var MainController = function(){
	var views = [];
	
	this.addView = function(view){
		views.push(view);
	}

	this.screen1 = function(){
		views[0].container.hide();
		document.getElementById('bgdiv').className = "";
		document.getElementById('bgdiv').className = "container-fluid";
		


		var dishView = document.getElementById('dishView')
		dishView.style.display = 'block';
		
		var select = document.getElementById('selectDishView')
		select.style.display = 'block';
	}

};