var str_gr_zh = [
    '首页',
    'ATP计算',
    '小P数量计算',
    '输入歌曲TP',
    '输入Perfect数',
    '输入Good数',
    '输入Bad数',
    '输入Miss数'
]

var str_gr_en = [
    'Home',
    'ATP Calc',
    'Black Perfect Calc',
    'Enter your TP',
    'Number of Perfect',
    'Number of Good',
    'Number of Bad',
    'Number of Miss',
]

var lang = (navigator.language || navigator.browserLanguage).toLowerCase();
if (lang.indexOf('zh') >= 0) {
    getElm1('home').innerHTML = str_gr_zh[0];
    getElm1('atp').innerHTML = str_gr_zh[1];
    getElm1('title').innerHTML = str_gr_zh[2];
    getElm1('stp').placeholder = str_gr_zh[3];
    getElm1('perfect').placeholder = str_gr_zh[4];
    getElm1('good').placeholder = str_gr_zh[5];
    getElm1('bad').placeholder = str_gr_zh[6];
    getElm1('miss').placeholder = str_gr_zh[7];
} else {
    getElm1('home').innerHTML = str_gr_en[0];
    getElm1('atp').innerHTML = str_gr_en[1];
    getElm1('title').innerHTML = str_gr_en[2];
    getElm1('stp').placeholder = str_gr_en[3];
    getElm1('perfect').placeholder = str_gr_en[4];
    getElm1('good').placeholder = str_gr_en[5];
    getElm1('bad').placeholder = str_gr_en[6];
    getElm1('miss').placeholder = str_gr_en[7];
}

var stp, perfect, good, bad, miss;

function calc() {
    stp = Number(getElm1('stp').value);
    perfect = Number(getElm1('perfect').value);
    good = Number(getElm1('good').value);
    bad = Number(getElm1('bad').value);
    miss = Number(getElm1('miss').value);

    if (stp > 100 || stp <= 0 || perfect + good + bad + miss == 0) {
        al1();
        return;
    } else if (stp < 0 || perfect < 0 || good < 0 || bad < 0 || miss < 0) {
        al1();
        return;
    } else if (stp == 100) {
        if (good + bad + miss != 0) {
            al1();
            return;
        } else {
            al2();
            return;
        }
    } else {
        var res = grCalc(stp, perfect, good, bad, miss);
        if (res < 0 || res > perfect) {
            al1();
            return;
        } else if (res == 0) {
            al2();
            return;
        } else {
            res1(res);
        }
    }
}

function grCalc(tp, p, g, b, m) {
    gr = 0;
    gr = Math.round(p - ((p + g + b + m) * tp - 30 * g - 70 * p) / 30);
    return gr;
}

function reset() {
    result.innerHTML = str5;
    getElm1('stp').value = '';
    getElm1('perfect').value = '';
    getElm1('good').value = '';
    getElm1('bad').value = '';
    getElm1('miss').value = '';
}