import React from 'react';
import Button from '../button/Button';
import styles from './Card.module.css'

const Card = ({title, content}) => {
    return(
        <div className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.content}>{content}</p>
        <Button/>
        </div>
    )
}

export default Card