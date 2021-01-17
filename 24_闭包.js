/**
 * 题目描述
实现函数 makeClosures，调用之后满足如下条件：
1、返回一个函数数组 result，长度与 arr 相同
2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同

思路： 使用map或者foreach或者for
 */
/**
 * 示例1
输入
[1, 2, 3], function (x) {
	return x * x;
}
输出
4
 */
function makeClosures_1 (arr, fn) {
	return arr.map(function (a) {
		return function () {
			return fn(a)
		}
	})
}

function makeClosures_2 (arr, fn) {
	let result = []
	for (let i = 0; i < arr.length; i++) {
		// 把动态发生变化的量写在形参里
		result.push(
			function (n) {
				return function () {
					return fn(arr[n])
				}
			}(i)
		)
	}
	return result
}
const arr = [1, 2, 3]
const fn = function (n) {
	return n * n
}
makeClosures_2(arr, fn).map(fn => console.log(fn()))