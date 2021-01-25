let result1 = getElm1('.gr #result');
let result2 = getElm1('.atp #result');

let str = '开始计算以查看结果';

let al = {
    gr: function() {
        result1.innerHTML = '请输入正确的数值！';
    },
    atp: function() {
        result2.innerHTML = '请输入正确的数值！';
    }
}

let res = {
    gr: function(res) {
        getElm1('.gr #result').innerHTML = `您的小P数量为：${res}`;
    },
    atp: function(res) {
        getElm1('.atp #result').innerHTML = `您的已通关歌曲平均TP为${res}%`;
    }
}

/*START: Black Perfect*/

function grCalc(tp, p, g, b, m) {
    bp = 0;
    bp = Math.round(p - ((p + g + b + m) * tp - 30 * g - 70 * p) / 30);
    return bp;
}

getElm1('.gr #calc').onclick = function() {
    let stp = Number(getElm1('#stp').value);
    let perfect = Number(getElm1('#perfect').value);
    let good = Number(getElm1('#good').value);
    let bad = Number(getElm1('#bad').value);
    let miss = Number(getElm1('#miss').value);

    if (stp > 100 || stp <= 0 || perfect + good + bad + miss == 0) {
        al.gr();
        return;
    } else if (stp < 0 || perfect < 0 || good < 0 || bad < 0 || miss < 0) {
        al.gr();
        return;
    } else if (stp == 100) {
        if (good + bad + miss != 0) {
            al.gr();
            return;
        } else {
            getElm1('.gr #result') = '您没有小P！';
            return;
        }
    } else {
        let gr = grCalc(stp, perfect, good, bad, miss);
        if (gr < 0 || gr > perfect) {
            al.gr();
            return;
        } else if (gr == 0) {
            getElm1('.gr #result') = '您没有小P！';
            return;
        } else {
            res.gr(gr);
        }
    }
}

getElm1('.gr #reset').onclick = function() {
    result1.innerHTML = str;
    getElm1('#stp').value = '';
    getElm1('#perfect').value = '';
    getElm1('#good').value = '';
    getElm1('#bad').value = '';
    getElm1('#miss').value = '';
}

/*END: Black Perfect*/

/*START: Average TP*/

getElm1('.atp #calc').onclick = function() {
    let atp = Number(getElm1('#atp').value);
    let ez = Number(getElm1('#ez').value);
    let hd = Number(getElm1('#hd').value);
    let ch = Number(getElm1('#ch').value);
    let gl = Number(getElm1('#gl').value);
    let total = Number(getElm1('#total').value);

    if (atp > 100 || ez + hd + ch + gl <= 0 || ez + hd + ch + gl > total || total == 0 || (atp / 100) / ((ez + hd + ch + gl) / total) > 1) {
        al.atp();
        return;
    } else if (ez + hd + ch + gl != 0 && atp == 0) {
        al.atp();
        return;
    } else if (ez + hd + ch + gl == 0 && atp != 0) {
        al.atp();
        return;
    } else if (atp < 0 || ez < 0 || hd < 0 || ch < 0 || gl < 0) {
        al.atp();
        return;
    } else {
        let ctp = ((atp / 100) / ((ez + hd + ch + gl) / total) * 100).toFixed(2);
        res.atp(ctp);
        return;
    }
}

getElm1('.atp #reset').onclick = function() {
    result2.innerHTML = str;
    getElm1('#atp').value = '';
    getElm1('#ez').value = '';
    getElm1('#hd').value = '';
    getElm1('#ch').value = '';
    getElm1('#gl').value = '';
    getElm1('#total').value = '';
}

/*END: Average TP*/