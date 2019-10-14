function sleep(sec) {
    return new Promise(resolve => setTimeout(resolve, sec * 1000))
}

// async
// 戻り値が Promiseオブジェクトとなる
async function asyncFunction(num) {
    if (num <= 3) {
        await sleep(1)
        // async関数内の return -> Promise の resolve に相当
        return num * 100
    } else {
        // async関数内の throw -> Promise の reject に相当
        throw new Error(`Error! Seconds : ${num}`)
    }
}

async function awaitFunction() {
    let breakFlg = false
    for (let i = 1; i <= 5; i++) {
        // await
        // async関数の終了まで待機する
        const result = await asyncFunction(i)
            // catch -> reject の引数がコールバックの引数となる
            .catch((err) => {
                console.log(err)
                breakFlg = true
            })
        if (breakFlg) {
            break
        }
        console.log(result)
    }
}

awaitFunction()