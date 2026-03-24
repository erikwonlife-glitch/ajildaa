export const metadata = {
  title: "Гэрээнүүд — Ажилдаа",
};

export default function ContractsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Миний гэрээнүүд</h1>
      {/* TODO: Fetch contracts for current user */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center text-gray-400">
        Гэрээнүүд энд харагдана
      </div>
    </div>
  );
}
