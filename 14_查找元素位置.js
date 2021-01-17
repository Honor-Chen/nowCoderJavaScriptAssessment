/*
题目描述
在数组 arr 中，查找值与 item 相等的元素出现的所有位置
*/
/*
示例1
输入
'abcdefabc'
输出
[0, 6]
*/

function findAllOccurrences (arr, target) {
	return arr.split('').reduce(function (prev, cur, curIndex) {
		if (cur === target) {
			prev.push(curIndex)
		}
		return prev
	}, [])
}
console.log(findAllOccurrences('abcdefabc', 'a'))