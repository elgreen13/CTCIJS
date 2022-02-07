function stringCompression(str) {
  const length = str.length;
  let compressed = "";
  let curr = str[0];
  let count = 1;

  for (let i = 1; i < length; i++) {
    const char = str[i];
    
    if (char === curr) {
      count++;
    } else {
      compressed += (curr + count);
      curr = char;
      count = 1;
    }

    if (compressed.length >= length) return str;
  }

  compressed += (curr + count);

  if (compressed.length >= length) return str;

  return compressed;
}

console.log(stringCompression('aaaaakkkkkpppppppppppppbhjakalajfn') === 'a5k5p13b1h1j1a1k1a1l1a1j1f1n1');
console.log(stringCompression('abcdef') === 'a1b1c1d1e1f1');
console.log(stringCompression('abcdef') === 'abcdef');
