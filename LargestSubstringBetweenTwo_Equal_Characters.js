class Solution {
    maxCharGap(s) {
        let maxGap = -1;
        // Map to store the first occurrence index of each character
        const firstOccurrence = new Map();

        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            if (firstOccurrence.has(char)) {
                // Number of characters between them is (current_index - first_index - 1)
                const currentGap = i - firstOccurrence.get(char) - 1;
                maxGap = Math.max(maxGap, currentGap);
            } else {
                // Store the very first index we see this character
                firstOccurrence.set(char, i);
            }
        }

        return maxGap;
    }
}

// Example usage:
// const solver = new Solution();
// console.log(solver.maxCharGap("abca"));  // Output: 2  (between 'a' and 'a')
// console.log(solver.maxCharGap("cbzxy")); // Output: -1 (no repeating characters)