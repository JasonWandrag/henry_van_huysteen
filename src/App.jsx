import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import SlideshowPage from './components/SlideshowPage';
import MessagesPage from './components/MessagesPage';
import Navigation from './components/Navigation';
import { addMessage as addMessageToFirebase, getMessages as getMessagesFromFirebase } from './firebase';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load messages from Firebase on component mount
  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      setLoading(true);
      const firebaseMessages = await getMessagesFromFirebase();
      setMessages(firebaseMessages);
      setError(null);
    } catch (err) {
      console.error('Error loading messages:', err);
      setError('Failed to load messages. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const addMessage = async (newMessage) => {
    try {
      // Add message to Firebase
      await addMessageToFirebase(newMessage);
      
      // Reload messages to get the updated list
      await loadMessages();
      
      return true;
    } catch (err) {
      console.error('Error adding message:', err);
      setError('Failed to send message. Please try again.');
      return false;
    }
  };

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/slideshow" element={<SlideshowPage />} />
          <Route 
            path="/messages" 
            element={
              <MessagesPage 
                messages={messages} 
                addMessage={addMessage}
                loading={loading}
                error={error}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
