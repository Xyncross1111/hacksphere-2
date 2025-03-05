import { useEffect, useRef, useState } from 'react';

// Add type declaration for Devfolio
declare global {
  interface Window {
    devfolio?: {
      init: (options: { buttonSelector: string; key: string }) => void;
    };
  }
}

interface DevfolioButtonProps {
  hackathonSlug: string;
  buttonTheme?: 'light' | 'dark';
  className?: string;
}

export const DevfolioButton = ({
  hackathonSlug,
  buttonTheme = 'dark',
  className = '',
}: DevfolioButtonProps) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const buttonId = `devfolio-button-${Math.random().toString(36).substring(2, 9)}`;
  const [buttonLoaded, setButtonLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Function to initialize the button
    const initializeButton = () => {
      if (window.devfolio && buttonRef.current) {
        try {
          window.devfolio.init({
            buttonSelector: `#${buttonId}`,
            key: hackathonSlug,
          });
          console.log('Devfolio button initialized');
          setButtonLoaded(true);
        } catch (error) {
          console.error('Error initializing Devfolio button:', error);
          setShowFallback(true);
        }
      }
    };

    // Load the Devfolio script if it's not already loaded
    const loadDevfolioScript = () => {
      if (!document.querySelector('script[src="https://apply.devfolio.co/v2/sdk.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        script.onload = () => {
          console.log('Devfolio script loaded');
          initializeButton();
        };
        script.onerror = () => {
          console.error('Failed to load Devfolio script');
          setShowFallback(true);
        };
        document.body.appendChild(script);
      } else {
        // If script is already loaded, try to initialize the button
        initializeButton();
      }
    };

    // Try to initialize immediately and also set up a periodic check
    loadDevfolioScript();

    // Set up a periodic check to initialize the button
    const checkInterval = setInterval(() => {
      if (window.devfolio) {
        initializeButton();
        clearInterval(checkInterval);
      }
    }, 1000);

    // Show fallback after 5 seconds if button hasn't loaded
    const fallbackTimer = setTimeout(() => {
      if (!buttonLoaded) {
        setShowFallback(true);
      }
    }, 5000);

    // Clean up
    return () => {
      clearInterval(checkInterval);
      clearTimeout(fallbackTimer);
    };
  }, [buttonId, hackathonSlug, buttonLoaded]);

  // Fallback button style based on theme
  const fallbackButtonStyle = {
    backgroundColor: buttonTheme === 'dark' ? '#3770FF' : '#FFFFFF',
    color: buttonTheme === 'dark' ? '#FFFFFF' : '#3770FF',
    border: buttonTheme === 'dark' ? 'none' : '1px solid #3770FF',
    padding: '10px 20px',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'inline-block',
    textDecoration: 'none',
    fontSize: '16px',
  };

  return (
    <div className={`apply-button-container ${className}`} style={{ minHeight: '50px', position: 'relative' }}>
      <div
        id={buttonId}
        ref={buttonRef}
        className="apply-button"
        data-hackathon-slug={hackathonSlug}
        data-button-theme={buttonTheme}
        style={{ position: 'relative', zIndex: 10000 }}
      ></div>
      
    </div>
  );
}; 