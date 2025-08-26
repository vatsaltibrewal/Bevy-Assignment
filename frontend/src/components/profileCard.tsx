import { UserProfile } from "@/types";
import Image from "next/image";

const ProfileCard: React.FC<{ profile: UserProfile }> = ({ profile }) => {
  return (
    <div className="bg-white p-6 border-2 border-foreground shadow-[theme(boxShadow.neo)] mt-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column */}
        <div className="text-center md:text-left">
          <Image
            src={profile.avatar_url}
            alt={profile.login}
            width={150}
            height={150}
            className="rounded-full border-4 border-foreground mx-auto md:mx-0"
          />
          <h2 className="text-3xl font-bold mt-4">{profile.name}</h2>
          <a href={profile.html_url} target="_blank" rel="noopener noreferrer" className="text-lg text-primary">
            @{profile.login}
          </a>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <span><span className="font-bold">{profile.followers.toLocaleString()}</span> Followers</span>
            <span>·</span>
            <span><span className="font-bold">{profile.following.toLocaleString()}</span> Following</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1">
          <p className="text-gray-700 mb-6">{profile.bio}</p>
          <h3 className="text-xl font-bold mb-4 border-b-2 border-foreground pb-2">Top Repositories</h3>
          <div className="space-y-3">
            {profile.topRepos.map(repo => (
              <div key={repo.id} className="flex justify-between items-center bg-background p-3 border-2 border-foreground">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="font-bold hover:text-primary">{repo.name}</a>
                <span className="text-sm font-semibold">⭐ {repo.stargazers_count.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;