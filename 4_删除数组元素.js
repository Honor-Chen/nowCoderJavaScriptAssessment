/**
 * 题目描述：移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回
		解题思路：splice函数
		---
		如果不用splice函数，可以用循环队列的思想，看成一个队列，然后使用shift和push（评论区看到的）
 */
const arr = [1, 2, 3, 5, 5, 5, 6, 7]
const target = 5

function removeWithoutCopy_1 (arr, item) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === item) {
			arr.splice(i, 1)
			--i
		}
	}
	return arr
}

function removeWithoutCopy_2 (arr, item) {
	const len = arr.length	// 拿取 arr 的长度，避免 arr 长度变化，而影响循环中 len 变化。若在循环中用 arr.length 则会出错。
	for (let i = 0; i < len; i++) {
		if (arr[0] !== item) {
			arr.push(arr[0])
		}
		arr.shift()
	}
	return arr
}
console.log(removeWithoutCopy_2(arr, target))