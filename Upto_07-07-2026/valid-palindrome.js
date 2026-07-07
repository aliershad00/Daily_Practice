class Solution {
    isPalindrome(s) {
        // Step 1: Clean the string (remove non-alphanumeric and lowercase it)
        // You can use regex for this: /[^a-z0-9]/g
        const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        
        let left = 0;
        let right = cleaned.length - 1;
        
        // Step 2: Use two pointers moving toward each other
        while (left < right) {
            if (cleaned[left] !== cleaned[right]) {
                return false;
            }
            left++;
            right--;
        }
        
        return true;
    }
}

// Test cases:
// const solver = new Solution();
// console.log(solver.isPalindrome("A man, a plan, a canal: Panama")); // true
// console.log(solver.isPalindrome("race a car"));                     // false