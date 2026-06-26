import { ReactNode } from "react";

export default function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14 ${className}`}>
      {children}
    </section>
  );
}
