const fs = require("fs");
const yargs = require("yargs");

const { addNotes, removeNotes } = require("./notes.js");

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
  handler: () => {
    console.log("Reading a note");
  },
});

// Creat list command
yargs.command({
  command: "list",
  describe: "list the notes",
  handler: () => {
    console.log("Listing the notes");
  },
});

//add, remove, read, list

yargs.parse();
