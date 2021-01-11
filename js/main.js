function getElm1(id) {
    return document.getElementById(id);
}

function getElm2(query, all) {
    if (all = true) {
        return document.querySelectorAll(query);
    } else {
        return document.querySelector(query);
    }
}