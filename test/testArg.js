const { stdin, stdout, exit } = process;
const flag = process.argv[2];
const allowedFlags = ['-m', '-s'];

if (!allowedFlags.includes(flag)) {
  stdout.write('Попробуйте ещё раз запустить файл с флагом -s или -m');
  exit();
}

stdout.write('Введите 2 числа через пробел:\n');
stdin.on('data', data => {
  const numStrArr = data.toString().split(' ');
  const hasIncorrectLength = numStrArr.length !== 2;
  const hasIncorrectValue = numStrArr.some(numStr => Number.isNaN(+numStr));
  if (hasIncorrectLength || hasIncorrectValue) {
    stdout.write('Нужно ввести 2 числа, разделенных пробелом\n');
    exit();
  }
  const [first, second] = numStrArr.map(numStr => +numStr);
  flag === '-s'
    ? stdout.write(`${first} + ${second} = ${first + second}`)
    : stdout.write(`${first} * ${second} = ${first * second}`)
  exit();
});