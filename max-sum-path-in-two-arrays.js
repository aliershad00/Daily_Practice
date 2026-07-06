class Solution {
    maxPathSum(a, b) {
        let i = 0, j = 0;
        let sumA = 0, sumB = 0;
        let result = 0;

        // Traverse both arrays using two pointers
        while (i < a.length && j < b.length) {
            if (a[i] < b[j]) {
                sumA += a[i];
                i++;
            } else if (b[j] < a[i]) {
                sumB += b[j];
                j++;
            } else {
                // We found a common element!
                // Add the maximum sum accumulated so far plus the common element itself
                result += Math.max(sumA, sumB) + a[i];

                // Reset the running sums for the next segment
                sumA = 0;
                sumB = 0;
                i++;
                j++;
            }
        }

        // Collect remaining elements from array a, if any
        while (i < a.length) {
            sumA += a[i];
            i++;
        }

        // Collect remaining elements from array b, if any
        while (j < b.length) {
            sumB += b[j];
            j++;
        }

        // Add the maximum of the final remaining segments
        result += Math.max(sumA, sumB);

        return result;
    }
}

// Example File Name recommendation: max-path-sum.js
