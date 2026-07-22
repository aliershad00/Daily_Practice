/**
 * @param {Node} head
 * @returns {Node}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    reverseList(head) {
        let prev = null;
        let curr = head;
        
        while (curr !== null) {
            let nextNode = curr.next;  // Store the next node
            curr.next = prev;          // Reverse the pointer
            
            prev = curr;               // Move 'prev' one step forward
            curr = nextNode;           // Move 'curr' one step forward
        }
        
        // 'prev' is now pointing to the new head
        return prev; 
    }
}