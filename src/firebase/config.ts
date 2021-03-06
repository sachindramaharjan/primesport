// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/database'
// import 'firebase/firestore'
// import 'firebase/storage'

export const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	// Optional
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}

export const reduxFirebase = {
	userProfile: 'users',
	useFirestoreForProfile: true,
}

export default { firebaseConfig, reduxFirebase }
