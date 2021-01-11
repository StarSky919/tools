function check() {
    setTimeout('var num = getElm1("length");if (Number(num.value) > 16) {num.value = 16;}', 1)
}

var str = {
    uc: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lc: "abcdefghijklmnopqrstuvwxyz",
    num: '0123456789',
    mark: '!?,.;:&#@%$+-*_='
}

function generate() {
    var length = Number(getElm1('length').value);
    var num = getElm1('num').checked;
    var uc = getElm1('uc').checked;
    var lc = getElm1('lc').checked;
    var mark = getElm1('mark').checked;
    var password = '';
    while (password.length < length) {
        var rdm1 = Math.ceil(Math.random() * 4);
        var rdm2 = function(obj) {
            return Math.ceil(obj.length * Math.random() * Math.random()) - 1;
        }
        if (num || uc || lc || mark) {
            switch (rdm1) {
                case 1:
                    if (uc) {
                        password += str.uc.charAt(rdm2(str.uc));
                    }
                    break;
                case 2:
                    if (lc) {
                        password += str.lc.charAt(rdm2(str.lc));
                    }
                    break;
                case 3:
                    if (num) {
                        password += str.num.charAt(rdm2(str.num));
                    }
                    break;
                case 4:
                    if (mark) {
                        password += str.mark.charAt(rdm2(str.mark));
                    }
                    break;
            }
        } else {
            break;
        }
    }
    if (password.trim()) {
        getElm1('result').innerHTML = password;
    } else {
        getElm1('result').innerHTML = '请设置选项';
    }
}