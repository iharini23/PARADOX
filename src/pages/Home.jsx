import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Target,
  Zap,
  Layers,
  Users,
  Sparkles,
} from 'lucide-react';
import Button from '../components/Button';
import usePageMetadata from '../hooks/usePageMetadata';

export default function Home() {
  usePageMetadata(
    'PARADOX | Meta Ads & Ad Creatives Agency',
    'PARADOX makes clients a ton of money through Meta ads that steal the show and minimalist campaign structures that scale sustainably.',
  );

  // Form submission state
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  // Helper for scroll to element
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-theme">
      {/* 1. Hero Section */}
      <section id="home" className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden py-16 lg:py-24">
        <div className="section-shell relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Performance Meta Ads Agency
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.1] text-slate-900 sm:text-6xl lg:text-7xl tracking-tight">
              IMPACTFUL ADS.<br />
              <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">KILLER RESULTS.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              We make our clients a ton of money through Meta ads that steal the show and minimalist campaign structures that scale sustainably.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#contact" variant="primary" className="px-7 py-4 text-base font-bold">
                Get Free Case Study <ArrowRight className="h-5 w-5" />
              </Button>
              <Button href="#why-us" variant="secondary" className="px-7 py-4 text-base font-bold">
                What Makes Us Different
              </Button>
            </div>
          </motion.div>

          {/* Interactive Visual Element */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 h-40 w-40 bg-primary/5 rounded-full blur-3xl -z-10" />
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Campaign Monitor</h3>
                  <p className="text-xs text-slate-500">Live acquisition funnel data</p>
                </div>
                <div className="rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-600 flex items-center gap-1 animate-pulse">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" /> Active Scaling
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500">ROAS Average</p>
                      <p className="text-lg font-bold text-slate-900">4.1x</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-500 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-0.5">+45%</span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500">Acquisition Cost (CPR)</p>
                      <p className="text-lg font-bold text-slate-900">₹320</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-500 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-0.5">-30%</span>
                </div>

                {/* Progress bar */}
                <div className="pt-2">
                  <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
                    <span>Ad CTR Level</span>
                    <span>Industry Avg (1.0%) vs Ours (2.1%)</span>
                  </div>
                  <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden flex">
                    <div className="h-full bg-slate-300 w-[45%]" />
                    <div className="h-full bg-primary w-[55%]" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Why Us Section */}
      <section id="why-us" className="bg-slate-50 border-y border-slate-200/50 py-20 sm:py-28">
        <div className="section-shell">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
              What makes us different?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Most agency media buyers run bloated campaign structures and generic creatives. We build high-converting landing pages and minimalist campaigns tailored for algorithmic scaling.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Attribution Model',
                icon: Target,
                desc: "Facebook operates on a last-touch attribution model. This means, the last ad a user clicks and takes action on will get the conversion attributed to it. As a result, you pause the ad that doesn't show you desired CPR inside your ads manager. That's a mistake we don't make. We make decisions based on behavior, not just attributed conversions.",
              },
              {
                title: 'Algorithmic Scaling',
                icon: Layers,
                desc: "Facebook's algorithm is designed to find our ideal customers and retarget them until they buy. Launching multiple campaigns and ad sets creates audience overlap, auction overlap and ad fatigue. As a result, it increases your overall CPR. That's a mistake we don't make. We follow a minimalist one-campaign strategy for stable performance at scale.",
              },
              {
                title: 'Ad Variables',
                icon: Zap,
                desc: "Every Facebook Ad has 8 variables. You write an ad from one perspective failing to realize that it may not perform at scale. That's a mistake we don't make. We create an ad on one topic from different perspectives and awareness levels to increase your TAM. With our attribution model and one-campaign strategy, we deliver stable results, at scale.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Callout Banner Section */}
      <section className="bg-slate-900 text-white py-20 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#046bd2_0%,transparent_60%)] opacity-35" />
        <div className="section-shell relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.25em] font-bold text-primary mb-3">Our Core Philosophy</p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white max-w-4xl mx-auto uppercase">
              ADVERTISING IS NOT MAGIC,<br />
              <span className="text-primary bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">IT'S CAUSE AND EFFECT.</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* 4. Results / Stats Section */}
      <section id="results" className="py-20 sm:py-28">
        <div className="section-shell">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
              Our methods are battle-tested
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We focus entirely on metric improvements that reflect directly on client bank balances. Here are the average results across our campaigns.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: '₹5Cr+',
                label: 'Generated Revenue',
                desc: 'Generated in revenue through Meta Ads for lead magnet as well as direct selling acquisition funnels.',
              },
              {
                value: '2x ↑',
                label: 'Better CTR',
                desc: 'Twice better click through rate of our ads than industry average. Great Ads = More Quality Clicks.',
              },
              {
                value: '30% ↓',
                label: 'Lower CPMs',
                desc: 'At least 30% lower CPMs on average. Perks of killer ads with a solid media buying strategy.',
              },
              {
                value: '83.33%',
                label: 'Success Rate',
                desc: 'Execution to success rate. 8 out of 10 times we ideate and execute an ad, it delivers results.',
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:shadow-md"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <p className="text-4xl font-extrabold text-primary tracking-tight">{stat.value}</p>
                <p className="text-sm font-bold text-slate-900 mt-2">{stat.label}</p>
                <p className="text-xs text-slate-600 mt-3 leading-relaxed">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Services We Offer Section */}
      <section id="services" className="bg-slate-50 border-y border-slate-200/50 py-20 sm:py-28">
        <div className="section-shell">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
              Services We Offer
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Choose the model that suits your business best. Whether you need full execution or just high-converting creatives, we have you covered.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Card 1 */}
            <motion.div
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div>
                <span className="text-xs font-bold text-primary uppercase bg-primary/5 border border-primary/10 rounded-full px-3.5 py-1">
                  Full Funnel Management
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-5">All things Meta Ads</h3>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  Best suited for business owners who don't have an in-house SMM team, are looking to outsource, or wish to launch and scale their business with Facebook & Instagram Ads.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">Done-For-You Funnels</span>
                <Button onClick={() => scrollTo('included')} variant="ghost" className="text-xs font-bold flex items-center gap-1">
                  KNOW MORE <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div>
                <span className="text-xs font-bold text-indigo-600 uppercase bg-indigo-50 border border-indigo-100 rounded-full px-3.5 py-1">
                  Ad Creative & Copy Only
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-5">All things Ad Creatives</h3>
                <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                  Best suited for business owners and marketing agencies who can manage media buying themselves, but require help with conceptualizing, scripting, and writing high-converting ads.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">Copy & Scripts</span>
                <Button onClick={() => scrollTo('included')} variant="ghost" className="text-xs font-bold flex items-center gap-1">
                  KNOW MORE <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. What's Included Section */}
      <section id="included" className="py-20 sm:py-28">
        <div className="section-shell">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
              Explore the differences
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See what’s included in each package side-by-side to make the right choice for your operation.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
            {/* Package 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 pb-4 border-b border-slate-100 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" /> All things Meta Ads
              </h3>
              <div className="mt-6 space-y-6">
                {[
                  {
                    title: 'Go-To-Market Strategy',
                    desc: 'A data-driven approach to help you position your brand and your product or service strategically by defining your TAM, SAM, and SOM to make you win the SMM game.',
                  },
                  {
                    title: 'Acquisition Model Funneling',
                    desc: 'We choose the right paid traffic-generation funnel that is best suited for you and your business goals, considering your customer lifetime value (LTV).',
                  },
                  {
                    title: 'Landing Page Design',
                    desc: 'We create top-notch landing page designs (short-form and long-form) that convert cold traffic generated from ads into active leads or sales.',
                  },
                  {
                    title: 'Direct-Response Copywriting',
                    desc: 'The job of a copywriter is to make the reader feel understood. We write sales pages, ad captions, product descriptions, and headlines that hook.',
                  },
                  {
                    title: 'Video Ad Creatives & Scripts',
                    desc: 'From fancy editing to UGC setup. We conceptualize the style, visuals, and write ad scripts matched to different market awareness levels.',
                  },
                  {
                    title: 'Full Ads Management & Media Buying',
                    desc: 'Setting up campaign structures, bidding variables, continuous optimization, scaling, and handling standard metrics directly.',
                  },
                  {
                    title: 'Consistent Funnel Optimization',
                    desc: 'Tweaking page layouts, headlines, loading speed, and adjusting marketing angles weekly for stable performance.',
                  },
                  {
                    title: 'Business Growth Consultation',
                    desc: 'Front-end marketing and back-end fulfillment must align. We jump on calls to brainstorm business expansion opportunities.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="mt-1 h-5 w-5 text-emerald-500 flex-shrink-0">✓</div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Package 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 pb-4 border-b border-slate-100 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6 text-indigo-600 flex-shrink-0" /> All things Ad Creatives
              </h3>
              <div className="mt-6 space-y-6">
                {[
                  {
                    title: 'Video Ad Creatives & Scripts',
                    desc: 'UGC outlines, fancy hook edits, and writing full script options for different social platform formats.',
                  },
                  {
                    title: 'Direct-Response Copywriting',
                    desc: 'Copywriting services for social copy, headlines, hooks, and short body angles to grab feed attention.',
                  },
                  {
                    title: 'Creative Angle Optimization',
                    desc: 'Adapting scripts, hooks, and captions based on performance data you share with our team.',
                  },
                  {
                    title: 'Latest Market Trends Consultation',
                    desc: 'Jumping on strategy calls to brainstorm new ideas and angles that align with current platform trends.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="mt-1 h-5 w-5 text-emerald-500 flex-shrink-0">✓</div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}

                {/* Exclusions Box */}
                <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Not Included</p>
                  <ul className="text-xs text-slate-400 space-y-1.5 list-disc pl-4">
                    <li>Go-to-market strategy definition & target mapping</li>
                    <li>LTV funnels selection</li>
                    <li>Landing page UI/UX design & development</li>
                    <li>Meta Ads Manager full management & media buying</li>
                    <li>Backend business alignment consultations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Meet The Team Section */}
      <section id="team" className="bg-slate-50 border-t border-b border-slate-200/50 py-20 sm:py-28">
        <div className="section-shell">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl tracking-tight">
              Meet The Team
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Partner with experienced performance advertisers who have been in the trenches and scaled actual businesses.
            </p>
          </div>

          <div className="max-w-3xl mx-auto rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
            <div className="grid gap-8 md:grid-cols-[150px_1fr] items-center">
              <div className="flex justify-center">
                <div className="h-28 w-28 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary text-3xl font-extrabold shadow-sm">
                  RS
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Rohan Sapra</h3>
                  <p className="text-xs font-bold text-primary uppercase mt-1">Founder & Performance Director</p>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Rohan is an online advertising expert who has documented success stories across 14+ different niches. After personally generating over ₹1 Crore within 15 months from a single digital product funnel, Rohan co-founded House of Roas LLP (operating as PARADOX) to execute these identical, battle-tested strategies for other course creators, coaches, and high-ticket service providers.
                </p>
                <div className="flex gap-4 text-xs font-bold text-slate-400">
                  <span className="flex items-center gap-1">✓ 14+ Niches Served</span>
                  <span className="flex items-center gap-1">✓ ₹3Cr+ Combined Ad Results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Contact Form Section */}
      <section id="contact" className="py-20 sm:py-28">
        <div className="section-shell max-w-3xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-64 w-64 bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="text-center max-w-xl mx-auto mb-10">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Free Case Study
              </h2>
              <p className="mt-3 text-slate-600 text-sm">
                Got a query? Enter your details below to get instant access to our client scaling blueprints and book a 30-minute growth audit.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-4"
              >
                <div className="h-14 w-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-500 mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-slate-900">Access Granted!</h3>
                <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
                  Success! Check your Email/WhatsApp. We have sent you our scaling playbook, and one of our experts will reach out to organize your 30-minute growth strategy session.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="secondary" className="mt-4 px-6 text-xs">
                  Submit another query
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="input-shell"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    className="input-shell"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 99999 99999"
                    className="input-shell"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="w-full justify-center py-4 text-base font-bold"
                  >
                    {isSubmitting ? 'Accessing Playbook...' : 'GET INSTANT ACCESS'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}