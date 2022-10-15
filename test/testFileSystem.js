const { stdin, stdout, exit } = process;
const flag = process.argv[2];
const allowedFlags = ['-d', '-f'];

if (flag !== '-d' && flag !== '-f') {
  stdout.write('Попробуйте ещё раз запустить файл с флагом -f или -d');
  exit();
}

flag === '-f' ? stdout.write(__filename) : stdout.write(__dirname);