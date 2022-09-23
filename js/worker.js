onmessage = (e) => {
  const workerResult = `Result: ${e.data["intWorkerIndex"] + e.data["value"]}`;
  postMessage(workerResult);
}
