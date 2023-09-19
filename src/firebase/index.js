import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

const database = getDatabase();

const firebaseConfig = {
	apiKey: "AIzaSyAxXARxOiS1Hn10q5vQSsbrYyhbPv0QZTM",
	authDomain: "app-bets-6502e.firebaseapp.com",
	projectId: "app-bets-6502e",
	storageBucket: "app-bets-6502e.appspot.com",
	messagingSenderId: "293430886720",
	appId: "1:293430886720:web:6ec83e40f8edf7a5bc3aa5",
	measurementId: "G-QLKB97PDXM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export function writeUserData(userId, name, email) {
	const db = getDatabase();
	set(ref(db, "users/" + userId), {
		username: name,
		email: email,
		balance: 100,
	});
}

// writeUserData(231242154715721, "makcim", "asdada@dsad.ru");
// function create(email, password) {
// 	createUserWithEmailAndPassword(auth, email, password)
// 		.then((userCredential) => {
// 			// Signed in
// 			console.log(userCredential);
// 			const user = userCredential.user;
// 			// ...
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 			console.log(auth);
// 			const errorCode = error.code;
// 			const errorMessage = error.message;
// 			// ..
// 		});
// }
// // signin("asd", "asd");

// onAuthStateChanged(auth, (user) => {
// 	if (user) {
// 		// User is signed in, see docs for a list of available properties
// 		// https://firebase.google.com/docs/reference/js/auth.user
// 		const uid = user.uid;
// 		// ...
// 	} else {
// 		// User is signed out
// 		// ...
// 	}
// });
