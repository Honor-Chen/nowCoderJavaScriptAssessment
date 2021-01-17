/**
 * 题目描述：在数组 arr 开头添加元素 item。不要直接修改数组 arr，结果返回新的数组
 * 
 */
const arr = [1, 2, 3]
const item = 4

function prepend_1 (arr, item) {
	const newArr = [item].concat(arr)
	// console.log(arr)
	return newArr
}