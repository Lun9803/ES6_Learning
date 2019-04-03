// 成对反转node  
// 1->2->3->4  变成 2->1->4->3
// 一开始没想到用recursion写，结果要考虑很多情况并且代码比较绕，recursion会比较好写。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function(head) {
    if(!head || !head.next)return head;
    let first = head;
    let second = head.next;
    first.next = swapPairs(first.next.next);
    second.next = first;
    return second;
};

let d = {val:4, next:null};
let c = {val:3, next:d};
let b = {val:2, next:c};
let a = {val:1, next:b};

let node = swapPairs(a);
while(node){
    console.log(node.val);
    node = node.next;
}