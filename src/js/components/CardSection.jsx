import React from 'react';

const cards = [
  {
    image: 'https://es.wikiarquitectura.com/wp-content/uploads/2018/09/National-Library-of-Kosovo-WikiArquitectura_015.jpg',
    title: 'Librería Nacional de Kosovo',
    text: 'Estuvimos visitando la gran librería nacional de kosovo.'
  },
  {
    image: 'https://media.triumphmotorcycles.co.uk/image/upload/f_auto/q_auto:eco/sitecoremedialibrary/media-library/images/motorcycles/off-road/motocross/family%20page%20new/bikes-my24-motocross-family-clc-performance-ih-new-500x325.jpg',
    title: 'Motocross',
    text: 'Me encanta el motocross.'
  },
  {
    image: 'https://www.hugorodriguez.com/fotos/paisaje/antiguas/amanecer-antigua.jpg',
    title: 'Montaña Nevada',
    text: 'Recuerdo a primeros de año cuando subimos al Gorbea.'
  },
  {
    image: 'https://shadowlands.es/wp-content/uploads/2022/02/Captura-de-pantalla-2022-02-16-a-las-12.35.42-1-500x325.jpg',
    title: 'Vacaciones',
    text: 'Que ganas de irme de vacaciones y pasar unos dias a remojo en una piscina.'
  }
];

const CardSection = () => {
  return (
    <div style={styles.container}>
      {cards.map((card, index) => (
        <div key={index} style={styles.card} className="card">
          <div style={styles.imagePlaceholder}>
            {card.image ? (
              <img src={card.image} alt={card.title} style={styles.image} />
            ) : (
              '500 x 325'
            )}
          </div>
          <h3 style={styles.cardTitle}>{card.title}</h3>
          <p style={styles.cardText}>{card.text}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    padding: '2rem',
    flexWrap: 'wrap'
  },
  card: {
    width: '250px',
    border: '1px solid #ddd',
    borderRadius: '0.5rem',
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  },
  imagePlaceholder: {
    width: '100%',
    height: '200px',
    backgroundColor: '#e9ecef',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#888',
    fontSize: '1.25rem',
    marginBottom: '1rem',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  cardTitle: {
    fontSize: '1.25rem',
    marginBottom: '0.5rem'
  },
  cardText: {
    fontSize: '1rem',
    color: '#555'
  }
};

export default CardSection;