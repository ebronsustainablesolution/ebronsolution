import { useEffect, useRef, useState, type ReactNode } from "react";
import { X } from "lucide-react";

export function Modal({
  open,
  onClose,
  labelledBy,
  children,
  returnFocusTo,
}: {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  children: ReactNode;
  returnFocusTo?: HTMLElement | null;
}) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>("button, a")?.focus();
    }, 20);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      (returnFocusTo ?? previouslyFocused)?.focus?.();
    };
  }, [open, onClose, returnFocusTo]);

  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
      className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4 md:p-8 overflow-y-auto"
    >
      <div
        className="fixed inset-0 bg-[color:var(--ebron-green-dark)]/70 animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        className="relative bg-[color:var(--ebron-cream)] w-full max-w-[720px] my-8 p-8 md:p-12 shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-300"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 p-2 text-[color:var(--ebron-green-dark)] hover:text-[color:var(--ebron-green)]"
        >
          <X size={22} strokeWidth={1.25} />
        </button>
        {children}
      </div>
    </div>
  );
}

export function useModal() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  return {
    open,
    triggerRef,
    onOpen: () => setOpen(true),
    onClose: () => setOpen(false),
  };
}
