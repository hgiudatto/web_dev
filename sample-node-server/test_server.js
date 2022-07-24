function bytesToSize(bytes) {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes == 0) return "0 Byte";
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
}

const os = require("os");
console.log(os.platform());
console.log(os.release());

const freeBytes = os.freemem();
console.log(`Free Mem: ${bytesToSize(freeBytes)}`);
const totalBytes = os.totalmem();
console.log(`Total Mem: ${bytesToSize(totalBytes)}`);

const fs = require("fs");
fs.writeFile("./texto.txt", "linea uno", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Archivo creado");
});
