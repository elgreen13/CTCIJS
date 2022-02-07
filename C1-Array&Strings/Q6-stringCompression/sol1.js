function stringCompression(str) {
  const length = str.length;
  let compressed = "";

  let pointer = 0;

  while(pointer < length) {
    const char = str[pointer];
    let count = 1;

    while(pointer < length - 1 && str[pointer] === str[pointer + 1]) {
      count++;
      pointer++;
    }

    compressed += (char + count);
    if (compressed.length >= length) return str;
    pointer++;
  }

  return compressed;
}

console.log(stringCompression('aaaaakkkkkpppppppppppppbhjakalajfn') === 'a5k5p13b1h1j1a1k1a1l1a1j1f1n1');
console.log(stringCompression('abcdef') === 'a1b1c1d1e1f1');
console.log(stringCompression('abcdef') === 'abcdef');
