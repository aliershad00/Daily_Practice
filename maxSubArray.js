/**
 * Finds the contiguous subarray with the largest sum.
 * @param {number[]} nums
 * @returns {number}
 */
function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Decide whether to add the current number to the existing subarray 
        // or start a new subarray from the current number
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}