// const person = {
// 	// name: 'Andrew',
// 	age: 26,
// 	location: {
// 		city: 'philadelphia',
// 		temp: 92
// 	}
// };
//
// const {name = 'Anonymus', age} = person;
//
// console.log(`${name} is ${age}`);
//
// const {city, temp: temperature} = person.location;
//
// console.log(`it's ${temperature} in ${city}`);

//
// Array destructuring
//

const address = ['1299 S Jupiter Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'New York'] = address;

console.log(`you are in ${city} ${state}`);