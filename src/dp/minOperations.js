
/**
 * @param {string} boxes
 * @return {number[]}
 * @link https://leetcode.cn/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/
 * @description 移动所有球到每个盒子所需的最小操作数
 */
var minOperations = function (boxes) {
  const n = boxes.length
  const res = new Array(n).fill(0)
  let pre = 0
  let cnt = 0
  for (let i = 1; i < n; i++) {
    if (boxes[i - 1] === '1') cnt++
    res[i] += pre + cnt
    pre += cnt
  }
  pre = 0
  cnt = 0
  for (let i = n - 2; i >= 0; i--) {
    if (boxes[i + 1] === '1') cnt++
    res[i] += pre + cnt
    pre += cnt
  }
  return res
};

console.log(minOperations('110'))