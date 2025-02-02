import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

{
  yargs(hideBin(process.argv))
    .command(
      'check-age <age>',
      'Check if you are an adult',
      (yargs) => {
        return yargs.positional('age', {
          describe: 'Your age',
          type: 'number',
        });
      },
      (argv) => {
        const mensaje = argv.age >= 18 ? 'Eres un adulto' : 'Eres un menor';
        console.log(mensaje);
      },
    )
    .demandCommand(1)
    .help()
    .parse();
}
