// JSON作成
const json = {
    // 数値
    "number": 123,
    // 文字列
    "text": "text sample",
    // Null値
    "null": null,
    // 真偽値
    "bool": true,
    // オブジェクト
    "object": {
        "field": "field value"
    },
    // 配列
    "array": ["sample1", "sample2", "sample3"]
}

// 文字列表現の取得
console.log(JSON.stringify(json))
console.log(json.number)

// 要素の取得
console.log(json.number)
console.log(json.object.field)
console.log(json.array[0])

// 要素の変更
json.number = 234
json.object.field = "Sample value"
json.array[0] = "sample4"
console.log(JSON.stringify(json))

// 要素の追加
json.new_item = "Sample value"
console.log(JSON.stringify(json))

// 要素の削除
delete json.new_item
console.log(JSON.stringify(json))