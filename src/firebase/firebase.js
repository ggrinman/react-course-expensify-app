import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyAU-pa1blR-g53RraUarMH1kkLGLJbt9Yc",
	authDomain: "expensify-b7fe4.firebaseapp.com",
	databaseURL: "https://expensify-b7fe4.firebaseio.com",
	projectId: "expensify-b7fe4",
	storageBucket: "expensify-b7fe4.appspot.com",
	messagingSenderId: "413484519294"
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};

// database.ref('expenses')
// 	.once('value')
// 	.then((snapshot) => {
// 		const expenses = [];
//
// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});
//
// 		console.log(expenses);
//
// 	})
// 	.catch((e) => {
// 		console.log('Error fetching data', 2);
// 	});

// database.ref().on('child_removed', (snapshot) => {
//
// 	const expenses = [];
//
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});
//
// 	console.log(expenses);
//
// });
//
// database.ref().on('child_changed', (snapshot) => {
//
// 	const expenses = [];
//
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});
//
// 	console.log(expenses);
//
// });
//
// database.ref().on('child_added', (snapshot) => {
//
// 	const expenses = [];
//
// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});
//
// 	console.log(expenses);
//
// });

// database.ref('expenses').push({
// 	description: 'desc 1',
// 	note: 'note 1',
// 	amount: 101,
// 	createdAt: 0
// });
//
// database.ref('expenses').push({
// 	description: 'desc 2',
// 	note: 'note 2',
// 	amount: 100,
// 	createdAt: 0
// });
//
// database.ref('expenses').push({
// 	description: 'desc 3',
// 	note: 'note 3',
// 	amount: 100,
// 	createdAt: 0
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
// 	console.log(snapshot.val());
// });
//
// setTimeout(() => {
// 	database.ref('age').set(30	);
// }, 3500);
//
// setTimeout(() => {
// 	database.ref().off('value', onValueChange);
// }, 7000);

// database.ref()
// 	.once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch((e) => {
// 		console.log('Error fetching data', 2);
// 	});

// database.ref().set({
// 	name: 'Gerardo Grinman',
// 	age: 33,
// 	stressLevel: 6,
// 	job: {
// 		title: 'Software developer',
// 		company: 'Google'
// 	},
// 	location: {
// 		city: 'Philadelphia',
// 		country: 'United States'
// 	}
// }).then(() => {
// 	console.log('Data is saved');
// }).catch((error) => {
// 	console.log('This failed', error);
// });
//
// database.ref().update({
// 	name: 'Mike',
// 	age: 29,
// });

// database.ref()
// 	.remove()
// 	.then(() => {
// 	console.log('Data was removed');
// }).catch((error) => {
// 	console.log('Did not remove data', error);
// });