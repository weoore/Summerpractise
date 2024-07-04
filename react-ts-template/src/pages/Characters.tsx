import React from 'react';
import Card from '../components/Card';
import styles from '../styles/Characters.module.scss';
import { characters } from '../mocks/characters';

const Characters: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Characters</h1>
      <input type="text" placeholder="Search for characters by name" className={styles.searchInput} />
      <div className={styles.cardList}>
        {characters.map(character => (
          <Card
            key={character.id}
            id={character.id}
            title={character.name}
            description={character.description}
            image={character.image}
            link={`/characters/${character.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Characters;
