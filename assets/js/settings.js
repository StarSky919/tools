/*START: Dark Mode*/
{
    var dark = getElm1('darkMode');
    var auto = getElm1('autoDM');

    if (getCookie('darkMode') == 'on') {
        dark.checked = true;
    }

    if (getCookie('autoDM') == 'on') {
        auto.checked = true;
    }

    if (getCookie('autoDM') == 'on') {
        dark.disabled = true;
        if (time()) {
            dark.checked = true;
        } else {
            dark.checked = false;
        }
    }

    dark.onclick = function() {
        if (dark.checked) {
            setCookie('darkMode', 'on', 365);
        } else {
            setCookie('darkMode', 'off', 365);
        }
        darkMode.toggle();
    }

    auto.onclick = function() {
        if (auto.checked) {
            setCookie('autoDM', 'on', 365);
        } else {
            setCookie('autoDM', 'off', 365);
        }
        if (getCookie('autoDM') == 'on') {
            dark.disabled = true;
            if (time()) {
                setCookie('darkMode', 'on', 365);
                dark.checked = true;
            } else {
                setCookie('darkMode', 'off', 365);
                dark.checked = false;
            }
            darkMode.toggle();
        } else {
            dark.disabled = false;
        }
    }
} /*END: Dark Mode*/

/*START: PG Unlimited*/
{
    var limit = getElm1('unlimited');

    if (getCookie('unlimited') == 'on') {
        limit.checked = true;
    }

    limit.onclick = function() {
        if (limit.checked) {
            setCookie('unlimited', 'on', 365);
        } else {
            setCookie('unlimited', 'off', 365);
        }
    }
} /*END: PG Unlimited*/

/*START: Eggs*/
{
    var eggs = getElm1('eggs');

    if (getCookie('eggs') == 'on') {
        eggs.checked = true;
    }

    eggs.onclick = function() {
        if (eggs.checked) {
            setCookie('eggs', 'on', 365);
        } else {
            setCookie('eggs', 'off', 365);
        }
    }
} /*END: Eggs*/

/*START: Resets*/
{
    function resetSettings() {
        setCookie('darkMode', 'off', 365);
        setCookie('autoDM', 'off', 365);
        setCookie('unlimited', 'off', 365);
        setCookie('eggs', 'off', 365);
        for (let [index, toggle] of getElm3('input[type=checkbox]').entries()) {
            toggle.checked = false;
            toggle.disabled = false;
        }
        darkMode.toggle();
    }

    getElm1('resetSettings').onclick = function() {
        let warning = confirm('确定恢复全部设置吗？');
        if (warning) {
            resetSettings();
        } else {
            return;
        }
    }

    getElm1('deleteData').onclick = function() {
        let warning = confirm('以下项目将被清除：\n\n您在所有工具内设置的选项;\n网站设置;\n\n确定删除数据？');
        if (warning) {
            resetSettings();
            for (let [index, cookies] of document.cookie.split(';').entries()) {
                setCookie(cookies.split('=')[0], '', -1);
            }
        } else {
            return;
        }
    }
} /*END: Resets*/