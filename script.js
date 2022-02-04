

let searchBtn = document.getElementById('search');
let searchplace = document.getElementById('email');

searchBtn.addEventListener('click',function(){
	if (searchplace.style.display == 'block') {
		searchplace.style.display = 'none';
	}else {
		searchplace.style.display = 'block';
	}
});