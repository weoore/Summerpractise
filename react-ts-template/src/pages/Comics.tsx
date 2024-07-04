import React from 'react';
import Card from '../components/Card';
import styles from '../styles/Comics.module.scss';
import { comics } from '../mocks/comics';

const Comics: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Comics</h1>
      <div className={styles.cardList}>
        {comics.map(comic => (
          <Card
            key={comic.id}
            id={comic.id}
            title={comic.title}
            description={comic.description}
            image={comic.image}
            link={`/comics/${comic.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Comics;

