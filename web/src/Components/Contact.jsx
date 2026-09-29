import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, Github, Linkedin, Loader2, Mail, MapPin, Phone, Send, X } from "lucide-react";
import Reveal, { SectionHeading } from "./Reveal";
import { profile } from "../data";

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: profile.linkedin },
  { icon: Github, label: "GitHub", value: "ODIRAA-git", href: profile.github },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location },
];

function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...Object.fromEntries(new FormData(form)),
          _subject: "New message from your portfolio",
          _captcha: "false",
        }),
      });
      const data = await res.json();
      if (!res.ok || String(data.success) !== "true") throw new Error(data.message);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container-page">
        <SectionHeading eyebrow="Contact" title="Let's work together">
          I'm open to full-time roles, internships and working-student positions. Drop me a message
          and I'll get back to you soon.
        </SectionHeading>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <ul className="space-y-3">
              {channels.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="rounded-lg bg-accent/10 p-2.5 text-accent">
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-muted">{label}</span>
                      <span className="block truncate font-medium">{value}</span>
                    </span>
                  </>
                );
                const cls = "card flex items-center gap-4 p-4";
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        {...(href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                        className={`${cls} transition-colors hover:border-accent/50`}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className={cls}>{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8">
              {/* Honeypot: bots fill it, people don't see it */}
              <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium">Name</span>
                  <input type="text" name="name" required autoComplete="name" placeholder="Jane Doe" className="field" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium">Email</span>
                  <input type="email" name="email" required autoComplete="email" placeholder="jane@company.com" className="field" />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-medium">Message</span>
                <textarea
                  name="message"
                  rows="6"
                  required
                  placeholder="Tell me about the role or project…"
                  className="field resize-y"
                />
              </label>

              {status === "error" && (
                <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-500">
                  Something went wrong. Please try again or email me directly at{" "}
                  <a href={`mailto:${profile.email}`} className="font-semibold underline">{profile.email}</a>.
                </p>
              )}

              <button type="submit" disabled={status === "sending"} className="btn-primary w-full disabled:opacity-70">
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {status === "sent" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setStatus("idle")}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="sent-title"
              initial={{ scale: 0.9, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="card w-full max-w-sm p-8 text-center shadow-2xl"
            >
              <CheckCircle size={56} className="mx-auto mb-4 text-accent" />
              <h3 id="sent-title" className="mb-2 text-2xl font-semibold">Message sent!</h3>
              <p className="mb-6 text-muted">Thanks for reaching out. I'll get back to you soon.</p>
              <button type="button" onClick={() => setStatus("idle")} className="btn-ghost mx-auto" autoFocus>
                <X size={16} /> Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contact;
