"use client";

import styles from "./contact.module.scss";
import { useState } from "react";
import BentoCard from "@/components/ui/bento-card";
import { Mail, Phone, MapPin, Copy, Check, Send, Terminal } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/lib/svg-icons";

export default function Contact() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  
  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(id);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setFormStatus("sending");
    setConsoleLogs([
      "Initializing payload...",
      `Payload: { name: "${name}", email: "${email}" }`,
      "Connecting to smtp.shubhamoy.dev...",
      "POST /api/contact HTTP/1.1",
    ]);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    setConsoleLogs((prev) => [...prev, "Uploading message details...", "Secure handshake complete."]);

    await new Promise((resolve) => setTimeout(resolve, 800));
    setConsoleLogs((prev) => [
      ...prev,
      "Response: 200 OK",
      "Message successfully queued for delivery! 🚀",
    ]);
    setFormStatus("success");

    // Clear inputs after success
    setName("");
    setEmail("");
    setMessage("");
  };

  const resetConsole = () => {
    setFormStatus("idle");
    setConsoleLogs([]);
  };

  return (
    <div className={styles.contactSection}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionBadge}>Get In Touch</span>
        <h2 className={styles.sectionTitle}>
          Contact <span className={styles.highlight}>Me</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          Drop me a message—I&apos;ll get back faster than a well-optimized API! 📩
        </p>
      </div>

      <div className={styles.contactGrid}>
        {/* Left Side: Contact details */}
        <div className={styles.leftCol}>
          <BentoCard className={styles.infoCard} delay={0.1}>
            <div className={styles.infoItems}>
              {/* Email item */}
              <div className={styles.infoRow}>
                <div className={styles.iconBox}>
                  <Mail size={20} />
                </div>
                <div className={styles.infoDetails}>
                  <span className={styles.infoLabel}>Email</span>
                  <span className={styles.infoValue}>shubhamoys@gmail.com</span>
                </div>
                <button
                  onClick={() => handleCopy("shubhamoys@gmail.com", "email")}
                  className={styles.copyBtn}
                  aria-label="Copy Email"
                >
                  {copiedItem === "email" ? <Check size={16} className={styles.greenCheck} /> : <Copy size={16} />}
                </button>
              </div>

              {/* Phone item */}
              <div className={styles.infoRow}>
                <div className={styles.iconBox}>
                  <Phone size={20} />
                </div>
                <div className={styles.infoDetails}>
                  <span className={styles.infoLabel}>Phone</span>
                  <span className={styles.infoValue}>+91 8900532504</span>
                </div>
                <button
                  onClick={() => handleCopy("+91 8900532504", "phone")}
                  className={styles.copyBtn}
                  aria-label="Copy Phone"
                >
                  {copiedItem === "phone" ? <Check size={16} className={styles.greenCheck} /> : <Copy size={16} />}
                </button>
              </div>

              {/* Location item */}
              <div className={styles.infoRow}>
                <div className={styles.iconBox}>
                  <MapPin size={20} />
                </div>
                <div className={styles.infoDetails}>
                  <span className={styles.infoLabel}>Location</span>
                  <span className={styles.infoValue}>Siliguri, WB, India</span>
                </div>
              </div>
            </div>

            {/* Social linkages inside bento */}
            <div className={styles.socialsFooter}>
              <span className={styles.socialTitle}>Social Links</span>
              <div className={styles.socialButtons}>
                <button
                  onClick={() => window.open("https://github.com/shubhamoys", "_blank")}
                  className={styles.socialBtn}
                  aria-label="GitHub"
                >
                  <GithubIcon className={styles.socialIcon} />
                </button>
                <button
                  onClick={() => window.open("https://www.linkedin.com/in/shubhamoy-sarker/", "_blank")}
                  className={styles.socialBtn}
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className={styles.socialIcon} />
                </button>
              </div>
            </div>
          </BentoCard>
        </div>

        {/* Right Side: Interactive Dev Console Form */}
        <div className={styles.rightCol}>
          <BentoCard className={styles.formCard} delay={0.2}>
            {formStatus === "idle" || formStatus === "sending" ? (
              <form onSubmit={handleSend} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name" className={styles.label}>Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className={styles.input}
                    disabled={formStatus === "sending"}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className={styles.input}
                    disabled={formStatus === "sending"}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea
                    id="message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    className={styles.textarea}
                    rows={4}
                    disabled={formStatus === "sending"}
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={formStatus === "sending" || !name || !email || !message}
                >
                  <Send size={18} />
                  <span>{formStatus === "sending" ? "Transmitting..." : "Send Message"}</span>
                </button>
              </form>
            ) : (
              /* Success / Log state */
              <div className={styles.consoleWrapper}>
                <div className={styles.consoleHeader}>
                  <Terminal size={18} className={styles.consoleIcon} />
                  <span className={styles.consoleTitle}>shubhamoy_smtp_daemon.log</span>
                </div>
                <div className={styles.consoleBody}>
                  {consoleLogs.map((log, index) => (
                    <div key={index} className={styles.consoleLogLine}>
                      <span className={styles.logPrompt}>[OK]</span> {log}
                    </div>
                  ))}
                  {formStatus === "success" && (
                    <button onClick={resetConsole} className={styles.resetBtn}>
                      Send another message
                    </button>
                  )}
                </div>
              </div>
            )}
          </BentoCard>
        </div>
      </div>
    </div>
  );
}
