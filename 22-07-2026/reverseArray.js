/**
 * @param {number[]} arr
 * @returns {void}
 */
class Solution {
    reverseArray(arr) {
        let left = 0;
        let right = arr.length - 1;
        
        while (left < right) {
            // Swap the elements
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            
            // Move the pointers towards the center
            left++;
            right--;
        }
    }
}