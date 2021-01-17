/*
	题目描述
	给定字符串 str，检查其是否包含 连续3个数字
	1、如果包含，返回最新出现的 3 个数字的字符串
	2、如果不包含，返回 false
*/
/*
	示例1
	输入
	'9876543'
	输出
	987
*/
function captureThreeNumbers (str) {
	const arr = str.match(/\d{3}/) // 字符串方法 match 匹配不到返回 null
	console.log(arr)
	if (arr) {
		return arr[0]
	} else {
		return false
	}
}
console.log(captureThreeNumbers('15,gfgf52'))

/**
 * 字符串方法：
 * 	String.match(reg)
 * 	String.search(reg)
 * 正则表达式方法：
 * 	Reg.test(str)
 * 	Reg.exec(str)
 */

/**
 * 一：
 * reg.exec()和str.match()在常规模式下和全局模式g下的区别
 * 非全局模式下：两者始终返回的是一个包含第一次匹配成功的字符串的数组，lastIndex不发生变化，始终为0
 */
/**
 * 
 var re1 = /[a-z]\d/ ,str = 'a1b2c3';
	re1.exec(str)
	["a1"]
	re1.exec(str)
	["a1"]
	re1.lastIndex
	0
	str.match(re1)
	["a1"]
	str.match(re1)
	["a1"]
	re1.lastIndex
	0
 */

/**
 * 全局模式下两者存在差别：
 1、对于exec()，每次执行就会更新lastIndex,也就是从新的位置进行查找，持续执行返回结果
 ["a1"]、["b2"]、["c3"]、
 null。lastIndex属性不发生变化
 2、对于str.match(),每次都
 返回符合条件的所有字符串组成的数组，["a1", "b2", "c3"]，
 lastIndex属性不发生变化（字符串方法不改变正则表达式的lastIndex属性）
 */
/**
 * 
	re2 = /[a-z]\d/g ,str = 'a1b2c3';
	re2.exec(str)
	["a1"]
	re2.lastIndex
	2
	re2.exec(str)
	["b2"]
	re2.lastIndex
	4
	str.match(re2)
	["a1", "b2", "c3"]
	re2.lastIndex
	0
	str.match(re2)
	["a1", "b2", "c3"]
	re2.lastIndex
	0
 */

/**
 * 二：
 * reg.test()和str.search)()的区别
 */
/**
 * 
	reg.test()
		用来查看正则表达式与指定的字符串是否匹配。返回 
	true
		或 
	false
	。

	非全局g模式下
	，调用该方法每次从头开始检查，lastIndex属性始终为0；

	
	re3.lastIndex
	0
	re3.test(str)
	true
	re3.lastIndex
	0


	全局模式下，
	每次匹配成功都会
	更新lastIndex属性
	，
	因此如果要检测一个字符串中是否含有与正则表达式匹配的，直接使用reg.test()的非全局状态就好了。

	
	re4.lastIndex
	0
	re4.test(str)
	true
	re4.lastIndex
	3
	re4.test(str)
	true
	re4.lastIndex
	5


	str. 
	search()
		返回正则表达式在字符串中
	首次匹配项的首个字母的索引
	。
	否则，返回 -1
	。默认为全局搜索，
	设置g是没用的，
	使用字符串方法不会改变正则表达式的lastIndex属性

	
	str.search(re3)
	2
	str.search(re3)
	2
	str.search(re4)
	2
	str.search(re4)
	2

 */