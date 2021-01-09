var str_atp_zh = [
    '首页',
    '小P计算',
    'ATP计算',
    '输入ATP',
    '输入EASY通关数',
    '输入HARD通关数',
    '输入CHAOS通关数',
    '输入GLITCH通关数',
    '输入谱面总数'
]

var str_atp_en = [
    'Home',
    'BP Calc',
    'Cleared songs\' ATP Calc',
    'Enter your ATP',
    'Number of cleared EASY charts',
    'Number of cleared HARD charts',
    'Number of cleared CHAOS charts',
    'Number of cleared GLITCH charts',
    'Total number of charts'
]

var lang = (navigator.language || navigator.browserLanguage).toLowerCase();
if (lang.indexOf('zh') >= 0) {
    getElm1('home').innerHTML = str_atp_zh[0];
    getElm1('stp').innerHTML = str_atp_zh[1];
    getElm1('title').innerHTML = str_atp_zh[2];
    getElm1('atp').placeholder = str_atp_zh[3];
    getElm1('ez').placeholder = str_atp_zh[4];
    getElm1('hd').placeholder = str_atp_zh[5];
    getElm1('ch').placeholder = str_atp_zh[6];
    getElm1('gl').placeholder = str_atp_zh[7];
    getElm1('total').placeholder = str_atp_zh[8];
} else {
    getElm1('home').innerHTML = str_atp_en[0];
    getElm1('stp').innerHTML = str_atp_en[1];
    getElm1('title').innerHTML = str_atp_en[2];
    getElm1('atp').placeholder = str_atp_en[3];
    getElm1('ez').placeholder = str_atp_en[4];
    getElm1('hd').placeholder = str_atp_en[5];
    getElm1('ch').placeholder = str_atp_en[6];
    getElm1('gl').placeholder = str_atp_en[7];
    getElm1('total').placeholder = str_atp_en[8];
}

var atp, ez, hd, ch, gl, total;

function calc() {
    atp = Number(getElm1('atp').value);
    ez = Number(getElm1('ez').value);
    hd = Number(getElm1('hd').value);
    ch = Number(getElm1('ch').value);
    gl = Number(getElm1('gl').value);
    total = Number(getElm1('total').value);

    if (atp > 100 || ez + hd + ch + gl <= 0 || ez + hd + ch + gl > total || total == 0 || (atp / 100) / ((ez + hd + ch + gl) / total) > 1) {
        al1();
        return;
    } else if (ez + hd + ch + gl != 0 && atp == 0) {
        al1();
        return;
    } else if (ez + hd + ch + gl == 0 && atp != 0) {
        al1();
        return;
    } else if (atp < 0 || ez < 0 || hd < 0 || ch < 0 || gl < 0) {
        al1();
        return;
    } else {
        var res = ((atp / 100) / ((ez + hd + ch + gl) / total) * 100).toFixed(2);
        res2(res);
        return;
    }
}

function reset() {
    result.innerHTML = str5;
    getElm1('atp').value = '';
    getElm1('ez').value = '';
    getElm1('hd').value = '';
    getElm1('ch').value = '';
    getElm1('gl').value = '';
    getElm1('total').value = '';
}