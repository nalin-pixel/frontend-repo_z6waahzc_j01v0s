import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="/" className="flex items-center gap-2">
          <img src="/flame-icon.svg" className="h-8 w-8" alt="Logo" />
          <span className="text-sm font-semibold text-white">ERFMS</span>
        </a>
        <nav className="hidden items-center gap-6 text-blue-100/80 sm:flex">
          <a href="#preview" className="hover:text-white">Features</a>
          <a href="/test" className="hover:text-white">Status</a>
          <a href="#cta" className="rounded-md bg-white/10 px-3 py-1.5 text-white hover:bg-white/20">Get Started</a>
        </nav>
        <button className="rounded-md border border-white/10 p-2 text-white sm:hidden">
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}

export default Navbar
