import React from 'react';
import styles from '@/styles/components.module.css';

interface UserCardProps {
  avatarUrl: string;
  username: string;
}

function ListCard({ avatarUrl, username }: UserCardProps) {
  return (
    <div className={styles.listCard}>
      <img className={styles.listImages} src={avatarUrl} alt={`${username}'s avatar`} />
      <p style={{ fontWeight: 'bold' }}>{username}</p>
    </div>
  );
}

export default ListCard;
