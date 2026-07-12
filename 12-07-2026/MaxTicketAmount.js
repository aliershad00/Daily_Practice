/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
class Solution {
    maxAmount(arr, k) {
        const MOD = 1000000007n;
        
        // Sort array in descending order
        arr.sort((a, b) => b - a);
        arr.push(0); // Sentinel value
        
        let totalAmount = 0n;
        let count = 1n; // Number of elements at the current highest level
        let kBig = BigInt(k);
        
        for (let i = 0; i < arr.length - 1 && kBig > 0n; i++) {
            let current = BigInt(arr[i]);
            let next = BigInt(arr[i + 1]);
            
            // Difference in height between current level and next level
            let diff = current - next;
            
            if (diff === 0n) {
                count++;
                continue;
            }
            
            // Total tickets we can sell across all `count` sellers in this range
            let totalAvailableAtThisLevel = diff * count;
            
            let ticketsToTake = totalAvailableAtThisLevel < kBig ? totalAvailableAtThisLevel : kBig;
            let fullSteps = ticketsToTake / count;
            let remainder = ticketsToTake % count;
            
            // Sum of AP for full steps: sum from (current) down to (current - fullSteps + 1)
            let high = current;
            let low = current - fullSteps;
            let sumFull = (((high + low + 1n) * fullSteps) / 2n) % MOD;
            let term1 = (sumFull * count) % MOD;
            
            // Sum for the remaining individual tickets
            let nextVal = current - fullSteps;
            let term2 = (nextVal * remainder) % MOD;
            
            totalAmount = (totalAmount + term1 + term2) % MOD;
            kBig -= ticketsToTake;
            count++;
        }
        
        return Number(totalAmount);
    }
}