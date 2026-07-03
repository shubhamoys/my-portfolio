"use client";

import styles from "./contact.module.scss";
import { useState } from "react";
import BentoCard from "@/components/ui/bento-card";
import { Mail, Phone, MapPin, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedInIcon } from "@/lib/svg-icons";

export default function Contact() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(id);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
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

      <div className={styles.contactContainer}>
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
                {copiedItem === "email" ? (
                  <Check size={16} className={styles.greenCheck} />
                ) : (
                  <Copy size={16} />
                )}
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
                {copiedItem === "phone" ? (
                  <Check size={16} className={styles.greenCheck} />
                ) : (
                  <Copy size={16} />
                )}
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

          {/* Social linkages */}
          <div className={styles.socialsFooter}>
            <span className={styles.socialTitle}>Social Links</span>
            <div className={styles.socialButtons}>
              <button
                onClick={() =>
                  window.open("https://github.com/shubhamoys", "_blank")
                }
                className={styles.socialBtn}
                aria-label="GitHub"
              >
                <GithubIcon className={styles.socialIcon} />
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/shubhamoy-sarker/",
                    "_blank"
                  )
                }
                className={styles.socialBtn}
                aria-label="LinkedIn"
              >
                <LinkedInIcon className={styles.socialIcon} />
              </button>
            </div>
          </div>
        </BentoCard>
      </div>
    </div>
  );
}
