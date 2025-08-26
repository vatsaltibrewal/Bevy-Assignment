'use client';

import { useState } from 'react';

type SearchFormProps = {
  onSearch: (keyword: string) => void;
  loading: boolean;
};

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, loading }) => {
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword.trim()) {
      onSearch(keyword);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-12">
      <div className="flex justify-center">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Enter a keyword (e.g., 'react')"
          className="w-full max-w-md p-3 border-2 border-foreground bg-white focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="p-3 bg-primary text-foreground font-bold border-2 border-foreground shadow-[theme(boxShadow.neo)] hover:shadow-none transition-shadow disabled:opacity-50"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>
    </form>
  );
};

export default SearchForm;