class Solution {
    myAtoi(s) {
        let i = 0;
        let n = s.length;

        // Skip leading whitespaces
        while (i < n && s[i] === ' ') {
            i++;
        }

        // Check sign
        let sign = 1;
        if (i < n && (s[i] === '+' || s[i] === '-')) {
            if (s[i] === '-') sign = -1;
            i++;
        }

        let result = 0;

        // Read digits
        while (i < n && s[i] >= '0' && s[i] <= '9') {
            let digit = s.charCodeAt(i) - '0'.charCodeAt(0);

            // Check overflow
            if (
                result > Math.floor(2147483647 / 10) ||
                (result === Math.floor(2147483647 / 10) && digit > 7)
            ) {
                return sign === 1 ? 2147483647 : -2147483648;
            }

            result = result * 10 + digit;
            i++;
        }

        return sign * result;
    }
}