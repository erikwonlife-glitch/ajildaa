import Image from "next/image";
import { formatCurrency } from "@/lib/utils";

interface WorkerProfile {
  title: string;
  bio: string | null;
  skills: string[];
  hourlyRate: number;
  availability: boolean;
  location: string | null;
  user: {
    name: string | null;
    avatarUrl: string | null;
    createdAt: Date;
  };
  _count?: {
    completedJobs?: number;
    reviews?: number;
  };
  averageRating?: number;
}

export default function ProfileCard({ profile }: { profile: WorkerProfile }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      {/* Avatar & name */}
      <div className="flex items-start gap-4 mb-4">
        <div className="relative w-16 h-16 flex-shrink-0">
          {profile.user.avatarUrl ? (
            <Image
              src={profile.user.avatarUrl}
              alt={profile.user.name ?? ""}
              fill
              className="rounded-full object-cover"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-700">
              {(profile.user.name ?? "?")[0].toUpperCase()}
            </div>
          )}
          <span
            className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ${
              profile.availability ? "bg-green-500" : "bg-gray-400"
            }`}
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 truncate">
            {profile.user.name ?? "Нэргүй"}
          </h3>
          <p className="text-sm text-gray-500 truncate">{profile.title}</p>
          {profile.location && (
            <p className="text-xs text-gray-400 mt-0.5">📍 {profile.location}</p>
          )}
        </div>
      </div>

      {/* Rating */}
      {profile.averageRating !== undefined && (
        <div className="flex items-center gap-1 mb-3">
          <span className="text-yellow-400">★</span>
          <span className="text-sm font-medium text-gray-700">
            {profile.averageRating.toFixed(1)}
          </span>
          <span className="text-xs text-gray-400">
            ({profile._count?.reviews ?? 0} үнэлгээ)
          </span>
        </div>
      )}

      {/* Bio */}
      {profile.bio && (
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">{profile.bio}</p>
      )}

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {profile.skills.slice(0, 5).map((skill) => (
          <span
            key={skill}
            className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Rate & status */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="font-bold text-gray-900">
          {formatCurrency(profile.hourlyRate)}
          <span className="text-xs text-gray-400 font-normal ml-1">/цаг</span>
        </span>
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full ${
            profile.availability
              ? "bg-green-50 text-green-700"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {profile.availability ? "Боломжтой" : "Завгүй"}
        </span>
      </div>
    </div>
  );
}
