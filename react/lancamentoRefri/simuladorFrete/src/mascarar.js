
function gerarRegex(maskPattern = '') {

    const lista = maskPattern.split('');

    const listPattern = lista.map(x => {

        const letter = /[a-zA-Z]/.test(x);
        const digit = /[0-9]/.test(x);
        const keyType = letter ? '[a-zA-Z]' : digit ? '[0-9]' : 'special';

        return { keyType, number: 1, key: x };

    });

    return listPattern;
}

function validKeys(e) {

    var keycode = e.keyCode;

    var valid =
        (keycode > 47 && keycode < 58) || // number keys
        keycode == 8 || // Backspace
        keycode == 32 || // spacebar
        (keycode > 64 && keycode < 91) || // letter keys
        (keycode > 95 && keycode < 112) || // numpad keys
        (keycode > 185 && keycode <= 193) || // ;=,-./` (in order)
        (keycode > 218 && keycode < 223);      // [\]' (in order)

    return valid;
}

function mascarar(event, options) {
    const element = event.target;

    // if (validKeys(event) && !event.ctrlKey) {
    let selectionStart = element.selectionStart;

    const regexArr = gerarRegex(options.maskPattern);

    const valueArr = element.value
        .replace(/[^a-z0-9À-ÿ]/i, '')
        .split('');

    for (var i = 0; i < valueArr.length && i < regexArr.length; i++) {
        const keyDigitado = valueArr[i];
        const pattern = new RegExp(regexArr[i].keyType);

        const caracterEspecialNecessario = regexArr[i].keyType == 'special';
        const bateComPattern = pattern.test(keyDigitado);

        if (bateComPattern) {
            continue;
        }

        if (caracterEspecialNecessario) {
            valueArr.splice(i, 0, regexArr[i].key);
            if (i == selectionStart - 1 && regexArr[i].key != keyDigitado) {
                selectionStart++;
            }
            continue;
        }

        valueArr.splice(i, 1);
        if (i == selectionStart - 1 && regexArr[i].key != keyDigitado) {
            selectionStart--;
        }
        i--;
    };

    valueArr.splice(regexArr.length, Number.MAX_VALUE);
    element.value = valueArr.join('');
    element.setSelectionRange(selectionStart, selectionStart);
    // }

}

export default mascarar;

