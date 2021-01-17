/**
 * 问题描述：
			求 a 和 b 相乘的值，a 和 b 可能是小数，需要注意结果的精度问题 
		解题思路：
			3*0.0001直接乘会得到0.00030000000000000003，有误差，手动保留小数即可
 */
function multiply (a, b) {
	let str_1 = a.toString()
	let str_2 = b.toString()
	let len = (str_1.split('.')[1] || '').length + (str_2.split('.')[1] || '').length
	return parseFloat((a * b).toFixed(len))
}

console.log(multiply (3, 0.0001))