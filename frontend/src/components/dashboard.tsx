import { Repository } from '@/types';

type DashboardProps = {
  repositories: Repository[];
};

const Dashboard: React.FC<DashboardProps> = ({ repositories }) => {
  if (repositories.length === 0) {
    return <div className="text-center text-gray-500">No repositories found. Try a new search!</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {repositories.map((repo) => (
        <div key={repo.url} className="bg-white p-6 border-2 border-foreground shadow-[theme(boxShadow.neo)] transition-shadow hover:shadow-none">
          <h3 className="text-xl font-bold mb-2 truncate">
            <a href={repo.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              {repo.name}
            </a>
          </h3>
          <p className="text-sm text-gray-600 mb-4 h-16 overflow-hidden">{repo.description}</p>
          <div className="flex justify-between items-center text-sm">
            <span>⭐ {repo.stars}</span>
            <span>{repo.language || 'N/A'}</span>
            <span>Forks: {repo.forks}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;