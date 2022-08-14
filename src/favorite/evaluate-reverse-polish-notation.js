/**
 * @param {string[]} tokens
 * @return {number}
 * @link https://leetcode.cn/problems/evaluate-reverse-polish-notation/
 * @description 逆波兰表表达式求值
 */
var evalRPN = function (tokens) {
    const token = ['+', '-', '*', '/']
    const stack = []
    for (let i = 0; i < tokens.length; i++) {
        if (token.includes(tokens[i])) {
            const a = stack.pop()
            const b = stack.pop()
            switch (token.indexOf(tokens[i])) {
                case 0:
                    stack.push(b + a)
                    break
                case 1:
                    stack.push(b - a)
                    break
                case 2:
                    stack.push(b * a)
                    break
                case 3:
                    stack.push(~~(b / a))
                    break
                default:
                    stack.pop()
                    break
            }
        } else {
            stack.push(tokens[i] - 0)
        }
    }
    return stack.length === 1 ? stack[0] : -1
}  