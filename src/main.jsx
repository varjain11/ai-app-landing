import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BookOpenCheck,
  BriefcaseBusiness,
  CalendarCheck,
  Check,
  ChevronDown,
  CircleHelp,
  GraduationCap,
  HeartHandshake,
  Instagram,
  Lightbulb,
  Mail,
  MessageCircle,
  MessagesSquare,
  Milestone,
  Rocket,
  Star,
  Store,
  UserCheck,
  WandSparkles,
} from "lucide-react";
import "./styles.css";

const WHATSAPP_LINK = "https://wa.me/91567501095?text=Hi%21%20I%20am%20interested%20in%20your%20AI%20App%20Building%20Coaching%20Program";
const EMAIL_LINK = "mailto:hello@example.com";
const INSTAGRAM_LINK = "https://instagram.com/example";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeenepbg";

const audience = [
  { icon: HeartHandshake, title: "Homemakers", copy: "Turn everyday ideas into simple useful apps." },
  { icon: Instagram, title: "Influencers", copy: "Build tools for your audience, community, or offers." },
  { icon: Store, title: "Small business owners", copy: "Create booking, catalog, and service app concepts." },
  { icon: BriefcaseBusiness, title: "Professionals", copy: "Prototype an app idea without learning code first." },
];

const learn = [
  "How apps are planned, designed, and built in plain language",
  "How to ask AI tools for screens, features, prompts, and fixes",
  "How to install the tools you need and avoid setup confusion",
  "How to build a first mobile-style app with guided templates",
  "How SaaS and on-prem options work for real business ideas",
  "How to present your final app plan with confidence",
];

const howItWorks = [
  { icon: CalendarCheck, title: "Book a session", copy: "Choose a time for focused 1:1 guidance." },
  { icon: Lightbulb, title: "Share your idea", copy: "Bring your own app idea or choose from suggested ideas." },
  { icon: Milestone, title: "Get a personal path", copy: "Follow a learning plan matched to your pace and goal." },
  { icon: UserCheck, title: "Build with guidance", copy: "Create your app step-by-step with direct support." },
];

const oneToOneBenefits = [
  "Learn at your own pace",
  "No technical background required",
  "Fully personalized guidance",
  "Ask questions anytime",
  "Faster results compared to group courses",
];

const packages = [
  {
    name: "Starter Program",
    price: "AED 999",
    badge: "Private starter path",
    tone: "border-saffron/30",
    features: [
      "3 one-on-one sessions",
      "Theory foundations",
      "Installation kit",
      "Templates and prompt library",
      "Guided first app build",
      "Mid-course quiz",
      "Certificate",
    ],
  },
  {
    name: "Complete Program",
    price: "AED 1499",
    badge: "Premium guided build",
    tone: "border-palm/30",
    featured: true,
    features: [
      "5 one-on-one sessions",
      "Everything in Starter",
      "Personalized idea validation",
      "Full handholding for 1 app creation",
      "SaaS and on-prem guidance",
      "Final project review",
      "Priority WhatsApp support",
    ],
  },
];

const journey = [
  ["Session 1", "Theory-only (non-technical)", "Understand app ideas, screens, users, and AI-guided building in simple language."],
  ["Session 2", "Setup + mobile-style app", "Install tools and create your first guided app experience."],
  ["Session 3", "SaaS + on-prem concepts", "Learn hosting choices and prepare a realistic next step."],
  ["Sessions 4-5", "Personalized app build and review", "Complete Program learners validate, build, polish, and review one personal app idea."],
];

const faqs = [
  ["Do I need coding experience?", "No. This 1:1 course is designed for complete beginners and explains app-building in simple language."],
  ["Will I build a real app?", "You will build your first guided app concept. Complete Program learners also get handholding for one personal app idea."],
  ["What tools do I need?", "You only need a laptop, internet connection, and the AI tools covered during setup."],
  ["How is 1:1 learning different?", "Your sessions move at your pace, focus on your idea, and leave space for direct questions while you build."],
];

