document.getElementById('slid1-what-they-says').style.display = 'flex';
document.getElementById('radio1-what-they-says').style.background = 'rgb(113, 246, 235)'
radio = 1;
for (var i = 2; i < 5; i++) {
    document.getElementById('slid' + i + '-what-they-says').style.display = 'none';
}
for (var i = 1; i < 5; i++) {
    document.getElementById('photo' + i + '-slid').style.background = 'url(images/photo' + parseInt(i) + '.jpg)';
    document.getElementById('photo' + i + '-slid').style.backgroundPosition = 'center';
    document.getElementById('photo' + i + '-slid').style.backgroundSize = 'cover';
    document.getElementById('photo' + i + '-slid').style.backgroundRepeat = 'no-repeat';
}

document.getElementById('radio1-what-they-says').onclick = function () {
    this.style.background = 'rgb(113, 246, 235)';
    var j = 1;
    document.getElementById('slid' + j + '-what-they-says').style.display = 'flex';
    for (var i = 1; i < 5; i++) {
        if (i != j) {
            document.getElementById('slid' + i + '-what-they-says').style.display = 'none';
            document.getElementById('radio' + i + '-what-they-says').style.background = 'rgb(208, 208, 208)';
        }
    }
    radio = 1;
};
document.getElementById('radio2-what-they-says').onclick = function () {
    this.style.background = 'rgb(113, 246, 235)';
    var j = 2;
    document.getElementById('slid' + j + '-what-they-says').style.display = 'flex';
    for (var i = 1; i < 5; i++) {
        if (i != j) {
            document.getElementById('slid' + i + '-what-they-says').style.display = 'none';
            document.getElementById('radio' + i + '-what-they-says').style.background = 'rgb(208, 208, 208)';
        }
    }
    radio = 2;
};
document.getElementById('radio3-what-they-says').onclick = function () {
    this.style.background = 'rgb(113, 246, 235)';
    var j = 3;
    document.getElementById('slid' + j + '-what-they-says').style.display = 'flex';
    for (var i = 1; i < 5; i++) {
        if (i != j) {
            document.getElementById('slid' + i + '-what-they-says').style.display = 'none';
            document.getElementById('radio' + i + '-what-they-says').style.background = 'rgb(208, 208, 208)';
        }
    }
    radio = 3;
};
document.getElementById('radio4-what-they-says').onclick = function () {
    this.style.background = 'rgb(113, 246, 235)';
    var j = 4;
    document.getElementById('slid' + j + '-what-they-says').style.display = 'flex';
    for (var i = 1; i < 5; i++) {
        if (i != j) {
            document.getElementById('slid' + i + '-what-they-says').style.display = 'none';
            document.getElementById('radio' + i + '-what-they-says').style.background = 'rgb(208, 208, 208)';
        }
    }
    radio = 4;
};


//
//function NextLeft(){
//    radio = radio - 1;
//    if(radio == 0){
//    radio = 4;
//    };
//    document.getElementById('radio' + radio + '-what-they-says').style.background = 'rgb(113, 246, 235)';
//    document.getElementById('slid' + radio + '-what-they-says').style.display = 'flex';
//    for (var j = 1; j < 5; i++) {
//        if (j != radio) {
//            document.getElementById('slid' + j + '-what-they-says').style.display = 'none';
//            document.getElementById('radio' + j + '-what-they-says').style.background = 'rgb(208, 208, 208)';
//        }
//    }
//}





//
//function NextRight(){
//    radio = radio + 1;
//    if(radio == 5){
//    radio = 1;
//    };
//    document.getElementById('radio' + radio + '-what-they-says').style.background = 'rgb(113, 246, 235)';
//    document.getElementById('slid' + radio + '-what-they-says').style.display = 'flex';
//    for (var j = 1; j < 5; i++) {
//        if (j != radio) {
//            document.getElementById('slid' + j + '-what-they-says').style.display = 'none';
//            document.getElementById('radio' + j + '-what-they-says').style.background = 'rgb(208, 208, 208)';
//        }
//    }
//}
