/**
 * Checks if a string of brackets is valid and properly closed.
 * @param {string} s
 * @returns {boolean}
 */
function isValid(s) {
    const stack = [];
    const pairs = { '(': ')', '{': '}', '[': ']' };

    for (let char of s) {
        if (pairs[char]) {
            // If it's an opening bracket, push to stack
            stack.push(char);
        } else {
            // If it's a closing bracket, check if it matches the top of the stack
            const top = stack.pop();
            if (pairs[top] !== char) return false;
        }
    }
    
    // If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
}