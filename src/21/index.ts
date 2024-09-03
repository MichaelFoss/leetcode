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

const mergeTwoLists = (...args: Array<any>): ListNode | null => {
  let list1: ListNode | null = Array.isArray(args[0])
    ? listNodeFromArray(args[0])
    : args[0];
  let list2: ListNode | null = Array.isArray(args[1])
    ? listNodeFromArray(args[1])
    : args[1];
  if (list1 === null) {
    return list2;
  } else if (list2 === null) {
    return list1;
  }
  let listMerged: ListNode | null;
  let curr1 = list1,
    curr2 = list2;
  if (curr1.val < curr2.val) {
    listMerged = curr1;
    curr1 = curr1.next;
    if (curr1 === null) {
      listMerged.next = curr2;
      return listMerged;
    }
  } else {
    listMerged = curr2;
    curr2 = curr2.next;
    if (curr2 === null) {
      listMerged.next = curr1;
      return listMerged;
    }
  }
  let currMerged: ListNode | null = listMerged;
  while (curr1 !== null && curr2 !== null) {
    if (curr1.val < curr2.val) {
      currMerged.next = curr1;
      curr1 = curr1.next;
      if (curr1 === null) {
        currMerged = currMerged.next;
        currMerged.next = curr2;
        return listMerged;
      }
    } else {
      currMerged.next = curr2;
      curr2 = curr2.next;
      if (curr2 === null) {
        currMerged = currMerged.next;
        currMerged.next = curr1;
        return listMerged;
      }
    }
    currMerged = currMerged.next;
  }
  throw new Error('Should have seen one of the lists empty by now...');
};

export default mergeTwoLists;
