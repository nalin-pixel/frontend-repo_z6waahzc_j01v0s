function Feature({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-blue-100/80">{desc}</p>
    </div>
  )
}

function Features() {
  return (
    <section id="preview" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Built for energy renovation teams</h2>
        <p className="mx-auto mt-2 max-w-2xl text-blue-100/80">
          Start with the essentials: projects, CEE/MAR, audits, and documents. Extend as you grow.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Feature title="Project Hub" desc="Create and track projects, assign owners, manage timelines and budgets." />
        <Feature title="CEE Management" desc="Follow applications from draft to approval. Attach proofs and generate reports." />
        <Feature title="Ma Prime Rénov'" desc="Track eligibility, submission, and payments. Keep a clear audit trail." />
        <Feature title="Energy Audits" desc="Schedule audits, upload reports, and monitor client review status." />
        <Feature title="Documents" desc="Versioned uploads for quotes, invoices, specs, and photos — all centralized." />
        <Feature title="Client Portal" desc="Give clients secure access to progress, documents, and notifications." />
      </div>
    </section>
  )
}

export default Features
