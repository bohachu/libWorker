function newWorker(i, workerJsFilename, objArgs) {
    return new Promise(function (resolve) {
        let w = new Worker(workerJsFilename, {type:"module"});
        w.postMessage(objArgs);
        w.onmessage = function (event) {
            resolve(event.data);
        };
    });
}

export function newWorkers(intNumWorkers, workerJsFilename, objArgs, f) {
    let aryPromises = [];
    for (let i = 0; i < intNumWorkers; i++) {
        objArgs["intWorkerIndex"] = i;
        aryPromises.push(newWorker(i, workerJsFilename, objArgs));
    }
    Promise.all(aryPromises)
        .then(function (aryResult) {
            f(aryResult);
        });
}
