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

function returnKthFromLast(list, k) {
  let firstPointer = list.head, secondPointer = list.head;

  for (let i = 0; i < k; i++) {
    if (!firstPointer) return null;
    firstPointer = firstPointer.next;
  }

  while (firstPointer) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
  }

  return secondPointer;
}

console.log(l._toArray());

console.log(returnKthFromLast(l, 3))
