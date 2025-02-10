// Solution: onAuthStateChangedSolution.js
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// ... Firebase configuration
const firebaseConfig = {
  // ...
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let isListenerSetup = false; // Flag to prevent multiple listeners

function setupAuthListener(){
if(isListenerSetup) return; // Prevent adding multiple listeners
isListenerSetup = true;
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log('User signed in:', uid);
    } else {
      // User is signed out
      console.log('User signed out');
    }
  }).catch((error) => {
    // Handle any errors during authentication state change
    console.error('Error in onAuthStateChanged:', error);
    // Implement a fallback mechanism (e.g., retry after a delay)
  });
}
setupAuthListener();
// ... rest of your app logic