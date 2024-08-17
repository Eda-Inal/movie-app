'use client'
import { useState, useEffect } from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 0) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 0) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <>
      {showScroll && (
        <ArrowCircleUpIcon
          fontSize='large'
          color='secondary'
          sx={{
            cursor: 'pointer',
            position: 'fixed',
            right: 12,
            bottom: 16,
            zIndex: 1000,
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-10px)' 
              }
          }}
          onMouseEnter={scrollTop}
        />
      )}
    </>
  );
};

export default ScrollToTop;
