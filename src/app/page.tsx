import Link from 'next/link';
import { services } from '@/data/services';
import { industries } from '@/data/industries';
import { caseStudies } from '@/data/caseStudies';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-primary to-primary-light" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(212,175,55,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(48,64,160,0.2) 0%, transparent 50%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-light to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-8 border border-accent/20">
            <span className="material-symbols-outlined text-accent text-sm">verified</span>
            <span className="text-accent text-xs font-bold uppercase tracking-widest">#1 Home Service Marketing Agency</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
            We Build <span className="gradient-text">Growth Engines</span><br />
            for Home Service Pros
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Google Ads. Local SEO. Websites that convert. We turn your marketing budget into booked jobs with data-driven strategies built exclusively for contractors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/audit" className="flex items-center justify-center gap-2 h-14 px-8 bg-accent text-primary font-bold rounded-full shadow-2xl shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-1 transition-all text-lg">
              <span className="material-symbols-outlined">assessment</span>
              Get Your Free Audit
            </Link>
            <Link href="/results" className="flex items-center justify-center gap-2 h-14 px-8 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg">
              <span className="material-symbols-outlined">play_circle</span>
              See Results
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Home Service Clients' },
              { value: '12:1', label: 'Average Client ROI' },
              { value: '$50M+', label: 'Revenue Generated' },
              { value: '4.9★', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="p-4">
                <p className="text-3xl md:text-4xl font-black text-primary mb-1">{stat.value}</p>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Our Growth Services</h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Everything you need to dominate your local market and keep your trucks rolling.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all">
                  <span className="material-symbols-outlined text-accent text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors">{service.shortTitle}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{service.description}</p>
                <div className="flex items-center gap-1 mt-6 text-accent text-sm font-semibold">
                  Learn More <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Who We Serve</p>
            <h2 className="text-3xl md:text-5xl font-bold text-primary">Industries We Dominate</h2>
            <p className="mt-4 text-slate-500 max-w-2xl mx-auto">Specialized marketing strategies for every home service category.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] card-3d"
              >
                <img src={industry.image} alt={industry.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-accent text-2xl">{industry.icon}</span>
                    <h3 className="text-xl font-bold text-white">{industry.title}</h3>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{industry.description}</p>
                  <div className="flex items-center gap-2 mt-4">
                    <span className="text-accent text-xs font-bold">Avg. ROI: {industry.avgROI}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Proven Results</p>
            <h2 className="text-3xl md:text-5xl font-bold">Real Results for Real Businesses</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/results/${cs.slug}`}
                className="group bg-white/5 backdrop-blur border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all hover:-translate-y-1"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img src={cs.heroImage} alt={cs.company} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-navy/40" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-primary text-xs font-bold rounded-full">{cs.industry}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors flex items-center gap-2">
                    <span className="text-2xl">{cs.logo}</span> {cs.company}
                  </h3>
                  <p className="text-sm text-slate-300">{cs.tagline}</p>
                  <div className="flex flex-wrap gap-4 mt-4">
                    {cs.results.slice(0, 3).map((r) => (
                      <div key={r.metric} className="text-center">
                        <p className="text-lg font-black text-accent">{r.value}</p>
                        <p className="text-xs text-slate-400">{r.metric}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/results" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-bold rounded-full hover:shadow-2xl hover:shadow-accent/30 transition-all">
              View All Case Studies <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* The ACERO Process */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-xs font-bold uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl md:text-5xl font-bold text-primary">The ACERO Growth Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', icon: 'search', title: 'Audit', desc: 'We analyze your current marketing, competitors, and market opportunity.' },
              { step: '02', icon: 'architecture', title: 'Strategize', desc: 'Custom growth plan built around your services, area, and budget.' },
              { step: '03', icon: 'rocket_launch', title: 'Launch', desc: 'Deploy campaigns with conversion tracking and real-time dashboards.' },
              { step: '04', icon: 'trending_up', title: 'Scale', desc: 'Continuous optimization to lower costs and increase lead volume.' },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="w-20 h-20 rounded-2xl bg-primary mx-auto mb-6 flex items-center justify-center group-hover:-translate-y-2 transition-transform">
                  <span className="material-symbols-outlined text-accent text-3xl">{item.icon}</span>
                </div>
                <p className="text-accent text-xs font-black tracking-widest mb-2">STEP {item.step}</p>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary via-navy to-primary-light relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(212,175,55,0.1) 0%, transparent 50%)' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to Fill Your Schedule?</h2>
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
            Get a free, no-obligation marketing audit and discover exactly how much revenue you&apos;re leaving on the table.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/audit" className="flex items-center justify-center gap-2 h-14 px-10 bg-accent text-primary font-bold rounded-full shadow-2xl shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-1 transition-all text-lg">
              <span className="material-symbols-outlined">assessment</span>
              Claim Your Free Audit
            </Link>
            <Link href="/contact" className="flex items-center justify-center gap-2 h-14 px-10 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg">
              <span className="material-symbols-outlined">call</span>
              Call 1-800-555-0199
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
