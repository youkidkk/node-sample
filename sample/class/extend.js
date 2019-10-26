class Parent {
    constructor(arg1, arg2) {
        this._field1 = arg1
        this._field2 = arg2
    }

    method() {
        return `Fields : ${this._field1}, ${this._field2}`
    }
}

// 継承クラスの宣言
class Child extends Parent {
    constructor(arg1, arg2, arg3) {
        // スーパークラスのコンストラクタ呼び出し
        super(arg1, arg2)
        this._field3 = arg3
    }

    method() {
        // スーパークラスのメソッド呼び出し
        let result = super.method()
        return result + `, ${this._field3}`
    }
}

const child = new Child(123, 234, 345)
console.log(child.method())