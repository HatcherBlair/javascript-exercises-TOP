const palindromes = function (palindrome) {
    palindrome = formatString(palindrome);
    for (let i = 0; i < palindrome.length; i++) {
        if (!(palindrome[i] === palindrome[palindrome.length - 1 - i])) return false;
    }

    return true;
};

function formatString(stringToFormat) {
    const punctuation = /[!,.?]/g;
    stringToFormat = stringToFormat.split(" ").join("");
    stringToFormat = stringToFormat.replace(punctuation, "");
    return stringToFormat.toLowerCase();
}

// Do not edit below this line
module.exports = palindromes;