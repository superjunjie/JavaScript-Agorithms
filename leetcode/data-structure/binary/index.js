const { generateBinarySearchTree } = require('./create')
const { inOrderTraversal } = require('./traverse')

const root = generateBinarySearchTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1])
console.log(inOrderTraversal(root, 22))