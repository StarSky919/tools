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
    result.innerHTML = str;
    getElm1('atp').value = '';
    getElm1('ez').value = '';
    getElm1('hd').value = '';
    getElm1('ch').value = '';
    getElm1('gl').value = '';
    getElm1('total').value = '';
}