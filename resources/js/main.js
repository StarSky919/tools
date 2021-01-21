'use strict'

/*START: Global Settings*/

function getElm1(id) {
    return document.getElementById(id);
}

function getElm2(query) {
    return document.querySelector(query);
}

function getElm3(query) {
    return document.querySelectorAll(query);
}

function setCookie(name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = 'expires=' + date.toGMTString();
    document.cookie = `${name}=${value};${expires};path=/`;
}

function getCookie(cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

function fileRequest(path, func) {
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', path, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            func(this);
        }
    };
}

function time() {
    return new Date().getHours() >= 22 || new Date().getHours() < 6;
}

var textRegex = {
    replace: function(regex, obj) {
        if (regex.test(obj.value)) {
            obj.value = obj.value.replace(regex, '');
        }
    }
}

/*END: Global Settings*/

/*START: Navigation Bar*/

let tools = [
    ['bv2av/', 'AV & BV 转换器'],
    ['cy2calc/', 'Cytus II计算器'],
    ['random/password/', '密码生成器'],
    ['color/', '颜色工具'],
    ['settings/', '网站设置']
]
let url = location.href.split('/');
var html = '';

//Compatible
var int = 5;
if (url[2] == 'localhost:7700') {
    int = 4;
}

for (let x in tools) {
    var a = tools;
    if (url.length > int) {
        for (let y in url) {
            if (y >= int - 1) {
                a[x][0] = `../${a[x][0]}`;
            }
        }
        a[x][0] = `tools/${a[x][0]}`;
    }
    html += `<a href="${a[x][0]}" style="--i: ${x};">${a[x][1]}</a>`;
}
getElm2('.nav .items').innerHTML = html;

function closeMenu() {
    getElm1('checkbox').checked = false;
}

window.onbeforeunload = function() {
    closeMenu();
}

getElm2('.row').onclick = function() {
    closeMenu();
}

/*END: Navigation Bar*/

/*START: Theme Settings*/

let theme = {
    mainColor: {
        set: function(color) {
            document.documentElement.style.setProperty('--main-color', color);
        },
        toggle: function() {
            switch (getCookie('mainColor')) {
                case '#9898FF':
                    document.documentElement.style.setProperty('--main-color', '#9898FF');
                    break;
                case '#FEA29F':
                    document.documentElement.style.setProperty('--main-color', '#FEA29F');
                    break;
            }
        }
    },
    navBar: {
        toggle: function() {
            var regex = /cy2calc/g;
            if (getCookie('transparentNav') == 'on') {
                getElm2('.nav').classList.add('transparent');
                if (regex.test(location.href)) {
                    getElm2('.footer').classList.add('transparent');
                }
            } else {
                getElm2('.nav').classList.remove('transparent');
                if (regex.test(location.href)) {
                    getElm2('.footer').classList.remove('transparent');
                }
            }
        }
    }
}

/*START: Dark Mode*/

//const isDM = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

let darkMode = {
    toggle: function() {
        if (getCookie('darkMode') == 'on') {
            getElm2('body').classList.add('dark-mode');
        } else {
            getElm2('body').classList.remove('dark-mode');
        }
    }
}

/*END: Dark Mode*/

/*END: Theme Settings*/

/*START: Window Events*/
theme.mainColor.toggle();
theme.navBar.toggle();
darkMode.toggle();
/*END: Window Events*/