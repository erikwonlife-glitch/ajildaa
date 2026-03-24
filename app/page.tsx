import { useTranslations } from "next-intl";
import Link from "next/link";
import JobCard from "@/components/jobs/JobCard";
import Navbar from "@/components/ui/Navbar";

// Mock data for initial render — replace with real Prisma queries
const MOCK_JOBS = [
  {
    id: "1",
    title: "React / Next.js Хөгжүүлэгч",
    category: "Мэдээлэл технологи",
    budget: 2500000,
    isFixedPrice: false,
    isRemote: true,
    skills: ["React", "Next.js", "TypeScript"],
    proposalCount: 4,
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    client: { name: "Nomadic Tech LLC", avatarUrl: null },
  },
  {
    id: "2",
    title: "UI/UX Дизайнер — Мобайл апп",
    category: "Дизайн",
    budget: 1800000,
    isFixedPrice: true,
    isRemote: true,
    skills: ["Figma", "Prototyping", "Mobile UI"],
    proposalCount: 7,
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    client: { name: "Golomt Bank", avatarUrl: null },
  },
  {
    id: "3",
    title: "Дижитал маркетинг менежер",
    category: "Маркетинг",
    budget: 1500000,
    isFixedPrice: false,
    isRemote: false,
    skills: ["SEO", "Social Media", "Google Ads"],
    proposalCount: 12,
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
    client: { name: "Mobicom Mongolia", avatarUrl: null },
  },
  {
    id: "4",
    title: "Python Backend хөгжүүлэгч",
    category: "Мэдээлэл технологи",
    budget: 3000000,
    isFixedPrice: false,
    isRemote: true,
    skills: ["Python", "FastAPI", "PostgreSQL"],
    proposalCount: 2,
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
    client: { name: "Lendmn", avatarUrl: null },
  },
  {
    id: "5",
    title: "Брэнд дизайн болон лого",
    category: "Дизайн",
    budget: 800000,
    isFixedPrice: true,
    isRemote: true,
    skills: ["Illustrator", "Branding", "Logo Design"],
    proposalCount: 9,
    createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000),
    client: { name: "Darkhan Dairy", avatarUrl: null },
  },
  {
    id: "6",
    title: "Санхүүгийн шинжээч",
    category: "Санхүү",
    budget: 2000000,
    isFixedPrice: false,
    isRemote: false,
    skills: ["Excel", "Financial Modeling", "Accounting"],
    proposalCount: 5,
    createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    client: { name: "Khan Bank", avatarUrl: null },
  },
];

const STATS = [
  { key: "jobs", value: "12,400+" },
  { key: "freelancers", value: "8,200+" },
  { key: "companies", value: "1,300+" },
  { key: "hired", value: "24,000+" },
];

