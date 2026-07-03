/*
Given two strings s1 and s2 consisting of lowercase English letters of length n1 and n2 respectively, find the number of ways to insert exactly one character into string s1 such that the length of the Longest Common Subsequence (LCS) of both strings increases by exactly 1.
*/


class Solution {
    waysToIncreaseLCSBy1(s1, s2) {
        let n = s1.length;
        let m = s2.length;

        // Prefix LCS
        let pre = Array.from({ length: n + 1 }, () =>
            Array(m + 1).fill(0)
        );

        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= m; j++) {
                if (s1[i - 1] === s2[j - 1])
                    pre[i][j] = pre[i - 1][j - 1] + 1;
                else
                    pre[i][j] = Math.max(pre[i - 1][j], pre[i][j - 1]);
            }
        }

        const L = pre[n][m];

        // Suffix LCS
        let suf = Array.from({ length: n + 1 }, () =>
            Array(m + 1).fill(0)
        );

        for (let i = n - 1; i >= 0; i--) {
            for (let j = m - 1; j >= 0; j--) {
                if (s1[i] === s2[j])
                    suf[i][j] = suf[i + 1][j + 1] + 1;
                else
                    suf[i][j] = Math.max(suf[i + 1][j], suf[i][j + 1]);
            }
        }

        // Positions of each character in s2
        let pos = Array.from({ length: 26 }, () => []);

        for (let i = 0; i < m; i++) {
            pos[s2.charCodeAt(i) - 97].push(i);
        }

        let ans = 0;

        // Try every insertion position
        for (let i = 0; i <= n; i++) {

            for (let ch = 0; ch < 26; ch++) {

                for (let idx of pos[ch]) {

                    let left = pre[i][idx];
                    let right = suf[i][idx + 1];

                    if (left + right === L) {
                        ans++;
                        break; // Only one valid occurrence needed for this character
                    }
                }
            }
        }

        return ans;
    }
}