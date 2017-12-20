document.getElementById('slid1-about-us').style.display = 'flex';
document.getElementById('radio1-about-us').style.background = 'rgb(113, 246, 235)'
for (var i = 1; i < 4; i++) {
    document.querySelectorAll('.slid-about-us')[i].style.display = 'none';
}
document.getElementById('radio1-about-us').onclick = function () {
    this.style.background = 'rgb(113, 246, 235)';
    var j = 1;
    document.getElementById('slid' + j + '-about-us').style.display = 'flex';
    for (var i = 1; i < 5; i++) {
        if (i != j) {
            document.getElementById('slid' + i + '-about-us').style.display = 'none';
            document.getElementById('radio' + i + '-about-us').style.background = 'rgb(208, 208, 208)';
        }
    }
};
document.getElementById('radio2-about-us').onclick = function () {
    this.style.background = 'rgb(113, 246, 235)';
    var j = 2;
    document.getElementById('slid' + j + '-about-us').style.display = 'flex';
    for (var i = 1; i < 5; i++) {
        if (i != j) {
            document.getElementById('slid' + i + '-about-us').style.display = 'none';
            document.getElementById('radio' + i + '-about-us').style.background = 'rgb(208, 208, 208)';
        }
    }
};
document.getElementById('radio3-about-us').onclick = function () {
    this.style.background = 'rgb(113, 246, 235)';
    var j = 3;
    document.getElementById('slid' + j + '-about-us').style.display = 'flex';
    for (var i = 1; i < 5; i++) {
        if (i != j) {
            document.getElementById('slid' + i + '-about-us').style.display = 'none';
            document.getElementById('radio' + i + '-about-us').style.background = 'rgb(208, 208, 208)';
        }
    }
};
document.getElementById('radio4-about-us').onclick = function () {
    this.style.background = 'rgb(113, 246, 235)';
    var j = 4;
    document.getElementById('slid' + j + '-about-us').style.display = 'flex';
    for (var i = 1; i < 5; i++) {
        if (i != j) {
            document.getElementById('slid' + i + '-about-us').style.display = 'none';
            document.getElementById('radio' + i + '-about-us').style.background = 'rgb(208, 208, 208)';
        }
    }
};