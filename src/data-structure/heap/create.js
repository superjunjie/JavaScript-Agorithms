// 默认大顶堆，从下标为1开始存储，其中根的下表为i left为i * 2 right为right * 2 + 1
const defaultCmp = (x, y) => x >= y
const swap = (arr, i, j) => { [arr[i], arr[j]] = [arr[j], arr[i]] }

class Heap {
    constructor(cmp = defaultCmp) {
        this.cmp = cmp
        this.queue = [undefined]
    }

    insert(value) {
        const { queue, cmp } = this
        queue.push(value)
        let index = this.size()
        while (index > 1) {
            const parent = index >> 1
            if (cmp(queue[parent], queue[index])) {
                return
            }
            swap(queue, index, parent)
            index = parent
        }
    }

    pop() {
        const { queue, cmp } = this
        const size = this.size()
        if (size === 0) {
            return null
        }
        swap(queue, 1, size)
        const res = queue.pop()
        let index = 1
        let exchange = index * 2
        const length = this.size()
        while (exchange <= length) {
            const right = index * 2 + 1
            if (right <= length && cmp(queue[right], queue[exchange])) {
                exchange = right
            }
            if (cmp(queue[index], queue[exchange])) {
                break
            }
            swap(queue, index, exchange)
            index = exchange
            exchange = index * 2
        }
        return res
    }

    peek() {
        if (this.size() === 0) return null
        return this.queue[1]
    }

    size() {
        return this.queue.length - 1
    }
}