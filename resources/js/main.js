'use strict'

/*START: Global Settings*/

function getElm1(query) {
    return document.querySelector(query);
}

function getElm2(query) {
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

function time() {
    return new Date().getHours() >= 22 || new Date().getHours() < 6;
}

/*Cross-domain Request*/
function cdr(url, func) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.body.appendChild(script);
    script.onload = function() {
        func();
        document.body.removeChild(script);
    }
}

var textRegex = {
    replace: function(regex, obj) {
        if (regex.test(obj.value)) {
            obj.value = obj.value.replace(regex, '');
        }
    }
}

let popup = {
    build: function(title, msg, func) {
        getElm1('#title').innerHTML = title;
        getElm1('#message').innerHTML = msg;
        getElm1('#confirm').onclick = function() {
            func();
            popup.close();
        }
        getElm1('#cancel').onclick = function() {
            popup.close();
        }
        window.onclick = function(event) {
            switch (event.target) {
                case getElm1('.popup'):
                    popup.close();
                    break;
            }
        }
    },
    show: function() {
        getElm1('.popup').style.display = 'flex';
    },
    close: function() {
        getElm1('.popup').style.display = 'none';
    }
}

/*END: Global Settings*/

/*START: Navigation Bar*/

let tools = [
    ['bilibili/bv2av/', 'AV & BV 转换器'],
    ['bilibili/cover', 'B站视频封面提取'],
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
getElm1('.nav .items').innerHTML = html;

function closeMenu() {
    getElm1('#checkbox').checked = false;
}

getElm1('.row').onclick = function(event) {
    closeMenu();
}

window.onbeforeunload = function() {
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
                getElm1('.nav').classList.add('transparent');
                if (regex.test(location.href)) {
                    getElm1('.footer').classList.add('transparent');
                }
            } else {
                getElm1('.nav').classList.remove('transparent');
                if (regex.test(location.href)) {
                    getElm1('.footer').classList.remove('transparent');
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
            getElm1('body').classList.add('dark-mode');
        } else {
            getElm1('body').classList.remove('dark-mode');
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