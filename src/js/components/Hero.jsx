import React from 'react';

const Hero = () => {
  return (
    <section style={styles.hero}>
      <h1 style={styles.title}>¡Una Calurosa Bienvenida!</h1>
      <p style={styles.paragraph}>
        Os doy la bienvenida a mi primer proyecto realizado con React.
      </p>
      <button style={styles.button}>Call to action!</button>
    </section>
  );
};

const styles = {
  hero: {
    backgroundColor: '#e9ecef',
    padding: '4rem',
    textAlign: 'center',
    borderRadius: '0.5rem',
    margin: '2rem'
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem'
  },
  paragraph: {
    fontSize: '1.25rem',
    marginBottom: '2rem'
  },
  button: {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#0d6efd',
    color: 'white',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer'
  }
};

export default Hero;