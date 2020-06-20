const getNotes = require("./notes.js");
const yargs = require("yargs");

yargs
  .command({
    command: "add",
    describe: "Adding command",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
      author: {
        describe: "author",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      getNotes.addNote(argv.title, argv.author);
    },
  })
  .parse();

yargs
  .command({
    command: "remove",
    describe: "remove command",
    builder: {
      title: {
        describe: "Remove Note title",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      getNotes.removeNote(argv.title);
    },
  })
  .parse();
