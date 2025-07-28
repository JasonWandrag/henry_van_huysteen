import { useState } from 'react';
import { Heart, Send, Calendar, User, Loader2, AlertCircle } from 'lucide-react';

const MessagesPage = ({ messages, addMessage, loading, error }) => {
  const [newMessage, setNewMessage] = useState({
    name: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newMessage.name.trim() || !newMessage.message.trim()) {
      alert('Please fill in both name and message fields.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const success = await addMessage(newMessage);
      if (success) {
        setNewMessage({ name: '', message: '' });
        // Show success message
        alert('Message sent successfully! Thank you for sharing your memories.');
      }
    } catch (err) {
      console.error('Error submitting message:', err);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMessage(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Recently';
    
    try {
      // Handle Firebase timestamp
      if (timestamp.toDate) {
        return timestamp.toDate().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      }
      
      // Handle ISO string
      if (typeof timestamp === 'string') {
        return new Date(timestamp).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
      }
      
      return 'Recently';
    } catch (err) {
      return 'Recently';
    }
  };

  return (
    <div className="messages-page">
      <div className="messages-header">
        <h1>Messages of Remembrance</h1>
        <p>Share your memories, stories, and condolences for Henry van Huyssteen</p>
      </div>

      <div className="messages-container">
        <div className="message-form-section">
          <div className="form-card">
            <h3>Leave a Message</h3>
            <form onSubmit={handleSubmit} className="message-form">
              <div className="form-group">
                <label htmlFor="name">
                  <User size={16} />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newMessage.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <Heart size={16} />
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={newMessage.message}
                  onChange={handleInputChange}
                  placeholder="Share your memories, stories, or condolences..."
                  rows="4"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="spinner" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="messages-list-section">
          <h3>Messages from Family & Friends</h3>
          
          {error && (
            <div className="error-message">
              <AlertCircle size={20} />
              <span>{error}</span>
            </div>
          )}
          
          {loading ? (
            <div className="loading-messages">
              <Loader2 size={48} className="spinner" />
              <p>Loading messages...</p>
            </div>
          ) : messages.length === 0 ? (
            <div className="no-messages">
              <Heart size={48} />
              <p>Be the first to leave a message of remembrance.</p>
            </div>
          ) : (
            <div className="messages-list">
              {messages.map((msg) => (
                <div key={msg.id} className="message-card">
                  <div className="message-header">
                    <div className="message-author">
                      <User size={16} />
                      <span>{msg.name}</span>
                    </div>
                    <div className="message-date">
                      <Calendar size={14} />
                      <span>{formatDate(msg.timestamp || msg.createdAt)}</span>
                    </div>
                  </div>
                  
                  <div className="message-content">
                    <p>{msg.message}</p>
                  </div>
                  
                  <div className="message-footer">
                    <Heart size={14} className="message-heart" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="messages-info">
        <div className="info-content">
          <h3>Thank You</h3>
          <p>
            Your messages of love and remembrance mean so much to our family. 
            Each story, memory, and kind word helps us celebrate Henry van Huyssteen's life 
            and the impact he had on all of us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage; 