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

/*END: Custom Functions*/

/*START: Navigation Bar*/

let tools = [
    ['bv2av/', 'AV & BV 转换器'],
    ['cy2calc/', 'Cytus II计算器'],
    ['random/password/', '密码生成器'],
    ['color/', '颜色工具']
]
var html = '';
var url = location.href.split('/');

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

function closeMenu() {
    getElm1('checkbox').checked = false;
}

/*END: Navigation Bar*/