/**
 * Finds two numbers in an array that add up to a target sum.
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // If the complement exists in our map, we found the pair
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        // Otherwise, store the current number and its index
        map.set(nums[i], i);
    }
    return [];
}