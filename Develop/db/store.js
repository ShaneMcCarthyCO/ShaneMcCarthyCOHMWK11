const util = require("util")
const fs = require("fs")
const {v4 : uuidv4} = require("uuid")

const readfile = util.promisify(fs.readFile)
const writefile = util.promisify(fs.writeFile)

class Store{
read(){
return readfile("db/db.json","utf8")

}
writefile(note){
    return writefile("db/db.json",JSON.stringify(note))
}
getNotes(){
return this.read().then((notes) =>{
    let mynotes
    try{
        mynotes = [].concat(JSON.parse(notes))
    }
    catch(error){
        mynotes = []
    }
    return mynotes
})

}
addNotes(note){
const {text,title} = note
if(!text||!title){
    throw new Error("please put in title and text for the note") 

}
const newNote = {
text,title,ID:uuidv4()
}
return this.getNotes()
.then((notes) =>[...notes,newNote])
.then((updatedNotes) => this.write(updatedNotes))
.then(() => newNote)
}
removeNote(id){
return this.getNotes()
.then((notes) => notes.filter((note) => note.ID!==id))
.then((filterNotes) => this.write(filterNotes))
}
}
module.exports = new Store()