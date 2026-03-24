export const metadata = {
  title: "Ажлын байрууд — Ажилдаа",
};

export default function JobsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Ажлын байрууд</h1>
      <p className="text-gray-500 mb-8">Нийт 12,400+ ажлын байр олдлоо</p>
      {/* TODO: Add filters and job list */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center text-gray-400">
        Ажлын байрны жагсаалт энд харагдана
      </div>
    </div>
  );
}
