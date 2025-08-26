'use client';

import { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import Dashboard from '@/components/dashboard';
import RepoDetailCard from '@/components/repoDetailCard';
import ProfileCard from '@/components/profileCard';
import { Repository, DetailedRepository, UserProfile } from '@/types';

type ActiveTab = 'search' | 'repo' | 'profile';

export default function Home() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('search');
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [repoDetails, setRepoDetails] = useState<DetailedRepository | null>(null);
  const [profileData, setProfileData] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const fetchKeywordResults = async () => {
    try {
      const response = await axios.get<Repository[]>(`${process.env.NEXT_PUBLIC_API_URL}/api/results`);
      setRepositories(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchKeywordResults();
  }, []);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setRepoDetails(null);
    setProfileData(null);

    const endpointMap = {
      search: '/api/search',
      repo: '/api/analyze/repo',
      profile: '/api/analyze/profile'
    };
    
    const payloadMap = {
      search: { keyword: inputValue },
      repo: { url: inputValue },
      profile: { username: inputValue }
    };

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}${endpointMap[activeTab]}`, payloadMap[activeTab]);
      
      if (activeTab === 'search') {
        await fetchKeywordResults();
      } else if (activeTab === 'repo') {
        setRepoDetails(response.data);
      } else if (activeTab === 'profile') {
        setProfileData(response.data);
      }
    } catch (err: any) {
      setError(err.response?.data?.msg || 'An unexpected error occurred.');
      console.error(err);
    } finally {
      setLoading(false);
      setInputValue('');
    }
  };

  const renderForm = () => {
    const placeholderMap = {
      search: 'Enter a keyword (e.g., "react")',
      repo: 'Enter a GitHub Repo URL',
      profile: 'Enter a GitHub Username or Profile URL'
    };
    
    return (
      <form onSubmit={handleFormSubmit} className="mb-12">
        <div className="flex justify-center">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={placeholderMap[activeTab]}
            className="w-full max-w-lg p-3 border-2 border-foreground bg-white focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="p-3 bg-primary text-foreground font-bold border-2 border-foreground shadow-[theme(boxShadow.neo)] hover:shadow-none transition-shadow disabled:opacity-50"
          >
            {loading ? '...' : 'Go'}
          </button>
        </div>
      </form>
    );
  };
  
  const TabButton = ({ tab, label }: { tab: ActiveTab; label: string }) => (
    <button
      onClick={() => {
        setActiveTab(tab);
        setError(null);
        setRepoDetails(null);
        setProfileData(null);
      }}
      className={`px-4 py-2 font-bold border-2 border-foreground ${
        activeTab === tab ? 'bg-primary' : 'bg-white'
      }`}
    >
      {label}
    </button>
  );

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2">CodeScope</h1>
          <p className="text-lg">An Advanced GitHub Analyzer</p>
        </header>

        <div className="flex justify-center mb-8 border-2 border-foreground">
          <TabButton tab="search" label="Keyword Search" />
          <TabButton tab="repo" label="Analyze Repo" />
          <TabButton tab="profile" label="Analyze Profile" />
        </div>
        
        {renderForm()}
        
        {error && <p className="text-center text-red-500 font-bold bg-red-100 border-2 border-red-500 p-3">{error}</p>}
        
        <div className="mt-8">
          {activeTab === 'search' && <Dashboard repositories={repositories} />}
          {activeTab === 'repo' && repoDetails && <RepoDetailCard repo={repoDetails} />}
          {activeTab === 'profile' && profileData && <ProfileCard profile={profileData} />}
        </div>
      </div>
    </main>
  );
}