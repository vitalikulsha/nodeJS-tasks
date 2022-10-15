const fs = require('fs');

function Notes(filename) {
  this.fileName = filename;

  this.create = function (title, content) {
    fs.access(this.fileName, fs.constants.F_OK, err => {
      if (err) this.init();

      fs.readFile(this.fileName, (err, data) => {
        if (err) return console.log(err.message);
        const notes = JSON.parse(data);
        notes.push({ title, content });
        const json = JSON.stringify(notes);
        this.write(json);
        console.log('Заметка создана');
      });
    });
  }

  this.list = function () {
    fs.readFile(filename, (err, data) => {
      if (err) return console.log(err.message);
      const notes = JSON.parse(data);
      notes.forEach((note, i) => console.log(`${i + 1} - ${note.title}: ${note.content}`));
    });
  }

  this.view = function (title) {
    fs.readFile(filename, (err, data) => {
      if (err) return console.log(err.message);
      const notes = JSON.parse(data);
      const note = notes.find(note => note.title === title);
      note ? console.log(`${title}: ${note.content}`) : console.log("Заметка не найдена");
    });
  }

  this.remove = function (title) {
    fs.readFile(filename, (err, data) => {
      if (err) return console.log(err.message);
      let notes = JSON.parse(data);
      notes = notes.filter(note => note.title !== title);
      const json = JSON.stringify(notes);
      this.write(json);
      console.log('Заметка удалена');
    });
  }

  this.init = function () {
    fs.writeFile(this.fileName, '[]', err => {
      if (err) return console.log(err.message);
    });
  }

  this.write = function (content) {
    fs.writeFile(this.fileName, content, (err) => {
      if (err) return console.log(err.message);
    });
  }
}

module.exports = Notes;
