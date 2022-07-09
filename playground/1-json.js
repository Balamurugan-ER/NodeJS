const fs = require('fs')
// const { stringify } = require('querystring')
// const book = {
//     title: 'Ego is Enemy',
//     author: 'Ryan Holiday'
// }
// const bookJson = JSON.stringify(book)
// // console.log(bookJson)
// // const bookParsed = JSON.parse(bookJson)
// // console.log(bookParsed.title)

// fs.writeFileSync('1-json.json',bookJson)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJson = dataBuffer.toString()
// const data = JSON.parse(dataJson)
// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()
const data = JSON.parse(dataJson)
// console.log(dataJson)
data.name = "Bala"
data.age = 22
// console.log(data)
const userData = JSON.stringify(data)
fs.writeFileSync('1-json.json',userData)