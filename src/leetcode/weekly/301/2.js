
var SmallestInfiniteSet = function () {
    this.min = 1
    this.used = new Set()
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
    while (this.used.has(this.min)) {
        this.min++
    }
    this.used.add(this.min)
    return this.min++
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
    if (!this.used.has(num)) return
    this.used.delete(num)
    this.min = Math.min(this.min, num)
};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */