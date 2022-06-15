import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDzeNPcAR5iK7jjNJ6QPDU1t8bEVozXAa8',
	authDomain: 'finalproject-6dca2.firebaseapp.com',
	databaseURL:
		'https://finalproject-6dca2-default-rtdb.asia-southeast1.firebasedatabase.app',
	projectId: 'finalproject-6dca2',
	storageBucket: 'finalproject-6dca2.appspot.com',
	messagingSenderId: '499206053303',
	appId: '1:499206053303:web:ffa276cf7bc699e9861c32',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
