const fs = require("fs");
const yargs = require("yargs");

const { addNotes, removeNotes, listNotes, readNotes } = require("./notes.js");

//Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    addNotes(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    removeNotes(argv.title);
  },
});

// Create read command
yargs.command({
  command: "read",
  describe: "read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    readNotes(argv.title);
  },
});

// Creat list command
yargs.command({
  command: "list",
  describe: "list the notes",
  handler: () => {
    listNotes();
  },
});

//add, remove, read, list

yargs.parse();
