import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaGlobe, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram, FaMedium, FaNpm, FaMapMarkerAlt, FaFileDownload, FaPlay } from 'react-icons/fa';
import AnimatedBackground from './AnimatedBackground';
import './index.css';

const links = [
  {
    id: 1,
    title: 'Portfolio Website',
    url: 'http://www.basatmaqsood.com',
    icon: <FaGlobe />,
    color: 'linear-gradient(135deg, #3b82f6 0%, #2dd4bf 100%)'
  },
      
  {
    id: 4,
    title: 'Email Me',
    url: 'mailto:me@basatmaqsood.com',
    icon: <FaEnvelope />,
    color: 'linear-gradient(135deg, #ea4335 0%, #c5221f 100%)'
  },
  {
    id: 2,
    title: 'GitHub',
    url: 'https://github.com/basatmaqsood',
    icon: <FaGithub />,
    color: 'linear-gradient(135deg, #333333 0%, #1a1a1a 100%)'
  },
  {
    id: 3,
    title: 'LinkedIn',
    url: 'https://linkedin.com/in/basatmaqsood',
    icon: <FaLinkedin />,
    color: 'linear-gradient(135deg, #0077b5 0%, #005e93 100%)'
  },

  {
    id: 5,
    title: 'WhatsApp',
    url: 'https://wa.me/923260185306',
    icon: <FaWhatsapp />,
    color: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)'
  },
  {
    id: 8,
    title: 'Instagram',
    url: 'https://www.instagram.com/basatmaqsood',
    icon: <FaInstagram />,
    color: 'linear-gradient(135deg, #f09433 0%, #bc1888 100%)'
  },

  {
    id: 9,
    title: 'Facebook',
    url: 'https://www.facebook.com/itzbasatmaqsood',
    icon: <FaFacebook />,
    color: 'linear-gradient(135deg, #1877F2 0%, #145DBF 100%)'
  },
  
  {
    id: 7,
    title: 'Medium',
    url: 'https://basatmaqsood.medium.com/',
    icon: <FaMedium />,
    color: 'linear-gradient(135deg, #000000 0%, #333333 100%)'
  },
  {
    id: 6,
    title: 'NPM',
    url: 'https://www.npmjs.com/~basat-maqsood',
    icon: <FaNpm />,
    color: 'linear-gradient(135deg, #CB3837 0%, #A22E2B 100%)'
  },

  
];

function App() {
  const [mounted, setMounted] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="app-container">
      <AnimatedBackground />


      <main className={`content-wrapper ${mounted ? 'visible' : ''}`}>
        <header className="profile-card">
          <div className="avatar-container">

            <img
              src="https://res.cloudinary.com/dr7askqqy/image/upload/v1745662688/dp_removebg_preview_e03fedf3dd.png"
              alt="Basat Maqsood"
              className="avatar"
            />
          </div>
          <h1 className="name">Basat Maqsood</h1>
          <p className="bio">Software Engineer</p>
          <div className="location">
            <FaMapMarkerAlt className="location-icon" /> <span>Islamabad, Pakistan</span>
          </div>
          <div className="mini-socials">
            <a href="mailto:me@basatmaqsood.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
            <a href="https://github.com/basatmaqsood" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/basatmaqsood" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://wa.me/923260185306" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
          <div className="card-buttons">
            <a href="mailto:me@basatmaqsood.com" className="btn btn-primary">Let's Talk</a>
            <a href="http://www.basatmaqsood.com/Basat_Maqsood_CV.pdf" target="_blank" rel="noreferrer" className="btn btn-outline"><FaFileDownload /> Download CV</a>
          </div>
        </header>

        <section className="links-section">
          <button
            onClick={() => setIsVideoModalOpen(true)}
            className="link-card highlight-card"
            style={{ '--animation-order': 0 }}
          >
            <div className="link-icon-wrapper" style={{ background: 'linear-gradient(135deg, #FF0000 0%, #CC0000 100%)' }}>
              <FaPlay style={{ marginLeft: '4px' }} />
            </div>
            <span className="link-title">Watch My Intro</span>
            <div className="link-arrow">↗</div>
          </button>

          {links.map((link, index) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
              style={{
                '--animation-order': index + 1,
                '--brand-bg': link.color
              }}
            >
              <div className="link-icon-wrapper">
                {link.icon}
              </div>
              <span className="link-title">{link.title}</span>
              <div className="link-arrow">↗</div>
            </a>
          ))}
        </section>

        <footer className="footer">
          <p>Made with ❤️ by Basat Maqsood</p>
        </footer>
      </main>

      {isVideoModalOpen && (
        <div className="modal-overlay" onClick={() => setIsVideoModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsVideoModalOpen(false)}>&times;</button>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/CrFaIOVH_nc?autoplay=1"
                title="Intro Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
