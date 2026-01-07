# Firebase Setup for Join Waitlist

This project uses Firebase Firestore to store waitlist submissions.

## Installation

The Firebase SDK is already included. If you need to reinstall dependencies:

```bash
npm install
```

## Configuration

1. **Create a Firebase Project**:

   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Firestore Database (start in test mode initially)
   - Go to Project Settings and copy your Firebase config

2. **Set Environment Variables**:

   - Copy `.env.example` to `.env.local`
   - Fill in your Firebase credentials:
     ```
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
     ```

3. **Firestore Security Rules** (from Firebase Console):
   - Go to Firestore Database → Rules
   - Set rules to allow writes to `waitlist` collection:
     ```
     rules_version = '2';
     service cloud.firestore {
       match /databases/{database}/documents {
         match /waitlist/{document=**} {
           allow create: if request.auth == null || request.auth != null;
           allow read: if request.auth != null && request.auth.uid == 'admin_uid';
         }
       }
     }
     ```
   - Or for development (less secure):
     ```
     rules_version = '2';
     service cloud.firestore {
       match /databases/{database}/documents {
         match /{document=**} {
           allow read, write: if true;
         }
       }
     }
     ```

## How It Works

When a user submits the "Join Waitlist" form:

1. The form captures `name`, `email`, and `company`
2. Data is sent to Firestore `waitlist` collection
3. A server timestamp is automatically added
4. User sees a success message
5. Entries are viewable in the Firestore console or can be exported as CSV

## Viewing Submissions

All waitlist entries are stored in Firebase Firestore under the `waitlist` collection. You can:

- View them in the [Firebase Console](https://console.firebase.google.com/)
- Export them as CSV
- Query them programmatically via the Firebase API

## Development

Run the dev server:

```bash
npm run dev
```

Visit `http://localhost:5173` and test the form.
