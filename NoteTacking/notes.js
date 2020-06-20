const fs = require("fs");
const addNote = function (title, author) {
  const notes = loadFile();
  const dublicate = notes.filter(function (note) {
    return note.title === title;
  });
  if (dublicate.length === 0) {
    notes.push({
      title: title,
      author: author,
    });
    saveNotes(notes);
    console.log("new note added");
  } else {
    console.log("Title already exist");
  }
};

const removeNote = function (title) {
  const notes = loadFile();
  const notesToKeep = notes.filter(function (note) {
    return note.title !== title;
  });
  saveNotes(notesToKeep);
};

const loadFile = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

const saveNotes = function (note) {
  const dataJSON = JSON.stringify(note);
  fs.writeFileSync("notes.json", dataJSON);
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
};
