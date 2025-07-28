# In Memory of Henry van Huyssteen - Memorial Website

A beautiful, responsive memorial website built with React and Firebase to honor the memory of Henry van Huyssteen.

## Features

- **Landing Page**: Elegant tribute with memorial information and service details
- **Photo Slideshow**: Full-page photo gallery with auto-play and controls
- **Messages System**: Interactive guestbook where family and friends can leave condolence messages
- **Firebase Integration**: Real-time message storage and retrieval using Firestore
- **Responsive Design**: Beautiful on all devices - desktop, tablet, and mobile

## Tech Stack

- **Frontend**: React 19, Vite
- **Routing**: React Router DOM
- **Styling**: CSS3 with custom animations
- **Database**: Firebase Firestore
- **Icons**: Lucide React
- **Slideshow**: React Slick

## Firebase Setup

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter your project name (e.g., "henry-memorial")
4. Follow the setup wizard

### 2. Enable Firestore Database

1. In your Firebase project, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location close to your users

### 3. Get Your Firebase Configuration

1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click the web icon (</>) to add a web app
4. Register your app and copy the configuration

### 4. Update Firebase Configuration

Replace the placeholder values in `src/firebase.js` with your actual Firebase config:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

### 5. Set Up Firestore Security Rules

In your Firebase Console, go to Firestore Database > Rules and update them:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /memorial-messages/{document} {
      allow read, write: if true; // For development - allows anyone to read/write
    }
  }
}
```

**Note**: For production, you should implement proper security rules to prevent abuse.

## Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure Firebase** (see steps above)

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** to `http://localhost:5173`

## Customization

### Photos
Replace the sample photos in `src/components/SlideshowPage.jsx`:

```javascript
const photos = [
  {
    id: 1,
    src: '/path/to/your/photo.jpg',
    caption: 'Your photo caption',
    date: 'Date description'
  },
  // Add more photos...
];
```

### Content
- Update memorial information in `src/components/LandingPage.jsx`
- Modify service details, dates, and location
- Customize the tribute text

### Styling
- Colors and fonts can be modified in `src/App.css`
- The primary color scheme uses purple gradients (`#8e44ad` to `#9b59b6`)

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### Firebase Hosting
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Build: `npm run build`
5. Deploy: `firebase deploy`

## Security Considerations

- **Firestore Rules**: Implement proper security rules for production
- **Rate Limiting**: Consider adding rate limiting for message submissions
- **Content Moderation**: Implement content filtering for messages
- **Backup**: Regularly backup your Firestore data

## Support

For technical support or questions about the memorial website, please contact the development team.

---

*In loving memory of Henry van Huyssteen (1945-2024)*
