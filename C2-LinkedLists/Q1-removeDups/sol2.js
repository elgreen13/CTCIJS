const LinkedList = require("../LinkedList");

const l = new LinkedList();
l.append(3);
l.append(4);
l.append(10);
l.append(20);
l.append(5);
l.append(4);
l.append(3);
l.append(10);

function removeDups(list) {
  let curr = list.head, parent = null;
  let seen = {}

  while (curr) {
    const value = curr.value;
    if (seen[value]) {
      parent.next = parent.next.next;
    } else {
      parent = curr;
    };
    curr = parent.next;
    seen[value] = true
  }

  return list;
}

console.log(l._toArray());

removeDups(l)
console.log(l._toArray())