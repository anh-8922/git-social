// components/UserCard.tsx
import React from 'react';
import styles from '@/styles/components.module.css';

interface UserCardProps {
  avatarUrl: string;
  firstName: string;
  lastName: string;
  username: string;
}

const ListCard: React.FC<UserCardProps> = ({
  avatarUrl,
  firstName,
  lastName,
  username,
}) => {
  return (
    <div className={styles.listCard}>
        <img className={styles.listImages} src={avatarUrl} alt={`${username}'s avatar`} />
        <p style={{fontSize:'1.3rem', fontWeight:'bold', marginTop:'1rem'}}>{firstName} {lastName}</p>
        <p style={{fontWeight:'bold'}}>{username}</p>
    </div>
  );
};

export default ListCard;
