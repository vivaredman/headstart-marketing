export default function WebinarPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="max-w-4xl mx-auto px-6 py-20">

        <p className="text-amber-500 font-semibold uppercase tracking-wider mb-4">
          Free Webinar
        </p>

        <h1 className="text-5xl font-bold mb-6">
          Why Hiring a Junior Marketer Could Be Costing Your Business Growth
        </h1>

        <p className="text-xl text-slate-600 mb-10">
          Discover the hidden costs of junior marketing hires and learn how
          growing SMEs can access senior marketing leadership without the cost
          of a full-time Head of Marketing.
        </p>

        <div className="bg-slate-100 rounded-xl p-6 mb-10">
          <h2 className="font-bold text-xl mb-4">
            Webinar Details
          </h2>

          <ul className="space-y-2">
            <li>📅 Wednesday 17 June</li>
            <li>🕧 12:30pm - 1:15pm</li>
            <li>💻 Online</li>
            <li>🎟 Free to attend</li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="font-bold text-2xl mb-4">
            What You'll Learn
          </h2>

          <ul className="space-y-3">
            <li>✓ The hidden costs of junior marketing hires</li>
            <li>✓ Why marketing often underperforms in SMEs</li>
            <li>✓ The marketing leadership gap</li>
            <li>✓ How fractional marketing works</li>
            <li>✓ Questions to ask before making your next hire</li>
          </ul>
        </div>
<div className="bg-slate-100 rounded-xl p-6 mb-10">
  <h2 className="font-bold text-2xl mb-4">
    Who Is This For?
  </h2>

  <ul className="space-y-2 mb-6">
    <li>✓ SME Owners</li>
    <li>✓ Managing Directors</li>
    <li>✓ Commercial Directors</li>
    <li>✓ Businesses considering hiring a marketer</li>
    <li>✓ Businesses struggling to generate consistent leads</li>
  </ul>

  <h3 className="font-bold text-xl mb-3">
    Who Is This Not For?
  </h3>

  <ul className="space-y-2">
    <li>✕ Marketing agencies</li>
    <li>✕ Large in-house marketing teams</li>
    <li>✕ Students and graduates</li>
  </ul>
</div>
        <div className="bg-slate-900 text-white rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            Reserve Your Place
          </h2>

          <form
  action="https://formspree.io/f/mwvjqrey"
  method="POST"
  className="space-y-4"
>
    <input
  type="hidden"
  name="_redirect"
  value="https://headstart-marketing.co.uk/webinar/thank-you"
/>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded bg-white text-slate-900 border border-slate-300"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full p-3 rounded bg-white text-slate-900 border border-slate-300"
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="w-full p-3 rounded bg-white text-slate-900 border border-slate-300"
            />

            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-3 rounded-lg"
            >
              Register Free
            </button>
          </form>
        </div>

      </section>
    </main>
  );
}