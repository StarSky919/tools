var str = '开始计算以查看结果';
var result = getElm1('result');

function al1() {
    result.innerHTML = '请输入正确的数值！';
}

function al2() {
    result.innerHTML = '您没有小P！';
}

function res1(res) {
    result.innerHTML = `您的小P数量为：${res}`;
}

function res2(res) {
    result.innerHTML = `您的已通关歌曲平均TP为${res}%`;
}