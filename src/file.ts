import { resolve, join } from 'path';
import fs from 'fs';

const dataPath = resolve('../data');
console.log(dataPath);
const file = join(dataPath, 'text.txt');

{
  //fs.writeFileSync(file, 'Hola mundi');
  //const content = fs.writeFileSync(file);
  //console.log(content.toString());
}

fs.readFile(file, (error, content) => {
  console.log(content);
});
