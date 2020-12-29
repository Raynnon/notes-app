const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes...";
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    console.log(chalk.black.bgGreen("New note added"));
  } else {
    console.log(chalk.black.bgRed("Note title taken :("));
  }

  saveNotes(notes);
};

const removeNotes = (title) => {
  const notes = loadNotes();

  const notesFiltered = notes.filter((note) => {
    return note.title !== title;
  });
  console.log(notesFiltered);

  if (notesFiltered.length < notes.length) {
    saveNotes(notesFiltered);
    console.log(chalk.black.bgGreen("Note removed!"));
  } else {
    console.log(chalk.black.bgRed("No note found"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNotes: addNotes,
  removeNotes: removeNotes,
};
