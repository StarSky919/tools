setCookie('transparentNav', '', -1);
setCookie('eggs', '', -1);

var colorNav = getElm('#colorNav');
var dark = getElm('#darkMode');
var limit = getElm('#unlimited');

/*START: Theme Settings*/
{
    if (getCookie('colorNav') == 'on') {
        colorNav.checked = true;
    }

    if (getCookie('darkMode') == 'on') {
        dark.checked = true;
    }

    colorNav.addEventListener('click', function() {
        if (colorNav.checked) {
            setCookie('colorNav', 'on', 365);
            setCookie('darkMode', 'off', 365);
            dark.checked = false;
            theme.darkMode.toggle();
        } else {
            setCookie('colorNav', 'off', 365);
        }
        theme.navBar.toggle();
    });

    dark.addEventListener('click', function() {
        if (dark.checked) {
            setCookie('darkMode', 'on', 365);
            setCookie('colorNav', 'off', 365);
            colorNav.checked = false;
            theme.navBar.toggle();
        } else {
            setCookie('darkMode', 'off', 365);
        }
        theme.darkMode.toggle();
    });
} /*END: Theme Settings*/

/*START: Password Length Unlimited*/
{
    if (getCookie('unlimited') == 'on') {
        limit.checked = true;
    }

    limit.addEventListener('click', function() {
        if (limit.checked) {
            setCookie('unlimited', 'on', 365);
        } else {
            setCookie('unlimited', 'off', 365);
        }
    });
} /*END: Password Length Unlimited*/

/*START: Resets*/
{
    function resetSettings() {
        setCookie('mainColor', '#9898FF', 365);
        setCookie('colorNav', 'off', 365);
        setCookie('darkMode', 'off', 365);
        setCookie('autoDM', 'off', 365);
        setCookie('unlimited', 'off', 365);
        for (let [index, toggle] of getElmAll('input[type=checkbox]').entries()) {
            toggle.checked = false;
            toggle.disabled = false;
        }
        theme.mainColor.set('#9898FF');
        theme.navBar.toggle();
        theme.darkMode.toggle();
    }
} /*END: Resets*/