import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAnalytics } from "firebase/analytics";


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"pennmac-szuch","appId":"1:157077264480:web:d853552ab087d53a38cb05","storageBucket":"pennmac-szuch.firebasestorage.app","apiKey":"AIzaSyAGE5fLmGMUxFCqHWcVYzCccxWWpku8Hwo","authDomain":"pennmac-szuch.firebaseapp.com","messagingSenderId":"157077264480","measurementId":"G-LWMB5ZZY63"})), provideFirestore(() => getFirestore())]
};
