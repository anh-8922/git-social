// pages/user/[username].tsx
import React from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/components.module.css';
import Layout from '@/components/layout';
import { useGitHubApi } from '../api/gitAPI';
import UserCard from '@/components/userCard';
import Link from 'next/link';

export default function userDetails() {
  const router = useRouter();
  const { username } = router.query;
  const { data: user, isLoading, isError } = useGitHubApi(`/users/${username}`);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  return (
    <Layout>
      
      <UserCard
        avatarUrl={user.avatar_url}
        firstName={user.name?.split(' ')[0] || ''}
        lastName={user.name?.split(' ')[1] || ''}
        username={user.login}
        company={user.company}
        socialHandles={user.blog ? [user.blog] : []}
        followers={user.followers}
        following={user.following}
        publicRepos={user.public_repos}
      />
     
      <Link href="/" className={styles.backButton}>Back</Link>
    </Layout>
    
  );
};

