import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Card.module.scss';

interface CardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const Card: React.FC<CardProps> = ({  title, description, image, link }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Link to={link} className={styles.link}>More details</Link>
    </div>
  );
};

export default Card;

