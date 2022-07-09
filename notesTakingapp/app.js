// const fs = require('fs')
// const add = require('./utils.js')
// console.log("I am APP.JS !!!")
// console.log(add(4,7))


// const getNotes = require('./notes.js')
// // console.log(getNotes("Buy RedBull !!!"));
// const notes = getNotes("Hello From Future Trending !!!")
// const chalk = require('chalk')
// console.log(chalk.grey(notes))


// const validator = require('validator')
// const value = validator.isEmail('balamurugan.m@intersectiq.net')
// const value2 = validator.isURL('http://med.ianio')
// console.log(chalk.blue.bgRed(value2))




// // fs.writeFileSync('notes.txt','Hello from nodejs')
// // fs.appendFileSync('notes.txt',' welcome to programming')




const chalk = require("chalk")
const { argv } = require("yargs")
const yargs = require('yargs')
const notes = require("./notes")
// const command = process.argv[2]
// console.log(command)
// if(command === "add"){
//     console.log(chalk.inverse.red("Adding New Notes !!!"))
// } else if(command === "remove"){
//     console.log(chalk.inverse.blue("Removing Notes !!!"))
// }
// console.log(yargs.argv.body)
yargs.version('1.2.0')
yargs.command({
    command: 'add',
    describe: 'Adding notes !!!',
    builder: {
        title: {
            describe: 'Title of the Note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the Note',
            demandOption: true,
            type: 'string'
        }
        
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a Notes !!!',
    builder: {
        title:{
            describe: "Title to Remove",
            demandOption: true,
            type: "string"
        }

    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing notes !!!',
    builder: {
        title: {
            describe:'List All the Note Title',
        }
    },
    handler: function(){
        console.log("List all your available Notes !!!")
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    describe: 'Reading all your Notes',
    builder: {
        title: {
            describe: 'Reading Your Notes',
            demandOption: true,
            type : 'string'
        }
    },
    handler: function(argv){
        // console.log("Reading your Notes !!!")
        notes.readNote(argv.title)
    }
})

// console.log(yargs.argv)
yargs.parse()

