export const metadata = {
  title: "Профайл — Ажилдаа",
};

export default function ProfilePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Профайл</h1>
      {/* TODO: Fetch session user and render profile */}
      <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center text-gray-400">
        Профайл мэдээлэл энд харагдана
      </div>
    </div>
  );
}
