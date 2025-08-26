export interface Repository {
  _id?: string;
  name: string;
  url: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
}

export interface UserRepo {
  id: number;
  name: string;
  stargazers_count: number;
  html_url: string;
}

export interface DetailedRepository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  language: string;
  owner: {
      login: string;
      avatar_url: string;
  };
  created_at: string;
  updated_at: string;
}

export interface UserProfile {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  topRepos: UserRepo[];
}