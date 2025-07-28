import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs, orderBy, query, serverTimestamp } from 'firebase/firestore';

// Your Firebase configuration
// You'll need to replace these with your actual Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyBLAIn7Wr8tWfXv1tPNqS1ROmYVZKcr1a8",
  authDomain: "henry-van-huyssteen.firebaseapp.com",
  projectId: "henry-van-huyssteen",
  storageBucket: "henry-van-huyssteen.firebasestorage.app",
  messagingSenderId: "219583162333",
  appId: "1:219583162333:web:94be16a521f3149fd3b834",
  measurementId: "G-18Y4K54NQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firestore
export const db = getFirestore(app);

// Collection reference for messages
export const messagesCollection = collection(db, 'memorial-messages');

// Firestore functions
export const addMessage = async (messageData) => {
  try {
    const docRef = await addDoc(messagesCollection, {
      ...messageData,
      timestamp: serverTimestamp(),
      createdAt: new Date().toISOString()
    });
    return docRef;
  } catch (error) {
    console.error('Error adding message: ', error);
    throw error;
  }
};

export const getMessages = async () => {
  try {
    const q = query(messagesCollection, orderBy('timestamp', 'desc'));
    const querySnapshot = await getDocs(q);
    const messages = [];
    querySnapshot.forEach((doc) => {
      messages.push({
        id: doc.id,
        ...doc.data()
      });
    });
    return messages;
  } catch (error) {
    console.error('Error getting messages: ', error);
    throw error;
  }
}; 