import * as firebase from 'firebase';

const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {firebase, googleAuthProvider, database as default};

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