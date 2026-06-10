export default function WebinarThankYouPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-amber-400 font-semibold uppercase tracking-wider mb-4">
          You’re registered
        </p>

        <h1 className="text-5xl font-bold mb-6">
          Thanks for signing up
        </h1>

        <p className="text-xl text-slate-300 mb-8">
          You’re registered for:
        </p>

        <div className="bg-white text-slate-900 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Why Hiring a Junior Marketer Could Be Costing Your Business Growth
          </h2>

          <p className="mb-2">📅 Wednesday 17 June</p>
          <p className="mb-2">🕧 12:30pm – 1:15pm</p>
          <p>💻 Online</p>
        </div>

        <p className="text-slate-300 mb-8">
          I’ll send joining instructions by email before the session. In the
          meantime, feel free to connect with me on LinkedIn.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/redmanrichard/"
            className="bg-amber-500 text-slate-900 font-bold px-6 py-3 rounded-lg"
          >
            Connect on LinkedIn
          </a>

          <a
            href="/"
            className="border border-white px-6 py-3 rounded-lg"
          >
            Back to Homepage
          </a>
        </div>
      </section>
    </main>
  );
}