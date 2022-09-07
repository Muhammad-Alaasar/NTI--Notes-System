const fs = require('fs')

const loadFn = () => {
    try {
        const notes = fs.readFileSync('Notes.json').toString()
        const notesObject = JSON.parse(notes)
        return notesObject
    } catch (e) {
        return []
    }
}

const saveFn = (data) => {
    const jsonData = JSON.stringify(data)
    fs.writeFileSync('Notes.json', jsonData)
    return true
}

const addFn = (title, body) => {
    const notes = loadFn()
    if (notes.some(obj => obj.title === title)) {
        console.log('Your note was saved earlier; please write another note')
    } else {
        notes.push({
            title,
            body
        })
        saveFn(notes)
        console.log('Your note was saved')
    }
}

const deleteFn = title => {
    const notes = loadFn()
    const newAr = notes.find((el, i) => {
        el.title === title &&
        notes.splice(i, 1) &&
        saveFn(notes) &&
        console.log('Your note was deleted')
        return el.title === title
    })
    !newAr && console.log('There is no note for this title..!')

    /**
     * Another Logic
     */
    // const notes = loadFn()
    // if (notes.some(obj => obj.title === title)){
    //     const newNotes = notes.filter(note => note.title !== title)
    //     saveFn(newNotes)
    //     console.log('Your note was deleted')
    // } else {
    //     console.log('There is no note for this title..!')
    // }
}

const readFn = title => {
    const notes = loadFn()
    const note = notes.find(note => note.title === title)
    if (note) {
        console.log(note.body)
    } else {
        console.log('There is no note for this title..!')
    }
}
const listFn = () => {
    const notes = loadFn()
    if (notes.length) {
        notes.forEach(n => console.log(n.body))
    } else {
        console.log('Not have a notes!')
    }
    /**
     * Another Logic
     */
    // const notes = loadFn()
    // notes.length ? console.log('You have ' + (notes.length == 1 ? "1 note:" : notes.length + " notes: "), ...notes) : console.log("Not have a notes!")
}
module.exports = {
    addFn,
    deleteFn,
    readFn,
    listFn
}