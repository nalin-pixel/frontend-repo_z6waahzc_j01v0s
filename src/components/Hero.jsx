import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DAWBaaySM7FLUKpn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Voile dégradé pour la lisibilité */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/80" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center sm:pt-28">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-200">
          ERFMS • SaaS de gestion de dossiers de rénovation énergétique
        </span>
        <h1 className="mb-4 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-6xl">
          Centralisez vos dossiers. Automatisez vos workflows. Satisfaites vos clients.
        </h1>
        <p className="max-w-2xl text-blue-100/90">
          Un cockpit back-office et un portail client pour les workflows CEE, Ma Prime Rénov' et audits énergétiques — le tout sur une plateforme sécurisée.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#preview" className="rounded-lg bg-blue-500 px-5 py-3 text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400">Voir l’aperçu</a>
          <a href="/test" className="rounded-lg border border-white/20 px-5 py-3 text-blue-100 transition hover:bg-white/10">Vérifier le backend</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
