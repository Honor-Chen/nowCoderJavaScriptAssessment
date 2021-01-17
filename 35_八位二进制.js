/**
 * 问题描述：
			将给定数字转换成二进制字符串。如果字符串长度不足 8 位，则在前面补 0 到满8位。
		解题思路：
			可以直接用if 也可以用slice
 */
function convertToBinary (num) {
	let result = num.toString(2)
	if (result.length < 8) {
		while (result.length < 8) {
			result = '0' + result
		}
	}
	return result
}
console.log(convertToBinary(65))

/**
 * 二进制 转 八进制
 * parseInt(num, 2).toString(8)
 * 八进制 转 十进制
 * parseInt(num, 8)
 */