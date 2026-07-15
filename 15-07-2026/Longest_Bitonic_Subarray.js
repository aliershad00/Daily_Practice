class Solution {
    bitonic(arr) {
        let n = arr.length;

        if (n === 0) return 0;

        let inc = new Array(n).fill(1);
        let dec = new Array(n).fill(1);

        // Longest non-decreasing subarray ending at i
        for (let i = 1; i < n; i++) {
            if (arr[i] >= arr[i - 1]) {
                inc[i] = inc[i - 1] + 1;
            }
        }

        // Longest non-increasing subarray starting at i
        for (let i = n - 2; i >= 0; i--) {
            if (arr[i] >= arr[i + 1]) {
                dec[i] = dec[i + 1] + 1;
            }
        }

        let ans = 1;

        for (let i = 0; i < n; i++) {
            ans = Math.max(ans, inc[i] + dec[i] - 1);
        }

        return ans;
    }
}