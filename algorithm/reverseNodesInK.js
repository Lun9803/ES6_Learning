// 给定列表：1->2->3->4->5
// 给定K，使得列表每k组node反转，如果剩余一组数量不足k，不反转
// 若k=2 返回 2->1->4->3->5
// 若k=3 返回 3->2->1->4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(!head)return head;
    let listArr = [];
    let firstUnchangedNode = null;
    let newHead = null;
    let tempNode = head;
    for(let i=0; i<k; i++){
        listArr.push(tempNode);
        // k is more than the length of the list, return head
        if(!tempNode)return head;
        tempNode=tempNode.next;
    }
    newHead = listArr[k-1];
    firstUnchangedNode = tempNode;
    for(let i=k-1; i>0; i--){
        listArr[i].next=listArr[i-1];
    }
    listArr[0].next=reverseKGroup(firstUnchangedNode, k);
    return newHead;
};

let e = {val:5,next:null};
let d = {val:4,next:e};
let c = {val:3,next:d};
let b = {val:2,next:c};
let a = {val:1,next:b};

let newHead = reverseKGroup(a, 3);
console.log("k=3 with 5 nodes");
while(newHead){
    console.log(newHead.val);
    newHead=newHead.next;
}


g = {val:7,next:null}
f = {val:6,next:g};
e = {val:5,next:f};
d = {val:4,next:e};
c = {val:3,next:d};
b = {val:2,next:c};
a = {val:1,next:b};

console.log("k=2 with 7 nodes");
newHead = reverseKGroup(a, 2);
while(newHead){
    console.log(newHead.val);
    newHead=newHead.next;
}

g = {val:7,next:null}
f = {val:6,next:g};
e = {val:5,next:f};
d = {val:4,next:e};
c = {val:3,next:d};
b = {val:2,next:c};
a = {val:1,next:b};

console.log("k=3 with 7 nodes");
newHead = reverseKGroup(a, 3);
while(newHead){
    console.log(newHead.val);
    newHead=newHead.next;
}