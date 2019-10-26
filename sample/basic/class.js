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

    // ゲッターメソッド
    get prop1() {
        return this.field3
    }

    // セッターメソッド
    set prop1(value) {
        this.field3 = value
    }
}

// インスタンス生成
const sampleClass = new SampleClass("Test1", "Test2")
// メソッドの利用
sampleClass.sampleMethod("Test3", "Test4")
// セッター、ゲッターの使用
sampleClass.prop1 = 123
console.log(`Prop : ${sampleClass.prop1}`)

// クラスの継承
class ExtendClass extends SampleClass {
    constructor(arg1) {
        super("Test1", "Test2")
        this._field4 = arg1
    }

    sampleMethod() {
        console.log(`Fields : ${this._field1}, ${this._field2}, ${this._field3}, ${this._field4}`)
    }
}
const extendClass = new ExtendClass("Test3")
extendClass.sampleMethod()