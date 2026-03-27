export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Pramod Sharma. All rights reserved.
      </div>
    </footer>
  )
}
