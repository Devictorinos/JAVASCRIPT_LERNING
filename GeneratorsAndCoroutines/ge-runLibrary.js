function sleep(ms) {
  return function (callback) {
    setTimeout(callback, ms);
  };
}

var run = require('gen-run');

console.log(run)

run(function* () {
  console.log("Hello");
  yield sleep(1000);
  console.log("World");
});

