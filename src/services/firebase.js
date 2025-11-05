import { initializeApp } from 'firebase/app';

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  addDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const FirebaseApp = initializeApp(firebaseConfig);
const database = getFirestore(FirebaseApp);

export async function getAllBooks() {
  const collectionRef = collection(database, 'books');
  let results = await getDocs(collectionRef);

  let booksData = results.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return booksData;
}

export async function getBook(idParams) {
  const docRef = doc(database, 'books', idParams);
  const docResult = await getDoc(docRef);
  if (docResult.exists()) {
    return { id: docResult.id, ...docResult.data() };
  }
}

export async function getBooksByCategory(idCategoryParams) {
  const collectionRef = collection(database, 'books');

  const queryCat = query(
    collectionRef,
    where('category', '==', idCategoryParams)
  );

  let results = await getDocs(queryCat);

  let dataCursos = results.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  return dataCursos;
}

export async function createBuyOrder(orderDoc) {
  const collectionRef = collection(database, 'orders');
  let response = await addDoc(collectionRef, orderDoc);
  return response.id;
}

export async function sendProductsToFirebase() {
  const data = [];
  let itemsCollectionRef = collection(database, 'books');

  for (let book of data) {
    delete book.id;
    let newDoc = await addDoc(itemsCollectionRef, book);
  }
}

export default FirebaseApp;
