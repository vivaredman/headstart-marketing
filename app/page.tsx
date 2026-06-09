import Navbar from "../components/Navbar";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
  <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
    <div>
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
        Get 15 years of marketing experience, strategic direction and hands-on
        execution for less than the cost of a junior marketer.
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

    <div className="relative">
      <Image
        src="/richard-redman.jpeg"
        alt="Richard Redman, Fractional Head of Marketing"
        width={520}
        height={620}
        className="rounded-2xl shadow-2xl object-cover"
        priority
      />
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
      <section id="results" className="py-20 bg-slate-50">
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
<section id="services" className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center max-w-3xl mx-auto mb-14">
      <p className="text-amber-600 font-semibold uppercase tracking-wider mb-3">
        Services
      </p>
      <h2 className="text-4xl md:text-5xl font-bold mb-5">
        Senior marketing support, built around your business
      </h2>
      <p className="text-lg text-slate-600">
        Choose the level of strategic leadership, hands-on support and team
        direction your business needs right now.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {[
        {
          title: "Marketing Strategy",
          price: "£2,150",
          strapline: "Here's exactly what you should be doing and why.",
          items: [
            "Business objectives",
            "Market and competitor analysis",
            "Customer research and profiling",
            "Messaging and positioning",
            "Channel identification",
            "Customer journey mapping",
            "12-month marketing roadmap",
            "Content strategy",
          ],
        },
        {
          title: "Fractional Head of Marketing",
          price: "£1,600 / month",
          strapline: "Senior marketing leadership without a senior salary.",
          items: [
            "1 day per week",
            "Monthly planning",
            "Strategy ownership",
            "Email and social campaigns",
            "Social media ownership",
            "Team mentorship",
            "KPI reporting",
            "Agency and supplier management",
          ],
        },
        {
          title: "Embedded Marketing Lead",
          price: "£2,700 / month",
          strapline: "A part-time Head of Marketing.",
          items: [
            "2 days per week",
            "Team management",
            "Budget ownership",
            "Recruitment support",
            "Campaign oversight",
            "Weekly meetings",
            "Department leadership",
          ],
        },
        {
          title: "Growth Partner",
          price: "£4,300 / month",
          strapline: "An outsourced marketing director.",
          items: [
            "3-4 days per week",
            "Strategy and leadership",
            "Performance reviews",
            "Board participation",
            "Forecasting",
            "Quarterly planning workshops",
            "Full marketing direction",
          ],
        },
      ].map((service) => (
        <div
          key={service.title}
          className="rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition"
        >
          <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
          <p className="text-3xl font-bold text-amber-600 mb-4">
            {service.price}
          </p>
          <p className="text-slate-700 font-medium mb-6">
            “{service.strapline}”
          </p>

          <ul className="space-y-3 mb-8">
            {service.items.map((item) => (
              <li key={item} className="flex gap-3 text-slate-600">
                <span className="text-amber-600 font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-block bg-slate-900 text-white px-5 py-3 rounded-lg font-semibold hover:bg-slate-800"
          >
            Enquire about this
          </a>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Comparison */}
<section className="py-20 bg-slate-50">
  <div className="max-w-5xl mx-auto px-6">
    <div className="text-center mb-12">
      <p className="text-amber-600 font-semibold uppercase tracking-wider mb-3">
        Why Fractional?
      </p>

      <h2 className="text-4xl font-bold mb-4">
        Executive-level marketing leadership at a fraction of the cost
      </h2>

      <p className="text-lg text-slate-600">
        Access senior marketing expertise without the commitment and overhead
        of a full-time hire.
      </p>
    </div>

    <div className="overflow-hidden rounded-2xl shadow-lg">
      <table className="w-full bg-white">
        <thead className="bg-slate-900 text-white">
          <tr>
            <th className="text-left p-5">Option</th>
            <th className="text-left p-5">Typical Annual Cost</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b">
            <td className="p-5">Junior Marketer</td>
            <td className="p-5">£28,000 – £35,000</td>
          </tr>

          <tr className="border-b">
            <td className="p-5">Marketing Manager</td>
            <td className="p-5">£45,000 – £60,000</td>
          </tr>

          <tr className="border-b">
            <td className="p-5">Head of Marketing</td>
            <td className="p-5">£70,000 – £100,000+</td>
          </tr>

          <tr className="bg-amber-50">
            <td className="p-5 font-bold">
              HeadStart Marketing
            </td>

            <td className="p-5 font-bold text-amber-700">
              From £19,200 per year
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
{/* Why HeadStart */}
<section className="py-20 bg-slate-900 text-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-12">
      <p className="text-amber-400 font-semibold uppercase tracking-wider mb-3">
        Why Businesses Choose HeadStart
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-5">
        Executive-level marketing expertise without executive-level costs
      </h2>

      <p className="text-lg text-slate-300 max-w-3xl mx-auto">
        Access the experience, strategic thinking and leadership of a senior
        marketing professional without the overhead of a full-time hire.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-slate-800 rounded-2xl p-8">
        <div className="text-amber-400 text-3xl mb-4">✓</div>
        <h3 className="text-xl font-bold mb-3">
          15 Years of Experience
        </h3>
        <p className="text-slate-300">
          Benefit from senior-level expertise gained across legal,
          manufacturing, healthcare, education, sport, SaaS and non-profit
          sectors.
        </p>
      </div>

      <div className="bg-slate-800 rounded-2xl p-8">
        <div className="text-amber-400 text-3xl mb-4">✓</div>
        <h3 className="text-xl font-bold mb-3">
          Fraction of the Cost of a Full-Time Marketing Leader
        </h3>
        <p className="text-slate-300">
          Access strategic leadership, planning and execution for less than
          many businesses spend on an entry-level marketer.
        </p>
      </div>

      <div className="bg-slate-800 rounded-2xl p-8">
        <div className="text-amber-400 text-3xl mb-4">✓</div>
        <h3 className="text-xl font-bold mb-3">
          Immediate Impact
        </h3>
        <p className="text-slate-300">
          No lengthy onboarding or learning curve. Start benefiting from
          proven marketing expertise from day one.
        </p>
      </div>

      <div className="bg-slate-800 rounded-2xl p-8">
        <div className="text-amber-400 text-3xl mb-4">✓</div>
        <h3 className="text-xl font-bold mb-3">
          No Recruitment Risk
        </h3>
        <p className="text-slate-300">
          Avoid recruitment fees, probation periods, pension contributions
          and long-term employment commitments.
        </p>
      </div>

      <div className="bg-slate-800 rounded-2xl p-8">
        <div className="text-amber-400 text-3xl mb-4">✓</div>
        <h3 className="text-xl font-bold mb-3">
          Strategic & Hands-On
        </h3>
        <p className="text-slate-300">
          Not just advice. Get strategy, planning, implementation and
          performance management in one package.
        </p>
      </div>

      <div className="bg-slate-800 rounded-2xl p-8">
        <div className="text-amber-400 text-3xl mb-4">✓</div>
        <h3 className="text-xl font-bold mb-3">
          Flexible Engagement
        </h3>
        <p className="text-slate-300">
          Scale support up or down as your business grows without committing
          to a full-time salary.
        </p>
      </div>
    </div>
  </div>
</section>
{/* Additional Services */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-12">
      <p className="text-amber-600 font-semibold uppercase tracking-wider mb-3">
        Additional Services
      </p>

      <h2 className="text-4xl font-bold mb-4">
        One-off support when you need it
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      <div className="border rounded-2xl p-8 shadow-sm">
        <h3 className="text-2xl font-bold mb-3">
          Marketing Audit
        </h3>

        <p className="text-amber-600 text-3xl font-bold mb-5">
          £750
        </p>

        <ul className="space-y-3 text-slate-600">
          <li>✓ Website review</li>
          <li>✓ SEO review</li>
          <li>✓ Analytics review</li>
          <li>✓ Content review</li>
          <li>✓ Social media review</li>
          <li>✓ Competitor analysis</li>
        </ul>

        <a
          href="#contact"
          className="inline-block mt-6 bg-slate-900 text-white px-5 py-3 rounded-lg"
        >
          Enquire Now
        </a>
      </div>

      <div className="border rounded-2xl p-8 shadow-sm">
        <h3 className="text-2xl font-bold mb-3">
          Content Strategy
        </h3>

        <p className="text-amber-600 text-3xl font-bold mb-5">
          £995
        </p>

        <ul className="space-y-3 text-slate-600">
          <li>✓ Content pillars</li>
          <li>✓ SEO opportunities</li>
          <li>✓ LinkedIn strategy</li>
          <li>✓ Editorial calendar</li>
        </ul>

        <a
          href="#contact"
          className="inline-block mt-6 bg-slate-900 text-white px-5 py-3 rounded-lg"
        >
          Enquire Now
        </a>
      </div>
    </div>
  </div>
</section>
      {/* About */}
      <section id="about" className="bg-slate-900 text-white py-20">
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
    </>
  );
}