function App() {
  const [formStatus, setFormStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormStatus("loading");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-pearl text-ink">
      <section className="hero-shell relative overflow-hidden">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="hero-network pointer-events-none absolute inset-0" />
        <div className="hero-float hero-float-one pointer-events-none" />
        <div className="hero-float hero-float-two pointer-events-none" />
        <div className="hero-float hero-float-three pointer-events-none" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#" className="flex items-center gap-3 font-semibold tracking-wide">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white">
              <WandSparkles size={19} />
            </span>
            <span>Premium AI app-building coaching in Dubai</span>
          </a>
          <a href={WHATSAPP_LINK} className="hidden items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-sm font-semibold shadow-sm backdrop-blur sm:flex">
            <MessageCircle size={17} />
            Talk on WhatsApp
          </a>
        </nav>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-84px)] max-w-5xl flex-col items-center justify-center px-5 pb-24 pt-10 text-center sm:px-8 sm:pb-28 sm:pt-12 lg:pb-32 lg:pt-16">
            <div className="mb-8 grid gap-2 text-base font-semibold leading-7 text-ink/60 sm:text-lg">
              <p>Have an app idea but don&apos;t know how to build it?</p>
              <p>Not from a tech background?</p>
              <p>Feel like coding is just too complicated?</p>
            </div>
            <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-[1.16] tracking-normal text-ink sm:text-5xl sm:leading-[1.12] lg:text-6xl lg:leading-[1.1]">
              Build Your First App with AI
            </h1>
              <p className="mx-auto mt-8 max-w-2xl text-lg font-medium leading-8 text-ink/70 sm:text-xl sm:leading-9">
              A beginner-friendly 1:1 coaching program where I guide you step-by-step — no coding, no confusion.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-base italic leading-7 text-ink/60 sm:text-lg">
              I&apos;ll work with you personally to turn your idea into a real app.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-2 text-sm font-semibold text-ink/65 sm:flex-row sm:gap-5">
              {["No technical background required", "Beginner-friendly program"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <Check size={16} className="text-palm/80" />
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
              <a href="#lead-form" className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5">
                Book Your First Session
                <ArrowRight size={18} />
              </a>
              <a href={WHATSAPP_LINK} className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/10 bg-white px-6 py-4 text-base font-semibold text-ink shadow-sm transition hover:-translate-y-0.5">
                <MessageCircle size={18} />
                Schedule Free Consultation
              </a>
            </div>
        </div>
      </section>

      <Section id="who" eyebrow="Who this is for" title="Made for people with ideas, not technical backgrounds.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audience.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm">
              <Icon className="text-palm" size={28} />
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 leading-7 text-ink/60">{copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="How it works" title="A private coaching path built around your idea.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map(({ icon: Icon, title, copy }, index) => (
            <article key={title} className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-palm/10 text-palm">
                  <Icon size={24} />
                </span>
                <span className="text-sm font-bold text-saffron">0{index + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold">{title}</h3>
              <p className="mt-2 leading-7 text-ink/60">{copy}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="What you will learn" title="A practical path from app idea to first working plan.">
        <div className="grid gap-3 lg:grid-cols-2">
          {learn.map((item) => (
            <div key={item} className="flex gap-4 rounded-2xl border border-ink/10 bg-white p-5 shadow-sm">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-saffron/15 text-saffron">
                <Check size={18} />
              </span>
              <p className="leading-7 text-ink/75">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why 1:1 learning" title="More personal support, clearer progress, fewer beginner roadblocks.">
        <div className="relative grid gap-4">
          {journey.map(([label, title, copy], index) => (
            <article key={label} className="grid gap-4 rounded-3xl border border-ink/10 bg-white p-5 shadow-sm sm:grid-cols-[150px_1fr] sm:p-6">
              <div className="flex items-center gap-3 font-bold text-palm">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-palm/10">{index + 1}</span>
                {label}
              </div>
              <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-7 text-ink/60">{copy}</p>
              </div>
            </article>
          ))}
          <div className="hidden rounded-3xl bg-night p-6 text-white shadow-soft">
            <MessagesSquare size={30} className="text-saffron" />
            <h3 className="mt-5 text-2xl font-bold">Direct answers while you build</h3>
            <p className="mt-3 leading-8 text-white/70">
              You are not trying to keep up with a room. Each session focuses on your pace, your questions, and your app idea.
            </p>
          </div>
          <div className="hidden grid gap-3">
            {oneToOneBenefits.map((item) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl border border-ink/10 bg-white p-5 shadow-sm">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-palm/10 text-palm">
                  <Check size={18} />
                </span>
                <p className="font-semibold text-ink/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="pricing" eyebrow="Programs" title="Choose the level of 1:1 support that fits your app idea.">
        <div className="grid gap-5 lg:grid-cols-2">
          {packages.map((pack) => (
            <article key={pack.name} className={`relative rounded-3xl border bg-white p-6 shadow-soft ${pack.tone} ${pack.featured ? "bg-[linear-gradient(180deg,#ffffff_0%,#eefaf7_100%)] ring-2 ring-palm/20" : ""}`}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-palm">{pack.badge}</p>
                  <h3 className="mt-3 text-2xl font-bold">{pack.name}</h3>
                </div>
                <div className="rounded-2xl bg-ink px-5 py-3 text-xl font-bold text-white">{pack.price}</div>
              </div>
              <ul className="mt-7 grid gap-3">
                {pack.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-ink/70">
                    <Check className="text-palm" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#lead-form" className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-4 font-semibold ${pack.featured ? "bg-palm text-white" : "bg-saffron/15 text-ink"}`}>
                {pack.featured ? "Start 1:1 Course" : "Book Your Session"}
                <ArrowRight size={18} />
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Course journey" title="Simple private sessions that build confidence one step at a time.">
        <div className="relative grid gap-4">
          {journey.map(([label, title, copy], index) => (
            <article key={label} className="grid gap-4 rounded-3xl border border-ink/10 bg-white p-5 shadow-sm sm:grid-cols-[150px_1fr] sm:p-6">
              <div className="flex items-center gap-3 font-bold text-palm">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-palm/10">{index + 1}</span>
                {label}
              </div>
              <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-7 text-ink/60">{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Quick answers before you join.">
        <div className="grid gap-4 lg:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group rounded-3xl border border-ink/10 bg-white p-5 shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">
                <span className="flex items-center gap-3">
                  <CircleHelp className="text-saffron" size={20} />
                  {question}
                </span>
                <ChevronDown className="shrink-0 transition group-open:rotate-180" size={18} />
              </summary>
              <p className="mt-4 leading-7 text-ink/60">{answer}</p>
            </details>
          ))}
        </div>
      </Section>

      <section id="lead-form" className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-ink p-5 text-white shadow-soft sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div className="flex flex-col justify-between rounded-[1.5rem] bg-white/10 p-6">
            <div>
              <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-ink">
                <GraduationCap size={24} />
              </div>
              <h2 className="mt-6 text-3xl font-bold sm:text-4xl">Book your private app-building session.</h2>
              <p className="mt-4 leading-8 text-white/70">
                Share your details and app idea. We will contact you with session timing, next steps, and the right 1:1 program guidance.
              </p>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-white/80">
              <p className="flex items-center gap-2"><MessageCircle size={17} /> Talk on WhatsApp anytime</p>
              <p className="flex items-center gap-2"><BookOpenCheck size={17} /> Designed for non-technical users</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 rounded-[1.5rem] bg-white p-5 text-ink sm:grid-cols-2 sm:p-6">
            <input type="hidden" name="_subject" value="New Lead - AI App Builder Program" />
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
            <label className="grid gap-2 text-sm font-semibold sm:col-span-2">
              App idea
              <textarea name="idea" rows="5" className="resize-none rounded-2xl border border-ink/10 px-4 py-3 outline-none focus:border-palm" placeholder="Tell us what kind of app you want to build" />
            </label>
            <button disabled={formStatus === "loading"} className="inline-flex items-center justify-center gap-2 rounded-full bg-palm px-5 py-4 font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-70 sm:col-span-2">
              {formStatus === "loading" ? "Submitting..." : "Book Your Session"}
              <Rocket size={18} />
            </button>
            {formStatus === "success" && (
              <p className="rounded-2xl bg-palm/10 px-4 py-3 text-sm font-semibold text-palm opacity-100 transition-opacity duration-300 sm:col-span-2">
                Thanks! I&apos;ll personally reach out to you within 24 hours.
              </p>
            )}
            {formStatus === "error" && (
              <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700 opacity-100 transition-opacity duration-300 sm:col-span-2">
                Something went wrong. Please try again or contact on WhatsApp.
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="border-t border-ink/10 bg-white px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold">Premium AI app-building coaching in Dubai</p>
          <div className="flex flex-wrap gap-3 text-sm font-semibold text-ink/70">
            <a className="inline-flex items-center gap-2 hover:text-palm" href={WHATSAPP_LINK}><MessageCircle size={16} /> Talk on WhatsApp</a>
            <a className="inline-flex items-center gap-2 hover:text-palm" href={INSTAGRAM_LINK}><Instagram size={16} /> Instagram</a>
            <a className="inline-flex items-center gap-2 hover:text-palm" href={EMAIL_LINK}><Mail size={16} /> Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-saffron">
            <Star size={15} />
            {eyebrow}
          </p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false }) {
  return (
    <label className="grid gap-2 text-sm font-semibold">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-2xl border border-ink/10 px-4 py-3 outline-none focus:border-palm"
      />
    </label>
  );
}

createRoot(document.getElementById("root")).render(<App />);
