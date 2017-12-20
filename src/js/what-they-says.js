document.getElementById('slid1-what-they-says').style.display = 'flex';
document.getElementById('radio1-what-they-says').style.background = 'rgb(113, 246, 235)'
for (var i = 1; i < 4; i++) {
    document.querySelectorAll('.slid-what-they-says')[i].style.display = 'none';
}


//document.getElementById('radio1-what-they-says').onclick = function () {
//    this.style.background = 'rgb(113, 246, 235)';
//    var j = 1;
//    document.getElementById('slid' + j + '-what-they-says').style.display = 'flex';
//    for (var i = 1; i < 5; i++) {
//        if (i != j) {
//            document.getElementById('slid' + i + '-what-they-says').style.display = 'none';
//            document.getElementById('radio' + i + '-what-they-says').style.background = 'rgb(208, 208, 208)';
//        }
//    }
//};
//document.getElementById('radio2-what-they-says').onclick = function () {
//    this.style.background = 'rgb(113, 246, 235)';
//    var j = 2;
//    document.getElementById('slid' + j + '-what-they-says').style.display = 'flex';
//    for (var i = 1; i < 5; i++) {
//        if (i != j) {
//            document.getElementById('slid' + i + '-what-they-says').style.display = 'none';
//            document.getElementById('radio' + i + '-what-they-says').style.background = 'rgb(208, 208, 208)';
//        }
//    }
//};
//document.getElementById('radio3-what-they-says').onclick = function () {
//    this.style.background = 'rgb(113, 246, 235)';
//    var j = 3;
//    document.getElementById('slid' + j + '-what-they-says').style.display = 'flex';
//    for (var i = 1; i < 5; i++) {
//        if (i != j) {
//            document.getElementById('slid' + i + '-what-they-says').style.display = 'none';
//            document.getElementById('radio' + i + '-what-they-says').style.background = 'rgb(208, 208, 208)';
//        }
//    }
//};
//document.getElementById('radio4-what-they-says').onclick = function () {
//    this.style.background = 'rgb(113, 246, 235)';
//    var j = 4;
//    document.getElementById('slid' + j + '-what-they-says').style.display = 'flex';
//    for (var i = 1; i < 5; i++) {
//        if (i != j) {
//            document.getElementById('slid' + i + '-what-they-says').style.display = 'none';
//            document.getElementById('radio' + i + '-what-they-says').style.background = 'rgb(208, 208, 208)';
//        }
//    }
//};