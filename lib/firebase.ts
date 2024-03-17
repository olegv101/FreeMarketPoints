import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  increment,
  Firestore
} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, Auth } from 'firebase/auth';

// defining types for your event data structure
interface IEvent {
  name: string;
  description: string;
  points: number;
  // can add more shtuff here
}

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3V-3DYvqHO-N8h_jgE1nNP6fZOwIpOOM",
    authDomain: "greek-points.firebaseapp.com",
    projectId: "greek-points",
    storageBucket: "greek-points.appspot.com",
    messagingSenderId: "677204800688",
    appId: "1:677204800688:web:6231ef851a6e84c8a6b775",
    measurementId: "G-HYKHV8R9YB"
};

// initialising Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db: Firestore = getFirestore(app);
const auth: Auth = getAuth(app);
const provider = new GoogleAuthProvider();

//function to create an event
async function createEvent(eventData: IEvent): Promise<string | void> {
  try {
    const docRef = await addDoc(collection(db, 'events'), eventData);
    console.log('Event created with ID: ', docRef.id);
    return docRef.id; // event ID here
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

//function to retrieve all events
async function getEvents(): Promise<IEvent[]> {
  const eventsCol = collection(db, 'events');
  const eventSnapshot = await getDocs(eventsCol);
  const eventList = eventSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as unknown as IEvent);
  return eventList;
}

// fnctn to add points to an event
async function addPoints(eventId: string, additionalPoints: number): Promise<void> {
  const eventRef = doc(db, 'events', eventId);
  // updateDoc function used to update the document in firestore
  await updateDoc(eventRef, {
    points: increment(additionalPoints)
  });
}

export { auth, provider, createEvent, getEvents, addPoints };