import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAJe5VVZcraN5MVq9z71HWkzvWZkWBHTmo',
  authDomain: 'fir-v-2.firebaseapp.com',
  projectId: 'fir-v-2',
  storageBucket: 'fir-v-2.appspot.com',
  messagingSenderId: '70352251632',
  appId: '1:70352251632:web:9bfea0495de742c9907035',
  measurementId: 'G-KQC49396DQ'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
