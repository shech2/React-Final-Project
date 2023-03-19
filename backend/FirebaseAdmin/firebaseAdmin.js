import admin from 'firebase-admin';
import serviceAccount from '../efi-test-f7212-firebase-adminsdk-mr38q-35e5f5b23f.mjs';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export {admin};