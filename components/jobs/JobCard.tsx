import Link from "next/link";
import { formatCurrency, formatRelativeTime } from "@/lib/utils";

interface Job {
  id: string;
  title: string;
  category: string;
  budget: number;
  isFixedPrice: boolean;
  isRemote: boolean;
  skills: string[];
  proposalCount: number;
  createdAt: Date;
  client: { name: string; avatarUrl: string | null };
}

export default function JobCard({ job }: { job: Job }) {
  return (
    <Link
      href={`/jobs/${job.id}`}
      className="block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all p-5"
    >
      {/* Header */}
      <div className="flex justify-between items-start gap-2 mb-3">
        <span className="text-xs font-medium bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">
          {job.category}
        </span>
        <span className="text-xs text-gray-400 whitespace-nowrap">
          {formatRelativeTime(job.createdAt)}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 leading-snug">
        {job.title}
      </h3>
      <p className="text-xs text-gray-500 mb-3">{job.client.name}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {job.skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div>
          <span className="font-bold text-gray-900">
            {formatCurrency(job.budget)}
          </span>
          <span className="text-xs text-gray-400 ml-1">
            {job.isFixedPrice ? "(тогтмол)" : "/сар"}
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span className={`flex items-center gap-1 ${job.isRemote ? "text-green-600" : "text-orange-600"}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {job.isRemote ? "Зайнаас" : "Байранд"}
          </span>
          <span>{job.proposalCount} өргөдөл</span>
        </div>
      </div>
    </Link>
  );
}
