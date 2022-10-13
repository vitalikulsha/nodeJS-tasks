const { stdin, stdout } = process;

stdout.write("Как тебя зовут?\n");
stdin.on('data', data => {
    stdout.write(`Привет, ${data}`);
    process.exit();
});
process.on('exit', () => stdout.write('Пока!'));
