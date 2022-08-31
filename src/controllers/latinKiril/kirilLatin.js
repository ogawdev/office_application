const alpha = [
    'A', 'B', 'V', 'G', 'D', 'E', 'Yo', 'J', 'Z', 'I', 'Y', 'K', 'L', 'M', 'N', 'O', 'P',
    'R', 'S', 'T', 'U', 'F', 'X', 'Ts', 'Ch', 'Sh', 'Sh', '\'', 'I', '', 'E', 'Yu', 'Ya', 'G\'', 'Q', 'H', 'O\'',
    'a', 'b', 'v', 'g', 'd', 'e', 'yo', 'j', 'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p',
    'r', 's', 't', 'u', 'f', 'x', 'ts', 'ch', 'sh', 'sh', '\'', 'i', '', 'e', 'yu', 'ya', 'g\'', 'q', 'h', 'o\'',
];

const alphaLatin = [
    'A', 'B', 'V', 'G', 'D', 'E', '‡', 'J', 'Z', 'I', 'Y', 'K', 'L', 'M', 'N', 'O', 'P',
    'R', 'S', 'T', 'U', 'F', 'X', '‡', '‡', '‡', '‡', '‡', '‡', '‡', '‡', '‡', '‡', '‡', 'Q', 'H', '‡',
    'a', 'b', 'v', 'g', 'd', 'e', '‡', 'j', 'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p',
    'r', 's', 't', 'u', 'f', 'x', '‡', '‡', '‡', '‡', '\'', '‡', '‡', '‡', '‡', '‡', '‡', 'q', 'h', '‡',
];
const alphaRus = [
    'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П',
    'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', 'Ғ', 'Қ', 'Ҳ', 'Ў',
    'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п',
    'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я', 'ғ', 'қ', 'ҳ', 'ў',
];

