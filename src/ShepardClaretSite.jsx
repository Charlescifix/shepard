import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Star,
  Sparkles,
  Calendar,
  BookOpen,
  Users,
  ShieldCheck,
  FileText,
  Lightbulb,
  Heart,
  MessageCircle,
  X,
  Send,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

const navItems = [
  { id: "about", label: "About" },
  { id: "programmes", label: "Programmes" },
  { id: "life", label: "Campus Life" },
  { id: "gallery", label: "Gallery" },
  { id: "admissions", label: "Admissions" },
  { id: "contact", label: "Contact" },
];

const media = {
  logo: "/shepard-claret-logo.png",
  uniformsWithBlazer: "/students-uniforms-blazer.jpg",
  uniformsRegular: "/students-uniforms-regular.jpg",
  tabletGroup: "/students-tablet-group.jpg",
  groupPortrait: "/students-group-portrait.jpg",
  jumpingKids: "/students-jumping.jpg",
};

const values = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Integrity & Character",
    text: "We uphold honesty, transparency and strong moral principles while intentionally nurturing reliability, responsibility, courtesy and other virtues that shape confident, grounded learners.",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Competence",
    text: "We deliver rigorous, well-scaffolded instruction and continuous assessment to ensure every child masters essential knowledge and skills.",
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Innovation",
    text: "We leverage technology and creative teaching methods to enhance learning experiences and prepare students for the future.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Inclusivity",
    text: "We promote universal access to quality education, ensuring every child feels welcomed, valued and supported in their learning journey.",
  },
];

const programmes = [
  {
    name: "Early Years Foundation",
    age: "Ages 2 – 5",
    highlight: "Play‑based learning that builds language, curiosity and social‑emotional skills.",
    points: [
      "Rich circle‑time experiences that build confidence and communication",
      "Hands‑on literacy and numeracy centres",
      "Safe, colourful classrooms designed for little explorers",
    ],
  },
  {
    name: "Primary School",
    age: "Ages 6 – 11",
    highlight: "Strong foundations in numeracy, literacy, science and digital skills.",
    points: [
      "Structured curriculum with regular formative assessment",
      "STEM, reading and writing projects that connect learning to real life",
      "Leadership roles that train pupils to serve and lead.",
    ],
  },
  {
    name: "Clubs & Enrichment",
    age: "All ages",
    highlight: "Purposeful clubs that discover and sharpen every child’s unique gifts.",
    points: [
      "Broadcasting & Communication, STEM crafts and Tech Day experiences",
      "Creative expression through music, ballet & contemporary dance",
      "Sport, taekwondo/karate and special theme days across the year",
    ],
  },
];

const activities = [
  {
    title: "Theme & Activity Days",
    text: "From Cartoon Day to Old School Day, special experiences make learning memorable and fun.",
  },
  {
    title: "Clubs that Build Skills",
    text: "Broadcasting, STEM, home management, dance, music and more give pupils a well‑rounded education.",
  },
  {
    title: "Competitions & Showcases",
    text: "Debates, career and tech fairs, presentations and open days where pupils shine.",
  },
  {
    title: "Family Partnerships",
    text: "We walk closely with parents, keeping you informed and involved in your child’s journey.",
  },
];

const testimonials = [
  {
    name: "Parent of Grade 3 Learner",
    role: "Shepard Claret Family",
    quote:
      "My daughter has grown in confidence, courtesy and academic performance. The communication with parents is excellent.",
  },
  {
    name: "Early Years Parent",
    role: "Alpha Centre",
    quote:
      "The teachers are warm, patient and intentional. Our son looks forward to school every single morning.",
  },
];

const steps = [
  {
    step: "01",
    title: "Book a School Tour",
    text: "Visit Shepard Claret, experience our classrooms and meet our team.",
  },
  {
    step: "02",
    title: "Assessment & Interview",
    text: "We get to know your child’s strengths and needs so we can place and support them well.",
  },
  {
    step: "03",
    title: "Enrollment & Onboarding",
    text: "Complete documentation, receive your welcome pack and join the Shepard Claret family.",
  },
];

