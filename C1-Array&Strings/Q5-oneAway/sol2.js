function oneAway(a, b) {
  if (a.length === b.length) return oneReplacement(a,b);
  if (a.length === b.length + 1) return oneRemoval(a,b);
  if (a.length === b.length - 1) return oneRemoval(b,a);

  return false;
}

function oneReplacement(a,b) {
  let oneReplaced = false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) continue;
    if (oneReplaced) return false;
    oneReplaced = true;
  }
  return true;
}

function oneRemoval(a,b) {
  let oneRemoved = false, j = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[j]) {
      if (oneRemoved) return false;
      oneRemoved = true;
    } else j++;
  }
  return true;
}

console.log(oneAway('pile', 'mile'), true)
console.log(oneAway('pale', 'ale'), true);
console.log(oneAway(' ', ' i'), true);
console.log(oneAway('pale', 'pick'), false);
console.log(oneAway('p i c k', 'pick'), false)
console.log(oneAway('pale', 'palem'), true)