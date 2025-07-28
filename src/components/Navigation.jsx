import { Link, useLocation } from 'react-router-dom';
import { Heart, Images, MessageCircle } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <Heart className="heart-icon" />
          <span>In Memory of Henry van Huyssteen</span>
        </Link>
        
        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            <Heart size={20} />
            <span>Home</span>
          </Link>
          
          <Link 
            to="/slideshow" 
            className={`nav-link ${isActive('/slideshow') ? 'active' : ''}`}
          >
            <Images size={20} />
            <span>Photos</span>
          </Link>
          
          <Link 
            to="/messages" 
            className={`nav-link ${isActive('/messages') ? 'active' : ''}`}
          >
            <MessageCircle size={20} />
            <span>Messages</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 