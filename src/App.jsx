import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background subtle pattern */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(14,165,233,0.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.1),transparent_40%)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <CTA />
      </main>
    </div>
  )
}

export default App
