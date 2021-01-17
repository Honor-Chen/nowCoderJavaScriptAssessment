/**
 * 题目描述
移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
 */
const arr = [1, 2, 3, 3, 4]
const target = 3
// for 循环，查找与 item 相同的元素，若不同则 push 到 result 中。

// 使用 filter 方法。

// 使用字符串 replace 方法。
function remove (arr, target) {
	let reg = new RegExp(target, 'g')
	let arr1 = arr.join('').replace(reg, '').split('').map(n => +n)
	return arr1
}
console.log(remove(arr, target))