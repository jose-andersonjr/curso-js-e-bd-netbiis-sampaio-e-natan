const jsonString = '{"name": "José", "age": 30, "city": "Belém"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
console.log(jsonString);
jsonObject.name = "Anderson";
const jsonString2 = JSON.stringify(jsonObject);
console.log(jsonString2);
