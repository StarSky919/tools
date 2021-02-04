let regex = {
    abcv: /^[abc]v?/i,
    au: /^au?/i,
    aid: /av[0-9]{1,8}$/i,
    bvid: /[Bb][Vv][0-9A-Za-z]{10}/,
    cid: /cv[0-9]{1,8}$/i,
    auid: /au[0-9]{1,8}$/i,
    rp: /[^0-9A-Za-z]/g
}

let num = getElm('#number');
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
    } else if (regex.cid.test(id)) {
        return 3;
    } else if (regex.auid.test(id)) {
        return 4;
    } else {
        return 0;
    }
}