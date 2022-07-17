/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
    const map = new Map()
    let ans = -1
    for (let i = 0; i < nums.length; i++) {
        let sum = 0
        let tmp = nums[i]
        while (tmp) {
            sum += tmp % 10
            tmp = ~~(tmp / 10)
        }
        if (map.has(sum)) {
            ans = Math.max(ans, nums[i] + map.get(sum))
            if (map.get(sum) < nums[i]) {
                map.set(sum, nums[i])
            }
        } else {
            map.set(sum, nums[i])
        }
    }
    return ans
};