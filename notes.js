const fs = require("fs");
const chalk = require("chalk");

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
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

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.yellow.bold.underline("Your notes:"));

  notes.map((note) => {
    console.log(note.title);
    console.log("------------------------");
  });
};

const readNotes = (title) => {
  const notes = loadNotes();
  const noteRead = notes.find((note) => note.title === title);

  if (noteRead) {
    console.log(chalk.yellow.bold.underline(noteRead.title));
    console.log(noteRead.body);
  } else {
    console.log(chalk.red("Note not found"));
  }
};

module.exports = {
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
