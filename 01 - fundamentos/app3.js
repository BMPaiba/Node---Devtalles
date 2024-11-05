const fs = require("fs");

const content = fs.readFileSync("readme.md", "utf8");

const words = content.split(" ")

// const reactWordCount = words.filter((word) => word.toLowerCase().includes("react"))

const reactWordCount = content.match(/react/gi ?? [] )

console.log('palabras: ', words.length)

console.log('palabras: ', reactWordCount.length)