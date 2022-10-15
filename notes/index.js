const Notes = require('./Notes.js');

const notes = new Notes('notes.json');
const [command, title, content] = process.argv.slice(2);

switch (command) {
  case 'list':
    notes.list();
    break;
  case 'view':
    notes.view(title);
    break;
  case 'create':
    notes.create(title, content);
    break;
  case 'remove':
    notes.remove(title);
    break;
  default: console.log('Неизвестная команда');
}