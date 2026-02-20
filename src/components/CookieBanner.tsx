import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setShowBanner(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 0, width: '100%', background: '#333', 
      color: '#fff', padding: '15px', textAlign: 'center', zIndex: 1000
    }}>
      <p>Usamos cookies para melhorar sua experiência. Ao continuar, você aceita nossa política.</p>
      <button onClick={acceptCookies} style={{
        background: '#f1c40f', border: 'none', padding: '8px 15px', 
        borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold'
      }}>
        Aceitar
      </button>
    </div>
  );
};

export default CookieBanner;

