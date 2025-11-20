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
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Conçu pour les équipes de rénovation énergétique</h2>
        <p className="mx-auto mt-2 max-w-2xl text-blue-100/80">
          Commencez par l’essentiel : projets, CEE/MAR, audits et documents. Étendez au fur et à mesure.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Feature title="Centre de projets" desc="Créez et suivez les projets, assignez les responsables, gérez plannings et budgets." />
        <Feature title="Gestion CEE" desc="Pilotez les dossiers du brouillon à l’acceptation. Joignez les justificatifs et générez des rapports." />
        <Feature title="Ma Prime Rénov'" desc="Suivez l’éligibilité, le dépôt et les paiements. Maintenez une traçabilité claire." />
        <Feature title="Audits énergétiques" desc="Planifiez les audits, importez les rapports et suivez les validations clients." />
        <Feature title="Documents" desc="Téléversements versionnés pour devis, factures, CCTP, photos — tout centralisé." />
        <Feature title="Portail client" desc="Donnez un accès sécurisé à l’avancement, aux documents et aux notifications." />
      </div>
    </section>
  )
}

export default Features
