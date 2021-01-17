/**
 * 问题描述：
			将函数 fn 的执行上下文改为 obj，返回 fn 执行后的值
 */
function alterContext (fn, obj) {
	return fn.call(obj)
}
function test_fn () {
	return this.greeting + ', ' + this.name + '!'
}
const test_obj = {
	greeting: 'Honor',
	name: 'Chen'
}
console.log(alterContext(test_fn, test_obj))