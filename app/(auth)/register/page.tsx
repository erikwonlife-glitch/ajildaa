import Link from "next/link";

export const metadata = {
  title: "Бүртгүүлэх — Ажилдаа",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 w-full max-w-md p-8">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-extrabold text-blue-700">
            Ажил<span className="text-red-600">даа</span>
          </Link>
          <h1 className="text-xl font-bold text-gray-900 mt-4">Бүртгүүлэх</h1>
          <p className="text-gray-500 text-sm mt-1">Үнэгүй бүртгэл үүсгэх</p>
        </div>

        {/* Role selector */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button className="flex flex-col items-center p-4 border-2 border-blue-600 rounded-xl bg-blue-50">
            <span className="text-2xl mb-1">💼</span>
            <span className="text-sm font-semibold text-blue-700">Ажил олгогч</span>
          </button>
          <button className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-xl hover:border-gray-300">
            <span className="text-2xl mb-1">👨‍💻</span>
            <span className="text-sm font-semibold text-gray-600">Мэргэжилтэн</span>
          </button>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Бүтэн нэр
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Батболд Дорж"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Цахим шуудан
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="example@mail.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Утасны дугаар
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="+976 9999-9999"
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
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
          </div>

          <div className="flex items-start gap-2 pt-1">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              required
              className="mt-0.5 rounded border-gray-300"
            />
            <label htmlFor="terms" className="text-sm text-gray-500">
              <Link href="/terms" className="text-blue-600 hover:text-blue-800">
                Үйлчилгээний нөхцөл
              </Link>
              -тэй зөвшөөрч байна
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            Бүртгүүлэх
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Аль хэдийн бүртгэлтэй юу?{" "}
          <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
            Нэвтрэх
          </Link>
        </p>
      </div>
    </div>
  );
}
