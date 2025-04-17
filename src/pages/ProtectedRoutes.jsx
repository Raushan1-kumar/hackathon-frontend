// ProtectedRoutes.jsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const { user } = useSelector((store) => store.auth);
  const user1=localStorage.getItem('user');
  const token=localStorage.getItem('token');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (user1 === null || token===null) {
      navigate('/signup');
    }
    setIsLoading(false);
  }, [user1, navigate]);

  if (isLoading) return null; 

  return <>{children}</>;
};

export default ProtectedRoutes;