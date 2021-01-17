/**
 * 题目描述
将数组 arr 中的元素作为调用函数 fn 的参数
 */
/**
 * 示例1
输入
function (greeting, name, punctuation)
{return greeting + ', ' + name + (punctuation || '!');}
, ['Hello', 'Ellie', '!']
输出
Hello, Ellie!
 */
function fn (greeting, name, punctuation) {
	return greeting + ' ' + name + ' ' + (punctuation || '!')
}
const arr = ['hello', 'honor', '!']

function argsAsArr_1 (fn, arr) {
	return fn.apply(fn, arr)
}

function argsAsArr_2 (fn, arr) {
	return fn(...arr)
}
console.log(argsAsArr_2(fn, arr))