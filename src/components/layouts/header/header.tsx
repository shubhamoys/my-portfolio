import Image from "next/image";
import styles from "./header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/assets/logos/logo.svg" width={24} height={24} alt="" />
      </div>

      <nav>
        <Link href="" className="body2-medium">
          About
        </Link>

        <Link href="" className="body2-medium">
          Tech Stack
        </Link>

        <Link href="" className="body2-medium">
          Experience
        </Link>

        <Link href="" className="body2-medium">
          Contact
        </Link>

        <div className={styles.actions}>
          <button>
            <span className="body2-medium">Resume</span>

            <Image
              src="/assets/logos/download-icon.svg"
              width={24}
              height={24}
              alt=""
            />
          </button>
        </div>
      </nav>
    </header>
  );
}
