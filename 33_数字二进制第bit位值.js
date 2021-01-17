/**
 * 题目描述
		获取数字 num 二进制形式第 bit 位的值。注意：
		1、bit 从 1 开始
		2、返回 0 或 1
		3、举例：2 的二进制为 10，第 1 位为 0，第 2 位为 1
		解题思路：
			可以直接移位，也可以使用tostring进行操作
 */
/**
 * 示例1
		输入
		128, 8
		输出
		1
 */
// 方法一
function valueAtBit (num, bit) {
	// 将数字 num 转为二进制数字字符串
	let str = parseInt(num).toString(2)
	// 转为字符串数组
	let bitList = str.split('').reverse()
	return bitList[bit - 1]
}
// 方法二
function valueAtBit_1 (num, bit) {
	return (num >> (bit - 1)) % 2
}
console.log(valueAtBit_1(128, 8))