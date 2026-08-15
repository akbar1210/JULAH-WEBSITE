// components/CandiMotif.tsx
export default function CandiMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 90"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M40 90V50c0-4 2-6 5-8l10-6c2-1 3-3 3-5V21c0-3 1-5 3-7l9-8"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M20 90h60M25 78h50M30 66h40" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <path
        d="M360 90V50c0-4-2-6-5-8l-10-6c-2-1-3-3-3-5V21c0-3-1-5-3-7l-9-8"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M320 90h60M325 78h50M330 66h40" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
      <circle cx="200" cy="45" r="3" fill="currentColor" opacity="0.8" />
    </svg>
  );
}