class GetSetSample {
    constructor(value) {
        this._prop = value
    }

    // ゲッター
    get prop() {
        return this._prop
    }

    // セッター
    set prop(value) {
        this._prop = value
    }
}

const sample = new GetSetSample(123)

// ゲッターの利用
console.log(sample.prop)

// セッターの利用
sample.prop = 234
console.log(sample.prop)