"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-blue-700">
              Ажил<span className="text-red-600">даа</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/jobs" className="text-gray-600 hover:text-blue-700 font-medium text-sm">
              Ажлын байр
            </Link>
            <Link href="/freelancers" className="text-gray-600 hover:text-blue-700 font-medium text-sm">
              Фрилансерүүд
            </Link>
          </div>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-gray-700 hover:text-blue-700 font-medium text-sm px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Нэвтрэх
            </Link>
            <Link
              href="/register"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm px-5 py-2 rounded-lg transition-colors"
            >
              Бүртгүүлэх
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t space-y-2">
            <Link href="/jobs" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Ажлын байр
            </Link>
            <Link href="/freelancers" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
              Фрилансерүүд
            </Link>
            <div className="pt-2 border-t flex flex-col gap-2">
              <Link href="/login" className="block px-4 py-2 text-center text-gray-700 border rounded-lg">
                Нэвтрэх
              </Link>
              <Link href="/register" className="block px-4 py-2 text-center bg-blue-700 text-white rounded-lg font-semibold">
                Бүртгүүлэх
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
