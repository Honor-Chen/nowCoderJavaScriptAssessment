/**
 * 问题描述：实现函数 callIt，调用之后满足如下条件
			1、返回的结果为调用 fn 之后的结果
			2、fn 的调用参数为 callIt 的第一个参数之后的全部参数
 */
function callIt (fn) {
	// call 第一个参数是 this 指向新的上下文环境，第二个参数是一个数组
	// arguments 是一个类数组对象
	let args = [].slice.call(arguments, 1)
	return fn.apply(null, args)
}
function print () {
	console.log(...arguments)
}
callIt(print, 1,2,3)