module.exports.cyrillicToLatin = (CyrillicMessage) => {
    var LatinTranslated = "";           

    function Eliser2(currentWord) {

        if (currentWord[0] === 'Ц') {
            currentWord = currentWord.replace(/Ц/, "S");
        } else if (currentWord[0] === 'ц') {
            currentWord = currentWord.replace(/ц/, "s");
        }
        for (let r = 0; r < currentWord.length; r++) {
            if (currentWord[r] === 'Ё') {
                for (let z = r + 1; z < currentWord.length; z++) {
                    if (currentWord.charCodeAt(z) >= 1040 && currentWord.charCodeAt(z) <= 1071) {
                        currentWord = currentWord.replace(/Ё/i, "YO");
                    }
                }
            } else if (currentWord[r] === 'Ц') {
                if (currentWord.charCodeAt(r - 1) !== 1040 && currentWord.charCodeAt(r - 1) !== 1045 && currentWord.charCodeAt(r - 1) !== 1048 && currentWord.charCodeAt(r - 1) !== 1054 && currentWord.charCodeAt(r - 1) !== 1059 && currentWord.charCodeAt(r - 1) !== 1069 && currentWord.charCodeAt(r - 1) !== 1070 && currentWord.charCodeAt(r - 1) !== 1071 && currentWord.charCodeAt(r - 1) !== 1072 && currentWord.charCodeAt(r - 1) !== 1077 && currentWord.charCodeAt(r - 1) !== 1080 && currentWord.charCodeAt(r - 1) !== 1086 && currentWord.charCodeAt(r - 1) !== 1091 && currentWord.charCodeAt(r - 1) !== 1101 && currentWord.charCodeAt(r - 1) !== 1102 && currentWord.charCodeAt(r - 1) !== 1103) {
                    currentWord = currentWord.replace(/Ц/i, "S");
                }
                for (let z = r + 1; z < currentWord.length; z++) {
                    if (currentWord.charCodeAt(z) >= 1040 && currentWord.charCodeAt(z) <= 1071) {
                        currentWord = currentWord.replace(/Ц/i, "TS");
                    }
                }
            } else if (currentWord[r] === 'ц') {
                if (currentWord.charCodeAt(r - 1) !== 1040 && currentWord.charCodeAt(r - 1) !== 1045 && currentWord.charCodeAt(r - 1) !== 1048 && currentWord.charCodeAt(r - 1) !== 1054 && currentWord.charCodeAt(r - 1) !== 1059 && currentWord.charCodeAt(r - 1) !== 1069 && currentWord.charCodeAt(r - 1) !== 1070 && currentWord.charCodeAt(r - 1) !== 1071 && currentWord.charCodeAt(r - 1) !== 1072 && currentWord.charCodeAt(r - 1) !== 1077 && currentWord.charCodeAt(r - 1) !== 1080 && currentWord.charCodeAt(r - 1) !== 1086 && currentWord.charCodeAt(r - 1) !== 1091 && currentWord.charCodeAt(r - 1) !== 1101 && currentWord.charCodeAt(r - 1) !== 1102 && currentWord.charCodeAt(r - 1) !== 1103) {
                    currentWord = currentWord.replace(/ц/i, "s");
                }
            } else if (currentWord[r] === 'Ч') {
                for (let z = r + 1; z < currentWord.length; z++) {
                    if (currentWord.charCodeAt(z) >= 1040 && currentWord.charCodeAt(z) <= 1071) {
                        currentWord = currentWord.replace(/Ч/i, "CH");
                    }
                }
            } else if (currentWord[r] === 'Ш') {
                for (let z = r + 1; z < currentWord.length; z++) {
                    if (currentWord.charCodeAt(z) >= 1040 && currentWord.charCodeAt(z) <= 1071) {
                        currentWord = currentWord.replace(/Ш/i, "SH");
                    }
                }
            } else if (currentWord[r] === 'Ю') {
                for (let z = r + 1; z < currentWord.length; z++) {
                    if (currentWord.charCodeAt(z) >= 1040 && currentWord.charCodeAt(z) <= 1071) {
                        currentWord = currentWord.replace(/Ю/i, "YU");
                    }
                }
            } else if (currentWord[r] === 'Я') {
                for (let z = r + 1; z < currentWord.length; z++) {
                    if (currentWord.charCodeAt(z) >= 1040 && currentWord.charCodeAt(z) <= 1071) {
                        currentWord = currentWord.replace(/Я/i, "YA");
                    }
                }
            }
        }

        if (currentWord[0] === 'Е') {            
            for (let z = 1; z < currentWord.length; z++) {
                if (currentWord.charCodeAt(z) >= 1040 && currentWord.charCodeAt(z) <= 1071) {
                    var E = currentWord.replace(/Е/i, "YE"); 
                    return E;
                }
                else {
                    var E = currentWord.replace(/Е/i, "Ye");                   
                    return E;
                }
            }
        }
        else if (currentWord[0] === 'е') {
            var e = currentWord.replace(/е/i, "ye");
            return e;
        }
        else {
            return currentWord;
        }
    }
    let letterE2 = CyrillicMessage.split(" ").map(Eliser2).join(' ');
    CyrillicMessage = letterE2;

    
    function decrypt(string) {

        for (var i = 0; i < string.length; i++) {
            for (var j = 0; j < alphaRus.length; j++) {
                /* lotinchaga o'tkazadi*/
                if (string[i] == alphaRus[j]) {
                    LatinTranslated += alpha[j];
                }
                else if ((string.charCodeAt(i) >= 9 && string.charCodeAt(i) <= 11) || (string.charCodeAt(i) > 32 && string.charCodeAt(i) < 1000) || (string.charCodeAt(i) > 1300)) {
                    LatinTranslated += string[i]; break;
                }
                else if (string.charCodeAt(i) === 32) {
                    LatinTranslated += " "; break;
                }
            }
        }
    }
    decrypt(CyrillicMessage);
    return LatinTranslated;
};
