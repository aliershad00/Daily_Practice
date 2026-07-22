/**
 * @param {number[]} arr
 * @param {number} d
 */
class Solution {
    // Helper method to reverse a portion of the array in-place
    reverse(arr, start, end) {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            
            start++;
            end--;
        }
    }

    rotateArr(arr, d) {
        const n = arr.length;
        d = d % n; // Handle cases where d >= n
        
        // If d becomes 0, no rotation is needed
        if (d === 0) return;
        
        // Step 1: Reverse the first d elements
        this.reverse(arr, 0, d - 1);
        
        // Step 2: Reverse the remaining elements
        this.reverse(arr, d, n - 1);
        
        // Step 3: Reverse the entire array
        this.reverse(arr, 0, n - 1);
    }
}