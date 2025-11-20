function CTA() {
  return (
    <section id="cta" className="relative mx-auto max-w-6xl px-6 pb-24">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 p-8 text-center text-white shadow-xl">
        <h3 className="text-2xl font-semibold">Ready to streamline your renovation workflows?</h3>
        <p className="mx-auto mt-2 max-w-2xl text-blue-50/80">
          This preview includes a live backend and sample endpoints. Check status, then extend with your data.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="/test" className="rounded-lg bg-white/20 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/30">Check Backend</a>
          <a href="#" className="rounded-lg bg-blue-500 px-5 py-3 font-medium text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400">Request a Demo</a>
        </div>
      </div>
    </section>
  )
}

export default CTA
