/**
 * 问题描述：
			找出对象 obj 不在原型链上的属性(注意这题测试例子的冒号后面也有一个空格~)
			1、返回数组，格式为 key: value
			2、结果数组不要求顺序
 */
function iterate (obj) {
	const result = []
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			result.push(key + ": " + obj[key])
		}
	}
	return result
}
const C = function () {
	this.foo = 'foo'
	this.baz = 'baz'
}
C.prototype.bop = 'bop'
console.log(iterate(new C()))