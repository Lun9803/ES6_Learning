/** Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6

 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

 // 这个方法速度比较慢，但是memory使用很少。
var mergeKLists = function(lists) {
    let nodes = [];
    let head = null;
    

    for(let i=0; i<lists.length; i++){
        nodes.push(lists[i]);
    }
    
    let allNull = false;
    let tempNode = null;
    while(!allNull){
        let minNode = null;
        let minNodeIndex = null;
        allNull = true;
        for(let i=0; i<nodes.length; i++){
            if(nodes[i]){
                allNull = false;
                if(!minNode){
                    minNode = nodes[i];
                    minNodeIndex = i;
                }else{
                    if(minNode.val>nodes[i].val){
                        minNode = nodes[i];
                        minNodeIndex = i;
                    }
                }
            }
        }

        if(!allNull){
            nodes[minNodeIndex] = nodes[minNodeIndex].next;
            if(!head){
                head=minNode;
                tempNode=head;
            }else{
                tempNode.next=minNode;
                tempNode = tempNode.next;
            }
        }
    }

    return head;
};