const galleryImages = [
  {
    src: media.uniformsWithBlazer,
    title: "Official School Blazer",
    text: "Smart, dignified uniforms that help pupils carry themselves with confidence.",
  },
  {
    src: media.uniformsRegular,
    title: "Everyday Uniform",
    text: "Simple, comfortable and neat – designed for focused learning.",
  },
  {
    src: media.tabletGroup,
    title: "Blending Tech & Learning",
    text: "Pupils collaborate using age‑appropriate technology and resources.",
  },
  {
    src: media.jumpingKids,
    title: "Joyful Childhood",
    text: "A school environment where it is safe to be curious, playful and bold.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function ShepardClaretModernSite() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to Shepard Claret Model School. How can I help you today?", sender: "bot" }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const scrollTo = (id) => {
    if (typeof document === "undefined") return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const newMessages = [...messages, { text: inputMessage, sender: "user" }];
    setMessages(newMessages);
    setInputMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage.toLowerCase());
      setMessages([...newMessages, { text: botResponse, sender: "bot" }]);
    }, 1000);
  };

  const getBotResponse = (message) => {
    if (message.includes("admission") || message.includes("enroll") || message.includes("apply")) {
      return "Great! You can start the admissions process by booking a school tour. Call us at 09077561370 or 09021288898. You can also scroll to our Admissions section for more information.";
    } else if (message.includes("contact") || message.includes("phone") || message.includes("email")) {
      return "You can reach us at:\nPhone: 09077561370 or 09021288898\nEmail: michaelnwankpa0009@gmail.com\nAddress: NO 10 Ahmadu Ahidjo street, Narayi Highcost, Kaduna State";
    } else if (message.includes("hours") || message.includes("time") || message.includes("open")) {
      return "Our office hours are Monday to Friday, 7:00 AM – 4:00 PM. We'd love to see you!";
    } else if (message.includes("programme") || message.includes("course") || message.includes("age")) {
      return "We offer programmes for all ages: Early Years (2-5), Primary School (6-11), and enrichment clubs for everyone. Check out our Programmes section for details!";
    } else if (message.includes("fee") || message.includes("cost") || message.includes("price")) {
      return "For information about fees and tuition, please contact us at 09077561370 or schedule a tour to discuss our fee structure in detail.";
    } else {
      return "Thank you for your question! For detailed information, please call us at 09077561370 or 09021288898. Our team is ready to help you!";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-rose-50/30 to-amber-50/20 text-slate-900">
      {/* Background gradient */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(251,207,232,0.15),_transparent_50%),radial-gradient(circle_at_bottom,_rgba(254,243,199,0.15),_transparent_60%)]" />

      {/* Page wrapper */}
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-12 pt-4 sm:px-6 lg:px-8 lg:pt-6">
        {/* Header */}
        <header className="sticky top-0 z-30 mb-6 rounded-3xl border border-rose-300/30 bg-white/70 shadow-lg backdrop-blur-md">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-md">
                <img
                  src={media.logo}
                  alt="Shepard Claret Model School logo"
                  className="h-9 w-9 object-contain"
                />
              </div>
              <div>
                <p className="text-sm font-semibold tracking-tight text-slate-900">Shepard Claret Model School</p>
                <p className="text-[0.7rem] text-slate-600">
                  More than just a school – a family that nurtures excellence.
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="transition-all hover:text-rose-600 hover:scale-105"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollTo("admissions")}
                className="rounded-full bg-rose-600 px-4 py-2 text-xs font-semibold text-white shadow-md hover:bg-rose-500 hover:shadow-lg transition-all"
              >
                Enrol Now
              </Button>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <main className="flex flex-1 flex-col gap-16 lg:gap-24">
          <section className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Photo on LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              <img
                src={media.groupPortrait}
                alt="Shepard Claret students in their school blazers"
                className="w-full object-contain"
              />
            </motion.div>

            {/* Details on RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="order-1 space-y-6 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 border border-rose-200 bg-rose-50 px-4 py-2 text-xs text-rose-900 shadow-sm">
                <Sparkles className="h-4 w-4 text-rose-600" />
                <span>More than a school – a nurturing community.</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                  Shepard Claret
                  <span className="block text-rose-600">Model School</span>
                </h1>
                <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
                  A family that nurtures excellence through academic rigour, strong character formation and joyful learning experiences.
                </p>
              </div>

              <div className="grid gap-4 border-l-4 border-rose-600 bg-white p-6 shadow-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-rose-600" />
                    <p className="font-semibold text-slate-900">Character & Integrity</p>
                  </div>
                  <p className="text-sm text-slate-600">
                    Nurturing reliability, honesty, and responsibility
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-rose-600" />
                    <p className="font-semibold text-slate-900">Academic Excellence</p>
                  </div>
                  <p className="text-sm text-slate-600">
                    Rigorous instruction and continuous assessment
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-rose-600" />
                    <p className="font-semibold text-slate-900">Warm, Family Culture</p>
                  </div>
                  <p className="text-sm text-slate-600">
                    Every child known by name and supported by teachers and parents
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  onClick={() => scrollTo("admissions")}
                  className="group flex items-center gap-2 bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-rose-500"
                >
                  Begin Admissions
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollTo("programmes")}
                  className="border-slate-300 bg-white px-6 py-3 text-sm text-slate-900 hover:bg-slate-50"
                >
                  Explore Programmes
                </Button>
              </div>
            </motion.div>
          </section>

          {/* About & values */}
          <section id="about" className="rounded-3xl bg-gradient-to-br from-white to-slate-50/80 py-16 shadow-sm">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mb-12 space-y-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-600">
                  About Shepard Claret
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  An Ultra-Modern, Dynamic Educational Institution
                </h2>
                <p className="text-lg leading-relaxed text-slate-700">
                  Shepard Claret Model School is committed to fostering growth and learning at every stage of life,
                  serving students from reception through secondary levels with a vision for lifelong education.
                </p>
              </motion.div>

              {/* Mission & Vision */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                className="mb-12 grid gap-6 md:grid-cols-2"
              >
                <div className="rounded-2xl border-2 border-rose-200 bg-rose-50/50 p-6">
                  <h3 className="mb-3 text-xl font-bold text-rose-700">Our Mission</h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    We promote inclusive education with universal access, leveraging technology to enhance learning
                    and bridge gaps. We support lifelong learning through holistic education, fostering community
                    engagement and partnerships that empower every student.
                  </p>
                </div>
                <div className="rounded-2xl border-2 border-rose-200 bg-rose-50/50 p-6">
                  <h3 className="mb-3 text-xl font-bold text-rose-700">Our Vision</h3>
                  <p className="text-sm leading-relaxed text-slate-700">
                    To become a transformative hub that empowers students with skills and knowledge relevant to
                    both local and global economies, creating an environment where children explore interests,
                    develop talents, and build lasting friendships.
                  </p>
                </div>
              </motion.div>

              {/* Core Values */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
                className="mb-8"
              >
                <h3 className="mb-6 text-2xl font-bold text-slate-900">Our Core Values</h3>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="grid gap-6 md:grid-cols-2"
              >
                {values.map((value, i) => (
                  <motion.div
                    key={value.title}
                    custom={i}
                    variants={fadeUp}
                    className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition-all hover:shadow-md hover:scale-105"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-600 text-white shadow-md">
                      {value.icon}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-slate-900">{value.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600">{value.text}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Programmes */}
          <section id="programmes" className="rounded-3xl bg-gradient-to-br from-amber-50/50 to-white py-16 shadow-sm">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="mb-12 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-600">
                  Programmes
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  A pathway for every stage
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-slate-700">
                  From our warm Early Years classrooms to our more structured Primary years, we support each child to
                  take the next right step in their learning journey.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {programmes.map((programme, i) => (
                  <motion.div
                    key={programme.name}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className="flex h-full flex-col border border-slate-200 bg-slate-50 shadow-sm"
                  >
                    <div className="space-y-3 p-6">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-600">
                        {programme.age}
                      </p>
                      <h3 className="text-xl font-bold text-slate-900">
                        {programme.name}
                      </h3>
                      <p className="text-sm text-slate-600">{programme.highlight}</p>
                    </div>
                    <div className="mt-auto border-t border-slate-200 bg-white p-6">
                      <ul className="space-y-3">
                        {programme.points.map((point) => (
                          <li key={point} className="flex gap-3 text-sm text-slate-600">
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 bg-rose-600" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Campus life */}
          <section id="life" className="space-y-8 rounded-3xl bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-600">
                  Campus Life
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Joyful, structured school days
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
                  Daily routines, clubs and special events work together to keep learners engaged, curious and excited
                  about coming to school.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {activities.map((activity, i) => (
                <motion.div
                  key={activity.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-rose-600" />
                    <h3 className="text-sm font-semibold text-slate-900">{activity.title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-600">{activity.text}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Gallery */}
          <section id="gallery" className="bg-white py-16">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="mb-12 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-600">
                  Our Learners in Action
                </p>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  A glimpse into everyday life
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-slate-700">
                  Real moments from Shepard Claret – uniforms, friendships, creativity and joyful learning captured
                  on camera.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {galleryImages.map((item, i) => (
                  <motion.div
                    key={item.title}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeUp}
                    className="flex flex-col overflow-hidden border border-slate-200 bg-slate-50 shadow-sm"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden bg-white">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="space-y-2 p-4">
                      <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Admissions */}
          <section id="admissions" className="space-y-8 rounded-3xl bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-600">
                  Admissions
                </p>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                  Joining the Shepard Claret family
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
                  We invite you to visit our campus, ask questions and experience our culture. Our admissions team will
                  guide you through each step.
                </p>
              </div>
              <Button className="mt-2 inline-flex items-center justify-center rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-rose-500">
                Download Prospectus
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {steps.map((s, i) => (
                <motion.div
                  key={s.step}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-[0.24em] text-slate-600">
                      Step {s.step}
                    </span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 bg-white text-[0.7rem] font-semibold text-rose-600">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900">{s.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-600">{s.text}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section
            id="contact"
            className="mt-4 space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-600">
                  Contact
                </p>
                <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
                  Contact with Us
                </h2>
                <p className="max-w-xl text-xs leading-relaxed text-slate-700 sm:text-sm">
                  We'd love to hear from you. Reach out to schedule a campus tour, request more information or speak with our team anytime.
                </p>
              </div>
            </div>

            {/* Contact Methods Grid */}
            <div className="grid gap-4 md:grid-cols-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-600">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Make a Call</p>
                  <a href="tel:09077561370" className="mt-1 block text-xs text-rose-600 hover:text-rose-500">
                    09077561370
                  </a>
                  <a href="tel:09021288898" className="mt-0.5 block text-xs text-rose-600 hover:text-rose-500">
                    09021288898
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={1}
                className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-600">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Send Email</p>
                  <a href="mailto:michaelnwankpa0009@gmail.com" className="mt-1 block text-xs text-rose-600 hover:text-rose-500">
                    michaelnwankpa0009@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={2}
                className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-600">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Visit Anytime</p>
                  <p className="mt-1 text-xs text-slate-700">
                    NO 10 Ahmadu Ahidjo street,
                    <br />
                    Narayi Highcost,
                    <br />
                    Kaduna State
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                custom={3}
                className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-600">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Office Hours</p>
                  <p className="mt-1 text-xs text-slate-700">
                    Monday – Friday
                    <br />
                    7:00 AM – 4:00 PM
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Media & Additional Info */}
            <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-rose-50 p-4 sm:flex-row">
              <div>
                <p className="text-xs font-semibold text-slate-900">Follow Us on Social Media</p>
                <p className="mt-1 text-[0.7rem] text-slate-600">
                  Stay connected with the latest news, events and updates from Shepard Claret
                </p>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 transition-colors hover:bg-rose-600 hover:text-white"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 transition-colors hover:bg-rose-600 hover:text-white"
                  aria-label="Visit our Instagram page"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-8 rounded-3xl border border-rose-300/30 bg-white/70 px-8 py-5 shadow-lg backdrop-blur-md">
            <div className="space-y-3">
              {/* Top Row: Logo, Name & Description */}
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm">
                    <img
                      src={media.logo}
                      alt="Shepard Claret Model School logo"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">Shepard Claret Model School</p>
                    <p className="text-[0.65rem] text-slate-600">A nurturing community committed to excellence</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-center gap-1.5 text-[0.7rem] text-slate-700">
                  <Calendar className="h-3 w-3 text-rose-600" />
                  <p>Mon – Fri, 7:00 AM – 4:00 PM</p>
                </div>
              </div>

              {/* Bottom Row: Copyright & Powered by */}
              <div className="flex flex-col items-center justify-between gap-2 border-t border-slate-200 pt-3 text-[0.65rem] sm:flex-row">
                <p className="text-slate-600">© {new Date().getFullYear()} Shepard Claret Model School. All rights reserved.</p>
                <a
                  href="https://www.gen3block.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 font-medium text-slate-700 transition-all hover:scale-105"
                >
                  <span>Powered by</span>
                  <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text font-bold text-transparent">
                    Gen3block AI
                  </span>
                  <Sparkles className="h-3 w-3 text-rose-600 transition-transform group-hover:rotate-12 group-hover:scale-125" />
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Chatbot Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="mb-4 flex h-[500px] w-[350px] flex-col rounded-2xl border border-rose-300/30 bg-white shadow-2xl"
            >
              {/* Chat Header */}
              <div className="flex items-center justify-between rounded-t-2xl bg-gradient-to-r from-rose-600 to-rose-700 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                    <MessageCircle className="h-4 w-4 text-rose-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Shepard Claret</p>
                    <p className="text-xs text-rose-100">We're here to help!</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="rounded-full p-1 text-white transition-colors hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                        msg.sender === "user"
                          ? "bg-rose-600 text-white"
                          : "bg-slate-100 text-slate-900"
                      }`}
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="border-t border-slate-200 p-3">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 rounded-full border border-slate-300 px-4 py-2 text-sm focus:border-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-600/20"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-600 text-white transition-colors hover:bg-rose-500"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-rose-600 to-rose-700 text-white shadow-lg hover:shadow-xl transition-shadow"
        >
          {isChatOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </motion.button>
      </div>
    </div>
  );
}
