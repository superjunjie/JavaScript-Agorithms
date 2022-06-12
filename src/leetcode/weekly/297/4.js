/**
 * @param {string[]} ideas
 * @return {number}
 * @method 动态规划
 * @link https://leetcode.cn/problems/naming-a-company/
 */
var distinctNames = function (ideas) {
    let sfxCount = new Array(26).fill(0);
    let preExcept = new Array(25).fill(0).map(() => new Array(26).fill(0));
    let sfxMp = new Map();
    for (let i = 0; i < ideas.length; ++i) {
        let pre = ideas[i].charCodeAt(0) - 97;
        let sfx = ideas[i].slice(1);
        sfxCount[pre]++;
        if (!sfxMp.has(sfx)) sfxMp.set(sfx, [pre]);
        else {
            let tmp = sfxMp.get(sfx);
            for (let p of tmp) preExcept[Math.min(p, pre)][Math.max(p, pre)]++;
            tmp.push(pre);
            sfxMp.set(sfx, tmp);
        }
    }
    let res = 0;
    for (let i = 0; i < 25; ++i) {
        for (let j = i + 1; j < 26; ++j) {
            if (sfxCount[i] > 0 && sfxCount[j] > 0)
                res += (sfxCount[i] - preExcept[i][j]) * (sfxCount[j] - preExcept[i][j]) * 2;
        }
    }
    return res;
};