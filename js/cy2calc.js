function getElm1(id) {
    return document.getElementById(id);
}

var str_zh = [
    'Cytus II计算器',
    '计算',
    '重置',
    '请输入正确的数值！',
    '您没有小P！',
    '您的小P数量为：',
    '您的已通关歌曲平均TP为',
    '开始计算以查看结果'
];

var str_en = [
    'Cytus II Calculator',
    'Clac',
    'Reset',
    'Please enter the correct value!',
    'No Black Perfect!',
    'Black Perfect: ',
    'Your cleared songs\' average TP is ',
    'Start calculation to see the result'
];

var str1, str2, str3, str4, str5;

var calc = getElm1('calc');
var reset = getElm1('reset');
var result = getElm1('result');

var lang = (navigator.language || navigator.browserLanguage).toLowerCase();
if (lang.indexOf('zh') >= 0) {
    document.title = str_zh[0];
    calc.innerHTML = str_zh[1];
    reset.innerHTML = str_zh[2];
    result.innerHTML = str_zh[7];
    str1 = str_zh[3];
    str2 = str_zh[4];
    str3 = str_zh[5];
    str4 = str_zh[6];
    str5 = str_zh[7];
} else {
    document.title = str_en[0];
    calc.innerHTML = str_en[1];
    reset.innerHTML = str_en[2];
    result.innerHTML = str_en[7];
    str1 = str_en[3];
    str2 = str_en[4];
    str3 = str_en[5];
    str4 = str_en[6];
    str5 = str_en[7];
}

function al1() {
    result.innerHTML = str1;
}

function al2() {
    result.innerHTML = str2;
}

function res1(res) {
    result.innerHTML = (str3 + res);
}

function res2(res) {
    result.innerHTML = (str4 + res + '%');
}