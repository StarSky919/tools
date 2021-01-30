/*START: Global Settings*/

function getElm(query) {
    return document.querySelector(query);
}

function getElmAll(query) {
    return document.querySelectorAll(query);
}

function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    let expires = 'expires=' + date.toGMTString();
    document.cookie = `${name}=${value};${expires};path=/`;
}

function getCookie(cname) {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
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
    script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.body.appendChild(script);
    script.onload = function() {
        func();
        document.body.removeChild(script);
    }
}

function copy(obj) {
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(obj);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
}

let textRegex = {
    replace: function(regex, obj) {
        if (regex.test(obj.value)) {
            obj.value = obj.value.replace(regex, '');
        }
    }
}

let popup = {
    build: function(title, msg, func) {
        getElm('#title').innerHTML = title;
        getElm('#message').innerHTML = msg;
        getElm('#confirm').onclick = function() {
            func();
        }
        getElm('#cancel').onclick = function() {
            popup.close();
        }
        window.onclick = function(event) {
            switch (event.target) {
                case getElm('.popup'):
                    popup.close();
                    break;
            }
        }
    },
    show: function() {
        getElm('.popup').style.display = 'flex';
    },
    close: function() {
        getElm('.popup').style.display = 'none';
    }
}

/*END: Global Settings*/

if (!/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    document.body.innerHTML = '请使用Android或iOS设备访问此页面';
}

/*START: Navigation Bar*/

let tools = [
    ['bilibili/bv2av/', 'AV & BV 转换器'],
    ['bilibili/cover/', 'B站视频封面提取'],
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
getElm('.nav .items').innerHTML = html;

function closeMenu() {
    getElm('#checkbox').checked = false;
}

getElm('.main').onclick = function(event) {
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
            theme.mainColor.set(getCookie('mainColor'));
        }
    },
    navBar: {
        toggle: function() {
            let regex = /cy2calc/;
            if (getCookie('colorNav') == 'on') {
                getElm('.nav').classList.add('color-follow');
                if (regex.test(location.href)) {
                    getElm('.footer').classList.add('color-follow');
                }
            } else {
                getElm('.nav').classList.remove('color-follow');
                if (regex.test(location.href)) {
                    getElm('.footer').classList.remove('color-follow');
                }
            }
        }
    },
    darkMode: {
        toggle: function() {
            //const isDM = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (getCookie('darkMode') == 'on') {
                getElm('body').classList.add('dark-mode');
            } else {
                getElm('body').classList.remove('dark-mode');
            }
        }
    }
}


/*END: Theme Settings*/

/*START: Window Events*/
theme.mainColor.toggle();
theme.navBar.toggle();
theme.darkMode.toggle();
/*END: Window Events*/