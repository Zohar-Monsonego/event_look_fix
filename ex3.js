// ex3.js
function run() {
  for (var i = 0; i < 3; i++) {
    getNumber(i);
  }
}

function getNumber(num) {
  setTimeout(() => console.log(num), 0);
}

if (typeof module !== "undefined") module.exports = { run };
