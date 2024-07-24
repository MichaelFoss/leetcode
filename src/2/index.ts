class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const addTwoNumbers = (
  l1: Array<number> | ListNode | null,
  l2: Array<number> | ListNode | null
): ListNode | null => {
  /**
   * 1->2->3->/ ==> ['3', '2', '1']
   */
  const fromList = (l: ListNode | null): Array<string> => {
    if (l === null) {
      return [];
    }
    let currentNode: ListNode | null = l;
    let reversedNum: Array<string> = [];
    while (currentNode !== null) {
      reversedNum.push(currentNode.val.toString());
      currentNode = currentNode.next;
    }
    const num = reversedNum.reverse();
    return num;
  };

  /**
   * ['3', '2', '1'] ==> 1->2->3->/
   */
  const toList = (num: Array<string>): ListNode | null => {
    const rootNode = new ListNode();
    let currentNode = rootNode;
    for (let i = num.length - 1; i >= 0; i--) {
      const digit = Number.parseInt(num[i]);
      currentNode.val = digit;
      if (i !== 0) {
        currentNode.next = new ListNode();
        currentNode = currentNode.next;
      }
    }
    return rootNode;
  };

  const addNums = (num1: Array<string>, num2: Array<string>): Array<string> => {
    const arr1 = [...num1].reverse();
    const arr2 = [...num2].reverse();
    let reversedSum: Array<string> = [];
    let carryTheOne = false;
    for (let i = 0; i < arr1.length; i++) {
      let newNum: number =
        Number.parseInt(arr1[i]) +
        Number.parseInt(arr2[i]) +
        (carryTheOne ? 1 : 0);
      carryTheOne = newNum >= 10;
      newNum %= 10;
      reversedSum.push(newNum.toString());
    }
    if (carryTheOne) {
      reversedSum.push('1');
    }
    const sum = reversedSum.reverse();
    return sum;
  };

  /**
   * [3, 2, 1] ==> 1->2->3->/
   */
  const fromArray = (arr: Array<number>): ListNode | null => {
    return toList(arr.map((x) => x.toString()));
  };

  let listNode1: ListNode | null = null;
  let listNode2: ListNode | null = null;

  // Check for arrays from the command line
  if (Array.isArray(l1)) {
    listNode1 = fromArray(l1);
  } else {
    listNode1 = l1;
  }
  if (Array.isArray(l2)) {
    listNode2 = fromArray(l2);
  } else {
    listNode2 = l2;
  }

  let [num1, num2] = [fromList(listNode1), fromList(listNode2)];
  if (num1.length > num2.length) {
    num2.unshift(...new Array(num1.length - num2.length).fill('0'));
  } else if (num1.length < num2.length) {
    num1.unshift(...new Array(num2.length - num1.length).fill('0'));
  }
  const sum = addNums(num1, num2);
  return toList(sum);
};

export default addTwoNumbers;
