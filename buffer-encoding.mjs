const buffer = Buffer.from("Alvin Rahmat maulana", "utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("QWx2aW4gUmFobWF0IG1hdWxhbmE=", "base64");
console.info(bufferBase64.toString("utf8"));