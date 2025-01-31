import minimist from 'minimist';

const args = minimist(process.argv.slice(2), {
  boolean: ['help', 'version'],
  string: ['name', 'lastname'],
  alias: { h: 'help', v: 'version' },
});

console.log(args);


