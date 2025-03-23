"use client";

import { GithubIcon, LinkedInIcon } from "@/lib/svg-icons";
import styles from "./contact.module.scss";
import { useState } from "react";

export default function Contact() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(id);

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        setCopiedItem(null);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitle}>
          <span className="body3-medium">Conatct Me</span>
        </div>

        <span className="subtitle-normal">
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out to me
          via email or through the contact form below.
        </span>
      </div>

      <div className={styles.sectionBody}>
        <div className={styles.row}>
          <span className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </span>

          <span className="subtitle-semi-bold">shubhamoys@gmail.com</span>

          <span
            className={styles.copy}
            title="Copy to clipboard"
            onClick={() => handleCopy("shubhamoys@gmail.com", "email")}
          >
            {copiedItem === "email" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-copy"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
            )}
          </span>
        </div>

        <div className={styles.row}>
          <span className={styles.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-phone"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>

          <span className="subtitle-semi-bold">+91 8900532504</span>

          <span
            className={styles.copy}
            title="Copy to clipboard"
            onClick={() => handleCopy("+91 8900532504", "phone")}
          >
            {copiedItem === "phone" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-check"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-copy"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
            )}
          </span>
        </div>
      </div>

      <div className={styles.sectionFooter}>
        <span className="body2-normal">
          You can follow me on these platforms
        </span>

        <div className={styles.socialsIcons}>
          <span
            onClick={() =>
              window.open("https://github.com/shubhamoys", "_blank")
            }
          >
            <GithubIcon />
          </span>

          <span
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/shubhamoy-sarker/",
                "_blank"
              )
            }
          >
            <LinkedInIcon />
          </span>
        </div>
      </div>
    </div>
  );
}
