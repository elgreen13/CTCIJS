function urlIfy(str, len) {
  for (let i = 0; i < len; i++) {
    if (str[i] === " ") {
      str = str.substring(0, i) + "%20" + str.substring(i + 1, len);
      len += 2;
      i += 2;
    }
  }
  return str;
}

console.log(urlIfy('hi my name is el          ', 16) === "hi%20my%20name%20is%20el")
console.log(urlIfy('Mr John Smith,           ', 13) === "Mr%20John%20Smith")