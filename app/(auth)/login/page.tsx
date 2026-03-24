import Link from "next/link";

export const metadata = {
  title: "Нэвтрэх — Ажилдаа",
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-md p-8">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-extrabold text-blue-700">
            Ажил<span className="text-red-600">даа</span>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 mt-4">Нэвтрэх</h1>
          <p className="text-gray-500 text-sm mt-1">Бүртгэлдээ нэвтрэх</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Цахим шуудан
            </label>
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              placeholder="example@mail.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Нууц үг
            </label>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>

          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-600 hover:text-blue-800"
            >
              Нууц үг мартсан?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            Нэвтрэх
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Бүртгэл байхгүй юу?{" "}
          <Link href="/register" className="text-blue-600 hover:text-blue-800 font-medium">
            Бүртгүүлэх
          </Link>
        </p>
      </div>
    </div>
  );
}
