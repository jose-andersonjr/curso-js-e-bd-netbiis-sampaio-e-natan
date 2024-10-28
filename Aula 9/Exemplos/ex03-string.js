const stringExemplo = 'Curso de JavaScript';
console.log(stringExemplo.length);
console.log(stringExemplo.indexOf('JavaScript'));
console.log(stringExemplo.lastIndexOf('JavaScript'));
console.log(stringExemplo.slice(0, 5));
console.log(stringExemplo.charAt(0));
console.log(stringExemplo.charCodeAt(0));
console.log(stringExemplo.toLowerCase());
console.log(stringExemplo.toUpperCase());
console.log(stringExemplo.startsWith('Curso'));
console.log(stringExemplo.endsWith('JavaScript'));
console.log(stringExemplo.includes('JavaScript'));
console.log(stringExemplo.substring(0, 5));
console.log(stringExemplo.replace('a', 'o'));
console.log(stringExemplo.replaceAll('a', 'o'));
console.log(stringExemplo.split(' '));
console.log(' Curso de Javascript '.trim());
console.log(stringExemplo.repeat(5));
console.log(stringExemplo.padStart('.'));
console.log(stringExemplo.padEnd('.'));

let stringExemplo2 = 'Curso de Python';
let stringExemplo3 = 'Curso de Node.js Completo';

console.log(stringExemplo.padStart(25, '-'));
console.log(stringExemplo2.padStart(25, '-'));
console.log(stringExemplo3.padStart(25, '-'));

console.log(stringExemplo.indexOf('a'));
console.log(stringExemplo.lastIndexOf('a'));

console.log(stringExemplo.match(/a/g));
console.log(stringExemplo.search('a'));
console.log('a'.localeCompare('b'));