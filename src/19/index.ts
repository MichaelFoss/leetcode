class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Given an array of numbers, converts them into a ListNode linked list.
 */
const listNodeFromArray = (arr: Array<number>): ListNode | null => {
  if (arr.length === 0) {
    return null;
  }
  let head = new ListNode(arr[0]);
  let curr = head;
  for (let i = 1; i < arr.length; i++) {
    const val = arr[i];
    curr.next = new ListNode(val);
    curr = curr.next;
  }
  return head;
};

/**
 * Given a ListNode linked list, converts it into an array of numbers.
 */
const arrayFromListNode = (head: ListNode | null): Array<number> => {
  const arr: Array<number> = [];
  let curr = head;
  while (curr !== null) {
    arr.push(curr.val);
    curr = curr.next;
  }
  return arr;
};

/**
 * Given the head, returns all nodes in ordinal amount.
 */
const getNodes = (head: ListNode): Array<ListNode> => {
  const nodes: Array<ListNode> = [];
  let curr = head;
  while (curr !== null) {
    nodes.push(curr);
    curr = curr.next;
  }
  return nodes;
};

const removeNthFromEnd = (...args: Array<any>): ListNode | null => {
  let head: ListNode | null = Array.isArray(args[0])
    ? listNodeFromArray(args[0])
    : args[0];
  const n: number = Number.parseInt(args[1]);
  const nodes: Array<ListNode> = getNodes(head);
  if (n === nodes.length) {
    head = head.next;
  } else {
    nodes[nodes.length - n - 1].next = nodes[nodes.length - n].next;
  }
  // console.log(arrayFromListNode(head));
  return head;
};

export default removeNthFromEnd;
