import { DetailedRepository } from "@/types";
import Image from "next/image";

type Props = {
  repo: DetailedRepository;
};

const StatCard = ({ label, value }: { label: string; value: string | number }) => (
  <div className="bg-background p-4 border-2 border-foreground">
    <p className="text-sm text-gray-600">{label}</p>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const RepoDetailCard: React.FC<Props> = ({ repo }) => {
  return (
    <div className="bg-white p-6 border-2 border-foreground shadow-[theme(boxShadow.neo)] mt-8">
      <div className="flex items-center mb-4">
        <Image
          src={repo.owner.avatar_url}
          alt={repo.owner.login}
          width={50}
          height={50}
          className="rounded-full border-2 border-foreground"
        />
        <div className="ml-4">
          <h2 className="text-2xl font-bold">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              {repo.full_name}
            </a>
          </h2>
        </div>
      </div>
      <p className="text-gray-700 mb-6">{repo.description}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Stars" value={repo.stargazers_count.toLocaleString()} />
        <StatCard label="Forks" value={repo.forks_count.toLocaleString()} />
        <StatCard label="Open Issues" value={repo.open_issues_count.toLocaleString()} />
        <StatCard label="Language" value={repo.language} />
      </div>
    </div>
  );
};

export default RepoDetailCard;