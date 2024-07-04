import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/CharacterDetail.module.scss';
import { characters } from '../mocks/characters';
import { comics } from '../mocks/comics';

const CharacterDetail: React.FC = () => {
  const { id } = useParams();
  const character = characters.find(char => char.id === id);

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div className={styles.container}>
      <img src={character.image} alt={character.name} className={styles.image} />
      <h1>{character.name}</h1>
      <p>{character.description}</p>
      <h2>Comics</h2>
      <ul>
        {comics.map(comic => (
          <li key={comic.id}>
            <a href={`/comics/${comic.id}`}>{comic.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetail;
