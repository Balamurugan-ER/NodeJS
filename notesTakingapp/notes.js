const fs = require('fs')
const chalk = require('chalk')
const getNotes =(value)=>{
    return value
}
const addNote = function(title,body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })
    debugger
    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.red.inverse("New Note Added  !!!  "))
    }
    else{
        console.log(chalk.blue.inverse("Title Already Taken !!!"))
    }
}
const saveNotes = function(notes){
    const dataValue = JSON.stringify(notes)
    fs.writeFileSync('data.json',dataValue)
}
const loadNotes = function (){
    try{
        const dataBuffer = fs.readFileSync('data.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch(e){
        return []
    }

}
const removeNote = function(title){
    // console.log(title)
    const notes = loadNotes()
    const KeyTitle = notes.filter(function(note){
        return note.title !== title
    })
    if(KeyTitle.length < notes.length){
        console.log(chalk.green.inverse("Note Removed Successfully"))  
    }
    else{
        console.log(chalk.red.inverse("No Note Found !!"))
    }
    saveNotes(KeyTitle)

}
const listNotes = ()=>{
    const notes = loadNotes()
    notes.forEach(element => {
        console.log(`
        Title: ${element.title}
        `)
    });
}
const readNote = (title)=>{
    const notes = loadNotes()
    // const readTitle = notes.find((note)=> note.title === title)
    const note = notes.find((note) => note.title == title)
    if(note != undefined){
        console.log(chalk.inverse.green(note.title))
        console.log(chalk.inverse(note.body))
    }else{
        console.log(chalk.inverse.red("Invalid Title !!!"))
    }
}
module.exports = {
    getnotes : getNotes,
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
}