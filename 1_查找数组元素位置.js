/*
题目描述:
找出元素 item 在给定数组 arr 中的位置
输出描述:
如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1
*/
/*
输入:
[ 1, 2, 3, 4 ], 3
输出:
2
*/
const arr = [1, 2, 3, 4]
const target = 3

// indexOf() 方法返回在数组中可以找到一个给定元素的第一个索引，若不存在则返回 -1.
function indexOf_1 (arr, target) {
	return arr.indexOf(target)
}

// includes
function indexOf_2 (arr, target) {
	if (arr.includes(target)) {
		return arr.indexOf(target)
	}
	return -1
}

console.log(indexOf_2(arr, target))