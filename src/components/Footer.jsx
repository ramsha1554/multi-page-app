// simple footer component. just normal text with copyright
// will display this at the bottom of the main layout wrapper
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-12 text-center text-xs text-gray-500">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>&copy; {new Date().getFullYear()} Student Intern Project. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
