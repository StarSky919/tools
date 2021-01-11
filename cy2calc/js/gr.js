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
    result.innerHTML = str;
    getElm1('stp').value = '';
    getElm1('perfect').value = '';
    getElm1('good').value = '';
    getElm1('bad').value = '';
    getElm1('miss').value = '';
}