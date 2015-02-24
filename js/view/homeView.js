var buttonCreate = document.getElementById('buttonCreate');

buttonCreate.onclick = function() {
    var home = document.getElementById('homeView');
    if (home.style.display !== 'none') {
        home.style.display = 'none';
    }
    else {
        home.style.display = 'block';
    }
	
	document.getElementById('bgdiv').className = "";
	document.getElementById('bgdiv').className = "container-fluid";
    
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