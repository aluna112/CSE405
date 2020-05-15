
const os = require("os");

var type = os.type();
var osV = os.release();
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
var upTime = os.uptime();

console.log("OS: " + type + " " + osV);
console.log("Total Memory: " + totalMemory);
console.log("Free Memory: " + freeMemory);
console.log("Up Time: " + upTime);

