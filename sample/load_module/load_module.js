// require: 環境変数 NODE_PATH からの相対パスで指定
// ※ launch.json 等で環境変数 NODE_PATH を指定しておくこと
const sample = require("load_module/sample_module")

// 利用
sample.sampleFunc()