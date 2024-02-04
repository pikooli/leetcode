const l1 = [9, 9, 9, 9, 9, 9, 9].map((val) => new ListNode(val)),
  l2 = [9, 9, 9, 9].map((val) => new ListNode(val));
const l1Listed = l1.reduce((prev, val, index) => {
  val.next = l1[index + 1];
  return prev;
}, l1[0]);

const l2Listed = l2.reduce((prev, val, index) => {
  val.next = l2[index + 1];
  return prev;
}, l2[0]);

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const head = new ListNode(0);
  let headl1 = l1,
    headl2 = l2,
    current = head;
  let carry = 0;

  while (headl1 || headl2) {
    let val1 = headl1 ? headl1.val : 0;
    let val2 = headl2 ? headl2.val : 0;

    headl1 = headl1 ? headl1.next : null;
    headl2 = headl2 ? headl2.next : null;
    let sum = carry + val1 + val2;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }

  if (carry) {
    current.next = new ListNode(carry);
  }

  return head.next;
};

let result = addTwoNumbers(l1Listed, l2Listed);
let print = [];
while (result) {
  print.push(result.val);
  result = result.next;
}
console.log(print);
