'use client'
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useSelector } from 'react-redux';

function Alert() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  const { alertMessage, alertColor } = useSelector((state) => state.movie);

  return (
    visible && (
      <Box
        sx={{
          position: "fixed",
          top: "0.5rem",
          right: "1rem",
          backgroundColor: alertColor,
          color: "white",
          paddingX: { xs: "0.2rem", sm: "0.5rem" },
          paddingY: { xs: "0.5rem", sm: "0.8rem" },
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          width: { xs: "80%", sm: "60%", md: "30%" },
          maxWidth: "350px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 9999,
          transform: visible ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          {alertMessage}
        </Typography>
        <CheckCircleIcon sx={{ color: "white", marginLeft: "0.3rem", fontSize: "28px" }} />
      </Box>
    )
  );
}

export default Alert;

