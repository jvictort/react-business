import React, { useState, useEffect } from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch("http://localhost:8080/", {
      method: 'GET',
      mode: 'cors'
    })
    .then(res => res.json())
    .then(res => setMessage(res.message));

  }, []);

  return (
    <>
      <h1>{message}</h1>
    </>
  );
}

export default App;
