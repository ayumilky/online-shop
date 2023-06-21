import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

//configurations of the linked firebase db instance
const firebaseConfig = {
  apiKey: "AIzaSyAZRfEsNsu7YXjackoE4b8GdVZ1qxOX2i0",
  authDomain: "online-shop-db-b29ff.firebaseapp.com",
  projectId: "online-shop-db-b29ff",
  storageBucket: "online-shop-db-b29ff.appspot.com",
  messagingSenderId: "665340065762",
  appId: "1:665340065762:web:d84aa0771c6a65a37c2bbb",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//start sign in process for an inautheticated user
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// Initialize firebase auth and get a ref to the service
export const auth = getAuth();

export const signInWithGooglePopup = async () => {
  await signInWithPopup(auth, googleProvider);
  window.location = "/";
};
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// Instantiate firestore
export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => {
    const { title, items } = docSnapshot.data();
    return { title, items };
  });
};
// Create New User Doc
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  //if user data not exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (err) {
      console.log("error creating the user", err.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

//Observer for the Auth
export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
