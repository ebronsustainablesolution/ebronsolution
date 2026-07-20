import { useEffect, useRef, type ReactNode, type ElementType } from "react";

export function FadeUp({
  as: Tag = "div",
  className = "",
  children,
  delay = 0,
}: {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.animationDelay = `${delay}ms`;
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <Tag ref={ref as never} className={`fade-up ${className}`}>
      {children}
    </Tag>
  );
}
