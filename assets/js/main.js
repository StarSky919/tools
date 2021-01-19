/*START: Cutom Functions*/

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
    var expires = "expires=" + date.toGMTString();
    document.cookie = `${name}=${value};${expires};path=/`;
}

function getCookie(cname) {
    var name = cname + "=";
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
    return "";
}

function time() {
    return new Date().getHours() >= 22 || new Date().getHours() < 6;
}

/*END: Custom Functions*/

/*START: Navigation Bar*/

let tools = [
    ['bv2av/', 'AV & BV 转换器'],
    ['cy2calc/', 'Cytus II计算器'],
    ['random/password/', '密码生成器'],
    ['color/', '颜色工具'],
    ['settings/', '网站设置']
]
var html = '';
var url = location.href.split('/');

/*Compatible*/
var int;

if (url[2] == 'localhost:7700') {
    int = 4;
} else {
    int = 5;
}

for (x in tools) {
    var a = tools;
    if (url.length > int) {
        for (y in url) {
            if (y >= int - 1) {
                a[x][0] = `../${a[x][0]}`;
            }
        }
        a[x][0] = `tools/${a[x][0]}`;
    }
    html += `<a href=\"${a[x][0]}\">${a[x][1]}</a>`;
}

getElm2('.nav .items').innerHTML = html;

window.onbeforeunload = function() {
    closeMenu();
}

getElm2('.row').onclick = function() {
    closeMenu();
}

function closeMenu() {
    getElm1('checkbox').checked = false;
}

/*END: Navigation Bar*/

/*START: Dark Mode*/

let darkMode = {
    toggle: function() {
        if (getCookie('darkMode') == 'on') {
            getElm2('body').classList.add('dark-mode');
        } else {
            getElm2('body').classList.remove('dark-mode');
        }
    },
    check: function() {
        if (getCookie('autoDM') == 'on') {
            if (time()) {
                setCookie('darkMode', 'on', 365);
            } else {
                setCookie('darkMode', 'off', 365);
            }
        }
    }
}

darkMode.check();
darkMode.toggle();

/*END: Dark Mode*/