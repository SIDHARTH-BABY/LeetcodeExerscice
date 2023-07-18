function mergeArray(l1, l2) {
  let curr = new ListNode();
  const dummy = curr;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  if (l1) {
    curr.next = l1;
  }
  if (l2) {
    curr.next = l2;
  }
  return dummy.next;
}
let arr1 = [2, 3, 9];
let arr2 = [2, 9, 16];
console.log(mergeArray(arr1, arr2));
