import { franc } from 'franc';
import langs from 'langs';

const input = process.argv[2];
//console.log("INPUT IS: " + input)

const langCode = franc(input);
//console.log("LANGCODE IS: " + langCode)

const language = langs.where("3", langCode);
//console.log("LANGUAGE IS: " + language)
console.log(language.name);