var hasCycle = function (head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) return true;
  }
  return false;
};
const head = [3, 2, 0, -4];
const pos = 1;
console.log(hasCycle(head, pos));

//leetcode 141 LInked list cycle
//this would not work here , only in leetcode, 
// but try to understand the question and the problem, its simple logic, where we can apply in so many problems
