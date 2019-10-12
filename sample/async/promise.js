function asyncFunction(max) {
    // Promise の生成
    // ・resolve：成功時
    // ・reject：エラー時
    const promise = new Promise(function (resolve, reject) {
        if (max > 0) {
            console.log(`Start! max : ${max}`)
            for (let i = 1; i <= max; i++) {
                console.log(i)
            }
            // 成功時：結果を引数として resolve を呼び出す
            resolve(`End! max : ${max}`)
        } else {
            // エラー時：エラーオブジェクトを引数として reject を呼び出す
            reject(new Error(`Error! max : ${max}`))
        }
    })
    return promise
}

// 非同期処理の実行
asyncFunction(5)
    // then：非同期処理後に実行される
    // 非同期処理の結果（resolve の引数）がコールバックの引数となる
    .then(result => console.log(result))
    // catch：非同期処理でエラー時に実行される
    // 非同期処理での reject の引数がコールバックの引数となる
    .catch(error => console.log(error))
    // catch後の then：try～catch～finally の finally に相当
    .then(() => console.log("Finally!"))