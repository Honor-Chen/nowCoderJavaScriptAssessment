/**
 * 问题描述：
		已知 fn 为一个预定义函数，实现函数 curryIt，调用之后满足如下条件：
		1、返回一个函数 a，a 的 length 属性值为 1（即显式声明 a 接收一个参数）
		2、调用 a 之后，返回一个函数 b, b 的 length 属性值为 1
		3、调用 b 之后，返回一个函数 c, c 的 length 属性值为 1
		4、调用 c 之后，返回的结果与调用 fn 的返回值一致
		5、fn 的参数依次为函数 a, b, c 的调用参数
 */
function fn (a, b, c) {
	return a + b + c
}
function curryIt (fn) {
	let len = fn.length	// fn 要求必须的参数 a, b, c
	let args = []	// 收集 arg 参数
	let result = function (arg) {
		args.push(arg)
		if (--len === 0) {
			return fn.apply(null, args)
		} else {
			return result
		}
	}
	return result
}
// console.log(curryIt(fn)(1)(2)(3))
/**
 * 番外篇
 */
function add (a) {
	return function (b) {
		return (+a) + (+b) + ''
	}
}
function multiply (a) {
	return function (b) {
		return (+a) * (+b) + ''
	}
}
function concatStr (arrStr, fn) {
	// 将函数传入 map / filter / reduce 方法中，可配置化高
	return arrStr.map(fn)
		.reduce(function (a, b) {
			return a.concat(b)
		})
}
console.log(concatStr(['1', '2', '3'], add(1)))
console.log(concatStr(['1', '2', '3'], multiply(2)))
