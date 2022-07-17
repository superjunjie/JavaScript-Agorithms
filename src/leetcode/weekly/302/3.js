/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function (nums, queries) {
    const res = [];
    for (let i = 0; i < queries.length; i++) {
        const arr = nums.map((item) => BigInt(item.slice(item.length - queries[i][1])));
        const heap = new Heap();
        for (let j = 0; j < arr.length; j++) {
            heap.insert([arr[j], j]);
        }
        let k = queries[i][0];
        const map = new Map();
        while (k-- > 1) {
            const temp = heap.delete();
            if (map.has(temp[0])) {
                map.set(temp[0], Math.max(temp[1], map.get(temp[0])));
            }
            else {
                map.set(temp[0], temp[1]);
            }
        }
        if (heap.data.length > 0) {
            const temp = heap.delete();
            let ans = temp[1];
            if (map.has(temp[0])) {
                ans = Math.max(ans, map.get(temp[0]))
            }
            res.push(ans);
        }
    }
    return res;
};

class Heap {
    constructor() {
        this.data = [];
    }

    insert(val) {
        this.data.push(val);
        let index = this.data.length - 1;
        let fatherNodeIndex = Math.floor((index - 1) / 2);
        while (fatherNodeIndex >= 0) {
            if (this.data[index][0] < this.data[fatherNodeIndex][0]) {
                let temp1 = this.data[index][0];
                let temp2 = this.data[index][1];
                this.data[index][0] = this.data[fatherNodeIndex][0];
                this.data[index][1] = this.data[fatherNodeIndex][1];
                this.data[fatherNodeIndex][0] = temp1;
                this.data[fatherNodeIndex][1] = temp2;
            }
            else if (this.data[index][0] === this.data[fatherNodeIndex][0]) {
                if (this.data[index][1] < this.data[fatherNodeIndex][1]) {
                    let temp1 = this.data[index][0];
                    let temp2 = this.data[index][1];
                    this.data[index][0] = this.data[fatherNodeIndex][0];
                    this.data[index][1] = this.data[fatherNodeIndex][1];
                    this.data[fatherNodeIndex][0] = temp1;
                    this.data[fatherNodeIndex][1] = temp2;
                }
            }
            index = fatherNodeIndex;
            fatherNodeIndex = Math.floor((index - 1) / 2);
        }
    }

    delete() {
        let val = null;
        if (this.data.length === 1) {
            return this.data[0];
        }
        val = this.data[0];
        this.data[0] = this.data[this.data.length - 1];
        this.data.pop();
        this.siftDown(0);
        return val;
    }

    siftDown(element) {
        let index = element;
        let left = element * 2 + 1
        let right = element * 2 + 2
        if (left < this.data.length && (this.data[left][0] < this.data[element][0] || (this.data[left][0] === this.data[element][0] && this.data[left][1] < this.data[element][1]))) {
            element = left;
        }
        if (right < this.data.length && (this.data[right][0] < this.data[element][0] || (this.data[right][0] === this.data[element][0] && this.data[right][1] < this.data[element][1]))) {
            element = right;
        }
        if (index !== element) {
            let temp1 = this.data[index][0];
            let temp2 = this.data[index][1];
            this.data[index][0] = this.data[element][0];
            this.data[index][1] = this.data[element][1];
            this.data[element][0] = temp1;
            this.data[element][1] = temp2;
            this.siftDown(element);
        }
    }
}