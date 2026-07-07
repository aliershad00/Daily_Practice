/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} arr
 * @returns {number}
 */
class Solution {
    largestArea(n, m, arr) {
        const rows = [0, n + 1];
        const cols = [0, m + 1];

        // Extract row and column coordinates from blocked cells
        for (let i = 0; i < arr.length; i++) {
            rows.push(arr[i][0]);
            cols.push(arr[i][1]);
        }

        // Sort the coordinates
        rows.sort((a, b) => a - b);
        cols.sort((a, b) => a - b);

        let maxRowGap = 0;
        let maxColGap = 0;

        // Find the maximum contiguous unblocked rows
        for (let i = 1; i < rows.length; i++) {
            maxRowGap = Math.max(maxRowGap, rows[i] - rows[i - 1] - 1);
        }

        // Find the maximum contiguous unblocked columns
        for (let i = 1; i < cols.length; i++) {
            maxColGap = Math.max(maxColGap, cols[i] - cols[i - 1] - 1);
        }

        // The largest continuous area is the product of max rows and max cols
        return maxRowGap * maxColGap;
    }
}