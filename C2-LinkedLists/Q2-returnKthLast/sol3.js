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

class DistanceFromEnd {
  constructor(value = 0, lastSeen = null) {
    this.value = value;
    this.lastSeen = lastSeen;
  }
}

function returnKthFromLast(list, k) {
  const distance = new DistanceFromEnd();
  helper(list.head, k, distance);
  return distance.lastSeen;
}

function helper(curr, k, distance) {
  if (!curr) return;

  helper(curr.next, k, distance);
  distance.value++;

  if (distance.value > k) return;

  distance.lastSeen = curr;
}

console.log(l._toArray());

new Array(8).fill().map((_, index) => console.log(returnKthFromLast(l, index + 1)));