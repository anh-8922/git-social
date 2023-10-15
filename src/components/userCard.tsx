// components/UserCard.tsx
import React from 'react';
import styles from '@/styles/components.module.css';

interface UserCardProps {
  avatarUrl: string;
  firstName: string;
  lastName: string;
  username: string;
  company?: string;
  socialHandles?: string[];
  followers?: number;
  following?: number;
  publicRepos?: number;
}

const UserCard: React.FC<UserCardProps> = ({
  avatarUrl,
  firstName,
  lastName,
  username,
  company,
  socialHandles,
  followers,
  following,
  publicRepos,
}) => {
  return (
    <div>
      <img className={styles.userImage} src={avatarUrl} alt={`${username}'s avatar`} />
      <p>{firstName} {lastName}</p>
      <p>{username}</p>
      {company && <p>Company: {company}</p>}
      {socialHandles && (
        <p>Social Handles: {socialHandles.join(', ')}</p>
      )}
      {followers !== undefined && <p>Followers: {followers}</p>}
      {following !== undefined && <p>Following: {following}</p>}
      {publicRepos !== undefined && <p>Public Repositories: {publicRepos}</p>}
    </div>
  );
};

export default UserCard;
