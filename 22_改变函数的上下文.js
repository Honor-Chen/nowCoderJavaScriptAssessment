/**
 * 题目描述
将函数 fn 的执行上下文改为 obj 对象
 */
const obj = {
	name: 'honor',
	age: 28
}
function fn () {
	console.log(this.name + ', ' + this.age)
}

function speak_1 (fn, obj) {
	return fn.apply(obj)
}
// speak_1(fn, obj)

function speak_2 (fn, obj) {
	return fn.call(obj)
}
// speak_2(fn, obj)

function speak_3 (fn, obj) {
	return fn.bind(obj)()
}
speak_3(fn, obj)