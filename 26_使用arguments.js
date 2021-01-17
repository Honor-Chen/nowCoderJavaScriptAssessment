/**
 * 问题描述：函数 useArguments 可以接收 1 个及以上的参数。请实现函数 useArguments，返回所有调用参数相加后的结果。本题的测试参数全部为 Number 类型，不需考虑参数转换。
	
		解题思路：可以用循环，也可以用array的slice，将参数作为this传入，可以直接获得数组
 */
function useArguments_1 () {
	let sum = 0
	for (let n of arguments) {
		sum += n
	}
	return sum
}
function useArguments_2 () {
	// console.log(arguments)
	let args = [].slice.call(arguments, 0)
	return args.reduce(function (prev, next) {
		return prev + next
	})
}
function useArguments_3 (...rest) {
	// console.log(rest)
	return rest.reduce((a, b) => {
		return a + b
	})
}
console.log(useArguments_3(1, 2, 3))