// obj 变量声明未加var，会自动变成全局变量
function global () {
	obj = {
		name: 'honor',
		age: 28
	}
	return obj
}
// node 中 obj 为 undefined
// 修复上述函数，需要给 obj 前添加 var
console.log(obj.age)