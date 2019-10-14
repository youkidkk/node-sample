// 基本

// setTimeout ： 非同期でコールバックが指定ミリ秒後に実行される
setTimeout(() => console.log("１秒後"), 1000)
// 非同期のため、先にこちらが実行される
console.log("こっちが先")


// 同期的な呼び出し
// async - await で実行終了まで待機する
async function callSync() {
    const result = await syncWait(123)
    console.log(`Result : ${result}`)
}

function syncWait(arg) {
    // Promiseオブジェクトとして返却する
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Argument : ${arg}`)
            resolve(arg * 100)
        }, 2000)
    })
}

callSync()