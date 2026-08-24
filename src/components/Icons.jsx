import React from 'react';

export function GithubIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function LeetCodeIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.135.703-1.815.703s-1.35-.253-1.815-.703L4.17 15.023c-.985-.952-1.025-2.525-.09-3.522l6.81-7.295c.467-.5 1.12-.782 1.803-.782s1.336.282 1.803.782l2.697 2.89a1.18 1.18 0 0 1-.065 1.637 1.11 1.11 0 0 1-1.6-.065L12.73 5.78a.29.29 0 0 0-.41-.017l-6.81 7.295a.302.302 0 0 0 .018.423l5.604 5.515c.112.11.266.172.424.172s.312-.062.424-.172l2.697-2.607a1.11 1.11 0 0 1 1.6.065 1.18 1.18 0 0 1-.065 1.637zm5.228-4.63l-9.155 8.847a3.486 3.486 0 0 1-4.965 0l-5.604-5.515a3.527 3.527 0 0 1-.225-4.82l6.81-7.296C8.932 3.652 10.377 3 11.91 3s2.977.652 3.717 1.446l2.697 2.89a3.5 3.5 0 0 1 .18 4.793l.006.006.012.012a3.473 3.473 0 0 1-2.84 5.513h-4.32a1.13 1.13 0 0 1 0-2.26h4.32a1.22 1.22 0 0 0 1.208-1.224 1.238 1.238 0 0 0-.348-.867z" />
    </svg>
  );
}

export function GmailIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
