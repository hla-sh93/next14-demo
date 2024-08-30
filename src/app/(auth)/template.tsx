"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "../../styles/globals.css";
import styles from "./styles.module.css";
import { useState } from "react";

const navLinks = [
  {
    name: "Register",
    href: "/register",
  },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            className={isActive ? styles.active : styles.notActive}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
      <h2>Auth Layout</h2>
    </>
  );
}
