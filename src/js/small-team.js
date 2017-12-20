for (var i = 0; i < 6; i++) {
    document.querySelectorAll('.small-team-blok')[i].style.background = 'url(images/photo' + (1 + parseInt(i)) + '.jpg)';
    document.querySelectorAll('.small-team-blok')[i].style.backgroundSize = 'cover';
    document.querySelectorAll('.small-team-blok')[i].style.backgroundRepeat = 'no-repeat';
    document.querySelectorAll('.small-team-blok')[i].style.backgroundPosition = 'center';
}

function f1(value){
	 document.querySelectorAll('.team-hover')[value].style.display = 'block';
};
    
function f2(value){
	 document.querySelectorAll('.team-hover')[value].style.display = 'none';
};