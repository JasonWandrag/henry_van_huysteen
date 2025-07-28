import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <div className="memorial-header">
            <Heart className="memorial-heart" />
            <h1>In Loving Memory</h1>
            <h2>Henry van Huyssteen</h2>
            <p className="dates">1945 - 2024</p>
          </div>
          
          <div className="memorial-quote">
            <blockquote>
              "Those we love don't go away, they walk beside us every day. 
              Unseen, unheard, but always near, still loved, still missed, and very dear."
            </blockquote>
          </div>
        </div>
      </div>



      <div className="cta-section">
        <div className="cta-content">
          <h3>Share Your Memories</h3>
          <p>Leave a message, share a story, or simply let us know how Henry van Huyssteen touched your life.</p>
          
          <div className="cta-buttons">
            <Link to="/slideshow" className="cta-button primary">
              <span>View Photo Gallery</span>
              <ArrowRight size={20} />
            </Link>
            
            <Link to="/messages" className="cta-button secondary">
              <span>Leave a Message</span>
              <Heart size={20} />
            </Link>
          </div>
        </div>
      </div>
{/*
      <div className="tribute-section">
        <div className="tribute-content">
          <h3>A Life Well Lived</h3>
          <p>
            Henry van Huyssteen was a beloved father, grandfather, friend, and mentor to many. 
            His warm smile, gentle wisdom, and unwavering kindness touched countless lives. 
            He had a passion for gardening, loved classical music, and was always ready 
            with a story that would make you laugh or think deeply about life.
          </p>
          <p>
            He leaves behind a legacy of love, laughter, and the simple joy of being 
            present for those he cared about. His memory will live on in the hearts 
            of all who knew him.
          </p>
        </div>
      </div>
 */}
    </div>
  );
};

export default LandingPage; 