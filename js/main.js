/*────Cutom Functions────*/

function getElm1(id) {
    return document.getElementById(id);
}

function getElm2(query) {
    return document.querySelector(query);
}

function getElm3(query) {
    return document.querySelectorAll(query);
}

/*────Fade In────*/

/*
window.onload = function() {
    setTimeout(function() {
        getElm2('.row').classList.add('fade-in');
    }, 0);
}

//────────

var href = location.href;

var links = [
    'http://localhost:7700/index.html',
    'https://starsky919.github.io/tools/index.html',
    'https://starsky919.gitee.io/tools/index.html'
];

if (href != links[0] && href != links[1] && href != links[2]) {
    setTimeout(function() {
        getElm2('.row').classList.add('fade-in');
    }, 0);
} else {
    getElm2('.row').style.transition = 'none';
    getElm2('.row').classList.add('fade-in');
}*/