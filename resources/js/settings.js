setCookie('eggs', '', -1);

var color = getElm1('#mainColor');
var transparent = getElm1('#transparentNav');
var dark = getElm1('#darkMode');
var limit = getElm1('#unlimited');

/*START: Theme Settings*/
{
    if (getCookie('mainColor') == '#FEA29F') {
        color.checked = true;
    }

    if (getCookie('transparentNav') == 'on') {
        transparent.checked = true;
    }

    if (getCookie('darkMode') == 'on') {
        dark.checked = true;
        transparent.disabled = true;
    }

    color.onclick = function() {
        if (color.checked) {
            setCookie('mainColor', '#FEA29F', 365);
        } else {
            setCookie('mainColor', '#9898FF', 365);
        }
        theme.mainColor.toggle();
    }

    transparent.onclick = function() {
        if (transparent.checked) {
            setCookie('transparentNav', 'on', 365);
        } else {
            setCookie('transparentNav', 'off', 365);
        }
        theme.navBar.toggle();
    }

    dark.onclick = function() {
        if (dark.checked) {
            setCookie('darkMode', 'on', 365);
            setCookie('transparentNav', 'off', 365);
            transparent.checked = false;
            transparent.disabled = true;
            theme.navBar.toggle();
        } else {
            setCookie('darkMode', 'off', 365);
            transparent.disabled = false;
        }
        darkMode.toggle();
    }
} /*END: Theme Settings*/

/*START: Password Length Unlimited*/
{
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
} /*END: Password Length Unlimited*/

/*START: Resets*/
{
    function resetSettings() {
        setCookie('mainColor', '#9898FF', 365);
        setCookie('transparentNav', 'off', 365);
        setCookie('darkMode', 'off', 365);
        setCookie('autoDM', 'off', 365);
        setCookie('unlimited', 'off', 365);
        for (let [index, toggle] of getElm2('input[type=checkbox]').entries()) {
            toggle.checked = false;
            toggle.disabled = false;
        }
        theme.navBar.toggle();
        darkMode.toggle();
    }
} /*END: Resets*/