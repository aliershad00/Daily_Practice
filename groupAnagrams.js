/**
 * Groups an array of strings into sub-arrays of anagrams.
 * @param {string[]} strs
 * @returns {string[][]}
 */
function groupAnagrams(strs) {
    const map = new Map();

    for (let str of strs) {
        // Sort the string alphabetically to use as a key
        const sortedStr = str.split('').sort().join('');
        
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        
        // Push the original string to the corresponding anagram group
        map.get(sortedStr).push(str);
    }

    return Array.from(map.values());
}
