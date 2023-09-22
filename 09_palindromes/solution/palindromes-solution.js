const palindromes = function (string) {
  console.log(string);
  const processedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(processedString);
  return processedString.split("").reverse().join("") == processedString;
};

module.exports = palindromes;
