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
  let removeDupsOf = list.head;

  while (removeDupsOf) {
    let parent = removeDupsOf;
    
    while (parent) {
      let checkForDups = parent.next;
      if (checkForDups && removeDupsOf.value === checkForDups.value) {
        parent.next = parent.next.next;
      } else parent = parent.next;
    }
    removeDupsOf = removeDupsOf.next
  }

  return list;
}

console.log(l._toArray());

removeDups(l)
console.log(l._toArray())