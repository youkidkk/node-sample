class SampleClass {
    // コンストラクタ
    constructor(arg1, arg2) {
        this._field1 = arg1
        this._field2 = arg2
        this._field3 = 0
    }

    // メソッド
    sampleMethod(arg1, arg2) {
        console.log(`Fields : ${this._field1}, ${this._field2}, ${this._field3}`)
        console.log(`Args : ${arg1}, ${arg2}`)
    }
}

// インスタンス生成
const sample = new SampleClass("Test1", "Test2")
// メソッドの利用
sample.sampleMethod("Test3", "Test4")