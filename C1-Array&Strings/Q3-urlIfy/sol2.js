function urlIfy(str, len) {
  let url = "";
  for (let i = 0; i < len; i++) {
    if (str[i] === " ") {
      url += "%20"
    } else url += str[i];
  }
  return url;
}

console.log(urlIfy('hi my name is el          ', 16) === "hi%20my%20name%20is%20el")
console.log(urlIfy('Mr John Smith,           ', 13) === "Mr%20John%20Smith")