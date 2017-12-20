for (var i = 0; i < 6; i++) {
    document.getElementsByTagName('picture')[i].style.background = 'url(images/banner' + (1 + parseInt(i)) + '.jpg)';
    document.getElementsByTagName('picture')[i].style.backgroundSize = 'cover';
    document.getElementsByTagName('picture')[i].style.backgroundRepeat = 'no-repeat';
    document.getElementsByTagName('picture')[i].style.backgroundPosition = 'center';
}