let agora = new Date();
console.log(agora);

let dataEspecifica = new Date(2021, 7, 14, 22, 15, 30);
console.log(dataEspecifica);

let dataEspecifica2 = new Date('2021-7-14T22:15:30');
console.log(dataEspecifica);

let dataEspecifica3 = new Date('2021-7-14');
console.log(dataEspecifica);

console.log(agora.getFullYear());
console.log(agora.getMonth() + 1);
console.log(agora.getDate());
console.log(agora.getDay());
console.log(agora.getHours());
console.log(agora.getMinutes());
console.log(agora.getSeconds());
console.log(agora.getTime());

let teste = new Date(1728001558626);
console.log(teste);


const dataCompleta = `${agora.getDate()}/${agora.getMonth() + 1}/${agora.getFullYear()}`;
console.log(dataCompleta);