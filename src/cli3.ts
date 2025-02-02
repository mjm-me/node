import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

const createNote = async (content: string, tags: string[]) => {
  console.log('Creating note...');
  const newNote = { content, tags };
  return newNote;
};

yargs(hideBin(process.argv))
  .command(
    'new <note>',
    'create a new note',
    (yargs) => {
      return yargs.positional('note', {
        describe: 'The content of the note you want to create',
        type: 'string',
      });
    },
    async (argv) => {
      // console.log('Procesando comando new');
      // console.log({ argv });
      const content = argv.note;
      if (!content) {
        console.error('You must provide a note to create');
        process.exit(1);
      }
      const tags: string[] = argv.tags ? (argv.tags as string).split(',') : [];
      const newNote = await createNote(content, tags);
      console.log('Note created!', newNote);
    },
  )
  .option('tags', {
    alias: 't',
    type: 'string',
    description: 'tags to add to the note',
  })
  .demandCommand(1)
  .parse();
