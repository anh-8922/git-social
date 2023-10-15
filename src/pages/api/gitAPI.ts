// pages/api/gitAPI.ts
import useSWR from 'swr';
import axios from 'axios';

const fetcher = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};

export const useGitHubApi = (path: string, perPage: number = 15) => {
  const baseUrl = 'https://api.github.com'; // GitHub API base URL
  const url = `${baseUrl}${path}?per_page=${perPage}`;
  
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
