export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-amber-400 font-semibold uppercase tracking-wider mb-4">
            HeadStart Marketing
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Fractional Head of Marketing for SMEs
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mb-8">
            Senior marketing leadership without the cost of a full-time hire.
          </p>

          <p className="text-lg text-slate-400 max-w-3xl mb-10">
            Get 15 years of marketing experience, strategic direction and
            hands-on execution for less than the cost of a junior marketer.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-3 rounded-lg"
            >
              Book a Free Consultation
            </a>

            <a
              href="#services"
              className="border border-white px-6 py-3 rounded-lg"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 border-b">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Trusted by organisations including
          </h2>

          <div className="grid md:grid-cols-5 gap-4 text-center">
            <div>Tata Chemicals Europe</div>
            <div>Brabners LLP</div>
            <div>Euromonitor International</div>
            <div>Optimum Medical</div>
            <div>Vyne</div>
            <div>Football DNA</div>
            <div>The Coaching Manual</div>
            <div>HAP Solutions Group</div>
            <div>Monitra</div>
            <div>Universal Hip Hop Museum</div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Marketing leadership that delivers measurable growth
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">
                Increased Website Traffic
              </h3>
              <p>Delivered traffic growth of 50%+ across multiple brands.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">Budget Ownership</h3>
              <p>Managed multiple marketing budgets exceeding £500,000.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">Audience Growth</h3>
              <p>Built YouTube channels to over 100,000 subscribers.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">Brand Launches</h3>
              <p>
                Launched apps, services and brands including TopTekkers.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">Team Leadership</h3>
              <p>Managed and developed marketing teams of 10+ people.</p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">Cross-Sector Experience</h3>
              <p>
                Legal, Sport, SaaS, Education, Healthcare, Manufacturing and
                Non-Profit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold">
                Marketing Strategy
              </h3>
              <p className="text-amber-600 text-xl font-bold my-4">
                £2,150
              </p>
              <p>
                Here's exactly what you should be doing and why.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold">
                Fractional Head of Marketing
              </h3>
              <p className="text-amber-600 text-xl font-bold my-4">
                £1,600 / month
              </p>
              <p>
                Senior marketing leadership without a senior salary.
              </p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold">
                Embedded Marketing Lead
              </h3>
              <p className="text-amber-600 text-xl font-bold my-4">
                £2,700 / month
              </p>
              <p>A part-time Head of Marketing.</p>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold">
                Growth Partner
              </h3>
              <p className="text-amber-600 text-xl font-bold my-4">
                £4,300 / month
              </p>
              <p>An outsourced marketing director.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">
            About Richard Redman
          </h2>

          <p className="text-lg text-slate-300 mb-6">
            I'm a senior marketing leader with more than 15 years of experience
            helping organisations increase market share, strengthen brand
            awareness and deliver commercial growth.
          </p>

          <p className="text-lg text-slate-300">
            Through HeadStart Marketing, I provide SMEs with access to strategic
            marketing leadership without the overhead of a full-time executive
            hire.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8">
            Book a Free Consultation
          </h2>

          <form
            action="https://formspree.io/f/xzdqrvld"
            method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border p-4 rounded"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border p-4 rounded"
              required
            />

            <textarea
              name="message"
              placeholder="Tell me about your business and goals"
              rows={6}
              className="w-full border p-4 rounded"
            />

            <button
              type="submit"
              className="bg-slate-900 text-white px-8 py-4 rounded-lg"
            >
              Send Enquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
