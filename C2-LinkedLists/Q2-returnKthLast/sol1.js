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
  let curr = list.head;
  let nodes = [];
  while (curr) {
    nodes.push(curr);
    curr = curr.next;
  }

  return nodes[nodes.length - k]
}

console.log(l._toArray());

console.log(returnKthFromLast(l, 3))
