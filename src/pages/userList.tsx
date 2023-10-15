// pages/UserList.tsx
import React from 'react';
import useSWR from 'swr';
import styles from '@/styles/index.module.css';
import Link from 'next/link';
//import { useGitHubApi } from '../lib/useGitHubApi';
//import UserCard from '../components/UserCard';
import { useGitHubApi } from './api/gitAPI';
import UserCard from '@/components/userCard';

const UserList: React.FC = () => {
  const { data: users, isLoading, isError } = useGitHubApi('/users', 11);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  return (
    <div className={styles.user}>
      
      <div className={styles.allUser}>
        {users.map((user: any) => (
            <Link key={user.login} href={`/user/${user.login}`}>
            <div className={styles.listUser}>
                <UserCard
                avatarUrl={user.avatar_url}
                firstName={user.name?.split(' ')[0] || ''}
                lastName={user.name?.split(' ')[1] || ''}
                username={user.login}
                />
            </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default UserList;
