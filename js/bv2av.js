'use strict'

const result = document.getElementById('result');
const ab = document.getElementById('ab');

const password = "fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF";
var array = {};
for (let i = 0; i < 58; i++) {
    array[password[i]] = i;
}
const enable_code = [9, 8, 1, 6, 2, 4];
const password1 = 177451812;
const password2 = 8728348608;

function convert() {
    let input_value = ab.value;
    if (input_value) {
        let abv = (input_value.replace(/av/i, "") ^ password1) + password2;
        let array2 = {};
        for (let i = 0; i < 6; i++) {
            array2[enable_code[i]] = password[Math.floor(abv / 58 ** i) % 58];
        }
        let out_bv = 1 + array2[1] + array2[2] + 4 + array2[4] + 1 + array2[6] + 7 + array2[8] + array2[9];
        let base58 = 0;
        for (let i = 0; i < 6; i++) {
            base58 += array[out_bv[enable_code[i]]] * 58 ** i;
        }
        let verify = (base58 - password2) ^ password1;
        if (input_value.match(RegExp(verify, "i")) && verify > 0) {
            result.innerHTML = `BV${out_bv}`;
        } else {
            abv = input_value.replace(/bv/i, "");
            base58 = 0;
            for (let i = 0; i < 6; i++) {
                base58 += array[abv[enable_code[i]]] * 58 ** i;
            }
            verify = (base58 - password2) ^ password1;
            abv = (verify ^ password1) + password2;
            array2 = {};
            for (let i = 0; i < 6; i++) {
                array2[enable_code[i]] = password[Math.floor(abv / 58 ** i) % 58];
            }
            out_bv = `BV1${array2[1]}${array2[2]}${4}${array2[4]}${1}${array2[6]}${7}${array2[8]}${array2[9]}`;
            if (input_value.match(RegExp(out_bv, "i")) && verify > 0) {
                result.innerHTML = `AV${verify}`;
            } else {
                result.innerHTML = '请输入正确的AV或BV号';
            }
        }
    } else {
        result.innerHTML = '请输入AV或BV号';
    }
}

function reset() {
    result.innerHTML = '输入AV或BV号开始转换';
    ab.value = '';
}