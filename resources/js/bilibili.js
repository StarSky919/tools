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

let password = "fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF";
var array = {};
for (let i = 0; i < 58; i++) {
    array[password[i]] = i;
}
let enable_code = [9, 8, 1, 6, 2, 4];
let password1 = 177451812;
let password2 = 8728348608;

function convert(id) {
    if (!regex.abv.test(id)) return '请输入正确的AV或BV号';
    let abid = (id.replace(/av/i, "") ^ password1) + password2;
    let array2 = {};
    for (let i = 0; i < 6; i++) {
        array2[enable_code[i]] = password[Math.floor(abid / 58 ** i) % 58];
    }
    let out_bv = 1 + array2[1] + array2[2] + 4 + array2[4] + 1 + array2[6] + 7 + array2[8] + array2[9];
    let base58 = 0;
    for (let i = 0; i < 6; i++) {
        base58 += array[out_bv[enable_code[i]]] * 58 ** i;
    }
    let verify = (base58 - password2) ^ password1;
    if (id.match(RegExp(verify, "i")) && verify > 0) {
        return `BV${out_bv}`;
    } else {
        abid = id.replace(/bv/i, "");
        base58 = 0;
        for (let i = 0; i < 6; i++) {
            base58 += array[abid[enable_code[i]]] * 58 ** i;
        }
        verify = (base58 - password2) ^ password1;
        abid = (verify ^ password1) + password2;
        array2 = {};
        for (let i = 0; i < 6; i++) {
            array2[enable_code[i]] = password[Math.floor(abid / 58 ** i) % 58];
        }
        out_bv = `BV1${array2[1]}${array2[2]}${4}${array2[4]}${1}${array2[6]}${7}${array2[8]}${array2[9]}`;
        if (id.match(RegExp(out_bv, "i")) && verify > 0) {
            return `AV${verify}`;
        } else {
            return '请输入正确的AV或BV号';
        }
    }
}