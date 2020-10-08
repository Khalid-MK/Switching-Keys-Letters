var input = document.getElementById("input")
var output = document.getElementById("output")

/// this function mapping between every key latter on english keyboard 
/// to relative latter on arabic keyboard and versa versa
function MapCharacter(_input) {

    let out = _input == '`' ? 'ذ' :
            _input == 'q' ? 'ض' :
            _input == 'Q' ? 'َ' :
            _input == 'w' ? 'ص' :
            _input == 'W' ? 'ً' :
            _input == 'e' ? 'ث' :
            _input == 'E' ? 'ُ' :
            _input == 'r' ? 'ق' :
            _input == 'R' ? 'ٌ' :
            _input == 't' ? 'ف' :
            // _input == 'T' ? 'لإ' :
            _input == 'y' ? 'غ' :
            _input == 'Y' ? 'إ' :
            _input == 'u' ? 'ع' :
            _input == 'U' ? '‘' :
            _input == 'i' ? 'ه' :
            _input == 'I' ? '÷' :
            _input == 'o' ? 'خ' :
            _input == 'O' ? '×' :
            _input == 'p' ? 'ح' :
            _input == 'P' ? '؛' :
            _input == '[' ? 'ج' :
            _input == '{' ? '<' :
            _input == ']' ? 'د' :
            _input == '}' ? '>' :
            _input == 'a' ? 'ش' :
            _input == 'A' ? 'ِ' :
            _input == 's' ? 'س' :
            _input == 'S' ? 'ٍ' :
            _input == 'd' ? 'ي' :
            _input == 'D' ? ']' :
            _input == 'f' ? 'ب' :
            _input == 'F' ? '[' :
            _input == 'g' ? 'ل' :
            // _input == 'G' ? 'لأ' :
            _input == 'h' ? 'ا' :
            _input == 'H' ? 'أ' :
            _input == 'j' ? 'ت' :
            _input == 'J' ? 'ـ' :
            _input == 'k' ? 'ن' :
            _input == 'K' ? '،' :
            _input == 'l' ? 'م' :
            _input == 'L' ? '/' :
            _input == ';' ? 'ك' :
            _input == ':' ? ':' :
            _input == "'" ? 'ط' :
            _input == '"' ? '"' :
            _input == 'z' ? 'ئ' :
            _input == 'Z' ? '~' :
            _input == 'x' ? 'ء' :
            _input == 'X' ? 'ْ' :
            _input == 'c' ? 'ؤ' :
            _input == 'C' ? '}' :
            _input == 'v' ? 'ر' :
            _input == 'V' ? '{' :
            _input == 'b' ? 'لا' :
            _input == 'B' ? 'لآ' :
            _input == 'n' ? 'ى' :
            _input == 'N' ? 'آ' :
            _input == 'm' ? 'ة' :
            _input == 'M' ? '’' :
            _input == ',' ? 'و' :
            _input == '<' ? ',' :
            _input == '.' ? 'ز' :
            _input == '>' ? '.' :
            _input == '/' ? 'ظ' :
            _input == '?' ? '؟' : 
            // Arabic to English
            _input == 'ذ' ? '`' :
            _input == 'ض' ? 'q' :
            _input == 'َ'  ? 'Q':
            _input == 'ص' ? 'w' :
            _input == 'ً'  ? 'W':
            _input == 'ث' ? 'e' :
            _input == 'ُ'  ? 'E':
            _input == 'ق' ? 'r' :
            _input == 'ٌ'  ? 'R':
            _input == 'ف' ? 't' :
            // _input == 'لإ' ? 'T' :
            _input == 'غ' ? 'y' :
            _input == 'إ' ? 'Y' :
            _input == 'ع' ? 'u' :
            _input == '‘' ? 'U' :
            _input == 'ه' ? 'i' :
            _input == '÷' ? 'I' :
            _input == 'خ' ? 'o' :
            _input == '×' ? 'O' :
            _input == 'ح' ? 'p' :
            _input == '؛' ? 'P' :
            _input == 'ج' ? '[' :
            _input == '<' ? '{' :
            _input == 'د' ? ']' :
            _input == '>' ? '}' :
            _input == 'ش' ? 'a' :
            _input == 'ِ'  ? 'A':
            _input == 'س' ? 's' :
            _input == 'ٍ'  ? 'S':
            _input == 'ي' ? 'd' :
            _input == ']' ? 'D' :
            _input == 'ب' ? 'f' :
            _input == '[' ? 'F' :
            _input == 'ل' ? 'g' :
            // _input == 'لأ' ? 'G' :
            _input == 'ا' ? 'h' :
            _input == 'أ' ? 'H' :
            _input == 'ت' ? 'j' :
            _input == 'ـ' ? 'J' :
            _input == 'ن' ? 'k' :
            _input == '،' ? 'K' :
            _input == 'م' ? 'l' :
            _input == '/' ? 'L' :
            _input == 'ك' ? ';' :
            _input == ':' ? ':' :
            _input == 'ط' ? "'" :
            _input == '"' ? '"' :
            _input == 'ئ' ? 'z' :
            _input == '~' ? 'Z' :
            _input == 'ء' ? 'x' :
            _input == 'ْ'  ? 'X':
            _input == 'ؤ' ? 'c' :
            _input == '}' ? 'C' :
            _input == 'ر' ? 'v' :
            _input == '{' ? 'V' :
            // _input == 'لا' ? 'b' :
            // _input == 'لآ' ? 'B' :
            _input == 'ى' ? 'n' :
            _input == 'آ' ? 'N' :
            _input == 'ة' ? 'm' :
            _input == '’' ? 'M' :
            _input == 'و' ? ',' :
            _input == ',' ? '<' :
            _input == 'ز' ? '.' :
            _input == '.' ? '>' :
            _input == 'ظ' ? '/' :
            _input == '؟' ? '?' : _input
            
    return out
}

function Translate(str) {
    let outString = ''
    str = str.replace("لإ", "T")
    str = str.replace("لأ", "G")
    str = str.replace("لآ", "B")
    str = str.replace("لا", "b")
    let chars = str.split('')
    chars.forEach(char => {
        outString += MapCharacter(char)
    });
    return outString
}

function ClickToCopy () {
  var copyText = output;

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");
}

if (chrome.tabs != undefined) {
    
    chrome.tabs.executeScript( {
        code: "window.getSelection().toString();"
    }, function(selection) {
        input.value = selection[0];
        output.value = Translate(input.value);
    });
}

if (input != null) {
    input.addEventListener('keyup', function () {
        output.value = Translate(input.value);
    })

    output.addEventListener('click', function () {
        ClickToCopy();
    })
}



