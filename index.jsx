import React, { useState, useEffect } from 'react';

export default function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Petición a la API de FakeStore
    fetch('https://fakestoreapi.com/users')
      .then((res) => res.json())
      .then((data) => {
        // Guardar solo los primeros 10 elementos
        setUsuarios(data.slice(0, 10));
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error al obtener los usuarios:', error);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <p style={{ textAlign: 'center' }}>Cargando usuarios...</p>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>Lista de Usuarios (FakeStore API)</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
        {usuarios.map((user) => (
          <div
            key={user.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '15px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              backgroundColor: '#fff',
            }}
          >
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Usuario:</strong> {user.username}</p>
            <p><strong>Contraseña:</strong> {user.password}</p>
          </div>
        ))}
      </div>
    </div>
  );
}