// 跑起來的方法： deno run --allow-all denoMain.js
import {newWorkers} from "./js/libWorker.js";

let objArgs = {"value": 100};//想要傳遞哪些參數給 workers 執行時使用
newWorkers(
    10,//啟動多少個workers一起同時工作
    "file:///Users/chiubowen/WebstormProjects/libWorker/js/worker.js",//workers要計算的程式碼在哪個 .js 檔案
    objArgs,//workers function 要用到的參數有哪些放在這邊
    aryResult => {//所有 workers 全部做完之後會把結果存入 aryResult
        console.log("aryResult:", aryResult);
    });