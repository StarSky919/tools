let regex = {
    abv: /^[ab]v?/i,
    aid: /av[0-9]{1,8}$/i,
    bvid: /[Bb][Vv][0-9A-Za-z]{10}/,
    rp: /[^0-9A-Za-z]/g
}

let abv = getElm('#abv');
let result = getElm('#result');

function check(obj) {
    setTimeout(function() {
        textRegex.replace(regex.rp, obj);
    }, 1);
}

function getType(id) {
    if (regex.aid.test(id)) {
        return 1;
    } else if (regex.bvid.test(id)) {
        return 2;
    } else {
        return 0;
    }
}

getElm('#reset').addEventListener('click', function() {
    result.innerHTML = '请输入AV或BV号';
    abv.value = '';
});

function incorrect() {
    result.innerHTML = '请输入正确的AV或BV号';
}