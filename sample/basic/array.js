// 配列の生成
const array1 = new Array("test1-1", "test1-2", "test1-3")
const array2 = ["test1-1", "test1-2", "test1-3"]
console.log(array1)
console.log(array2)

// 要素の取得
console.log(array1[0], array1[1], array1[2])

// 配列長の取得
console.log(array1.length) // -> 3

// 配列の結合
console.log(array1.concat(array2))

// 配列の要素で繰り返し
array1.forEach(item => console.log(item))

// 配列の要素を結合
console.log(array1.join("/")) // -> test1-1/test1-2/test1-3

// 要素の検索
console.log(array1.indexOf("test1-2")) // -> 1
// 該当なしの場合は -1 となる
console.log(array1.indexOf("test1-4")) // -> -1

// 要素の追加
const array3 = new Array()
array3.push("test3-1")
array3.push("test3-2")
array3.push("test3-3")
console.log(array3)

// 末尾の要素の取得と削除
const item = array3.pop()
console.log(item) // -> test3-3
console.log(array3) // -> Array(2) ["test3-1", "test3-2"]