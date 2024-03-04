import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyChse_ILBpi-wn8L2ql1f7-XiGkS8Tq_VI",
  authDomain: "portfolio-b4f40.firebaseapp.com",
  projectId: "portfolio-b4f40",
  storageBucket: "portfolio-b4f40.appspot.com",
  messagingSenderId: "1097355626028",
  appId: "1:1097355626028:web:fdae946837c8902ec4b389",
  measurementId: "G-QFF08YYVMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize db firestore
const db = getFirestore(app)

export { db }

// const messagesCollection = db.collection('messages')
// const projectsCollection = db.collection('projects')

// export const sendMessage = message => {
//   return messagesCollection.add(message)
// }

// export const getProjects = () => {
//   const projects = ref([])
//   const close = projectsCollection.onSnapshot(snapshot => {
//     projects.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
//   })

//   onUnmounted(close)

//   return projects
// }