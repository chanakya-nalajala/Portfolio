import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAnalytics, Analytics, isSupported } from 'firebase/analytics';
import { getFirestore, Firestore } from 'firebase/firestore';

// Firebase configuration
// These values should be stored in environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || ''
};

// Initialize Firebase
let app: FirebaseApp | null = null;
let analytics: Analytics | null = null;
let db: Firestore | null = null;

const initializeFirebase = async () => {
  try {
    // Only initialize if config values are present
    if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
      console.warn('Firebase configuration missing. Analytics will not be initialized.');
      return { app: null, analytics: null, db: null };
    }

    // Initialize Firebase app
    app = initializeApp(firebaseConfig);
    
    // Initialize Firestore
    db = getFirestore(app);
    
    // Initialize Analytics (only in browser and if supported)
    if (typeof window !== 'undefined') {
      const analyticsSupported = await isSupported();
      if (analyticsSupported) {
        analytics = getAnalytics(app);
      }
    }
    
    return { app, analytics, db };
  } catch (error) {
    console.error('Error initializing Firebase:', error);
    return { app: null, analytics: null, db: null };
  }
};

export { app, analytics, db, initializeFirebase };