const CATEGORIES = [
  { key: "it", icon: "💻" },
  { key: "design", icon: "🎨" },
  { key: "marketing", icon: "📣" },
  { key: "finance", icon: "💰" },
  { key: "education", icon: "📚" },
  { key: "construction", icon: "🏗️" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* ── Hero ── */}
      <HeroSection />

      {/* ── Stats ── */}
      <StatsSection />

      {/* ── Categories ── */}
      <CategoriesSection />

      {/* ── Latest Jobs ── */}
      <LatestJobsSection jobs={MOCK_JOBS} />

      {/* ── CTA ── */}
      <CTASection />

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Sub-sections (Server Components — use useTranslations via RSC)
// ─────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Монголын шилдэг
          <span className="block text-blue-300">ажлын платформ</span>
        </h1>
        <p className="text-lg md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Авъяаслаг мэргэжилтнүүдтэй холбогдож, хамгийн сайн боломжийг олоорой
        </p>

        {/* Search bar */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Ажил, ур чадвар, компани хайх..."
            className="flex-1 px-5 py-4 rounded-xl text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
          />
          <button className="bg-red-600 hover:bg-red-700 transition-colors px-8 py-4 rounded-xl text-lg font-semibold whitespace-nowrap">
            Хайх
          </button>
        </div>

        <p className="mt-6 text-blue-200 text-sm">
          Түгээмэл хайлт:{" "}
          {["React Developer", "UI/UX Designer", "Marketing Manager"].map(
            (tag) => (
              <Link
                key={tag}
                href={`/jobs?q=${encodeURIComponent(tag)}`}
                className="inline-block mx-1 underline underline-offset-2 hover:text-white"
              >
                {tag}
              </Link>
            )
          )}
        </p>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { label: "Нийт ажлын байр", value: "12,400+" },
    { label: "Мэргэжилтнүүд", value: "8,200+" },
    { label: "Компаниуд", value: "1,300+" },
    { label: "Амжилттай ажилд орсон", value: "24,000+" },
  ];

  return (
    <section className="bg-white border-b">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0">
        {stats.map((s) => (
          <div key={s.label} className="py-8 px-4 text-center">
            <p className="text-3xl font-extrabold text-blue-700">{s.value}</p>
            <p className="text-sm text-gray-500 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CategoriesSection() {
  const categories = [
    { label: "Мэдээлэл технологи", icon: "💻", count: 3420 },
    { label: "Дизайн", icon: "🎨", count: 1280 },
    { label: "Маркетинг", icon: "📣", count: 940 },
    { label: "Санхүү", icon: "💰", count: 720 },
    { label: "Боловсрол", icon: "📚", count: 580 },
    { label: "Барилга", icon: "🏗️", count: 450 },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Ангиллаар үзэх
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={`/jobs?category=${encodeURIComponent(cat.label)}`}
              className="flex flex-col items-center p-5 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all border border-gray-100"
            >
              <span className="text-3xl mb-2">{cat.icon}</span>
              <span className="text-xs font-medium text-gray-700 text-center">
                {cat.label}
              </span>
              <span className="text-xs text-gray-400 mt-1">{cat.count}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestJobsSection({ jobs }: { jobs: typeof MOCK_JOBS }) {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Сүүлийн ажлын байрууд
          </h2>
          <Link
            href="/jobs"
            className="text-blue-600 hover:text-blue-800 font-medium text-sm"
          >
            Бүгдийг харах →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 px-4 bg-blue-700 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Өнөөдөр эхлэх үү?
        </h2>
        <p className="text-blue-100 text-lg mb-8">
          Монголын шилдэг фрилансерүүд болон ажил олгогчидтой нэгдээрэй
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            Бүртгүүлэх — Үнэгүй
          </Link>
          <Link
            href="/jobs"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            Ажлын байр харах
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-white font-bold mb-4">Ажилдаа</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">Бидний тухай</Link></li>
            <li><Link href="/blog" className="hover:text-white">Блог</Link></li>
            <li><Link href="/careers" className="hover:text-white">Ажлын байр</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Ажил олгогчид</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/post-job" className="hover:text-white">Ажил нийтлэх</Link></li>
            <li><Link href="/freelancers" className="hover:text-white">Мэргэжилтэн хайх</Link></li>
            <li><Link href="/enterprise" className="hover:text-white">Корпорат шийдэл</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Фрилансерүүд</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/jobs" className="hover:text-white">Ажил хайх</Link></li>
            <li><Link href="/register" className="hover:text-white">Профайл үүсгэх</Link></li>
            <li><Link href="/resources" className="hover:text-white">Эх сурвалж</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Тусламж</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/help" className="hover:text-white">Тусламжийн төв</Link></li>
            <li><Link href="/contact" className="hover:text-white">Холбоо барих</Link></li>
            <li><Link href="/terms" className="hover:text-white">Үйлчилгээний нөхцөл</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-sm">
        <p>© 2024 Ажилдаа. Бүх эрх хуулиар хамгаалагдсан.</p>
      </div>
    </footer>
  );
}
