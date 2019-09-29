const axios = require("axios")
const url = "http://localhost:3000"

// 非同期実行
axios.get(url).then(res => {
    console.log(`Async Get: ${res.data}`)
})

// 同期実行
const asyncGet = async () => {
    let res = await axios.get(url)
    console.log(`Sync Get: ${res.data}`)
}
asyncGet()