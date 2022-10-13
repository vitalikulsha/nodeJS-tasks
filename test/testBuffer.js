const { stdin, stdout } = process;

stdout.write("Как тебя зовут?\n");
stdin.on('data', data => {
  const dataStringified = data.toString();
  stdout.write(`Привет, ${dataStringified.split('').reverse().join('')}\n`);
  process.exit();
});
process.on('exit', () => stdout.write('Пока!'));
