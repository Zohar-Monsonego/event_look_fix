// ex2.js
function run() {
  setTimeout(() => console.log("first"), 2);
  setTimeout(() => console.log("second"), 2);
  setTimeout(() => console.log("third"), 2);
}

if (typeof module !== "undefined") module.exports = { run };
