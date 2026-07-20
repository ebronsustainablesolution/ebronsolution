import { useEffect, useState } from "react";

export function ContactForm({
  defaultRole,
  defaultSubject,
}: {
  defaultRole?: string;
  defaultSubject?: string;
}) {
  const [subject, setSubject] = useState(defaultSubject ?? "");
  const [role, setRole] = useState(defaultRole ?? "");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (defaultSubject) setSubject(defaultSubject);
  }, [defaultSubject]);

  const inputClass =
    "w-full bg-transparent border-0 border-b border-[color:var(--ebron-muted)]/60 focus:border-[color:var(--ebron-green)] focus:border-b-2 outline-none py-3 text-[16px] placeholder:text-[color:var(--ebron-muted)]/70 transition-colors";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-6"
    >
      {subject && (
        <input type="hidden" name="subject" value={subject} readOnly />
      )}
      <div>
        <label htmlFor="cf-name" className="eyebrow block mb-1">
          Name
        </label>
        <input id="cf-name" required type="text" placeholder="Your name" className={inputClass} />
      </div>
      <div>
        <label htmlFor="cf-email" className="eyebrow block mb-1">
          Email
        </label>
        <input id="cf-email" required type="email" placeholder="you@example.com" className={inputClass} />
      </div>
      <div>
        <label htmlFor="cf-org" className="eyebrow block mb-1">
          Organization (optional)
        </label>
        <input id="cf-org" type="text" placeholder="Where you're writing from" className={inputClass} />
      </div>
      <div>
        <label htmlFor="cf-role" className="eyebrow block mb-1">
          I'm reaching out as
        </label>
        <select
          id="cf-role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className={`${inputClass} appearance-none`}
        >
          <option value="">Select one</option>
          <option>Community leader</option>
          <option>Partner or funder</option>
          <option>Media</option>
          <option>Other</option>
        </select>
      </div>
      {subject && (
        <div>
          <label htmlFor="cf-subject" className="eyebrow block mb-1">
            Subject
          </label>
          <input
            id="cf-subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={inputClass}
          />
        </div>
      )}
      <div>
        <label htmlFor="cf-message" className="eyebrow block mb-1">
          Message
        </label>
        <textarea id="cf-message" required rows={4} placeholder="Tell us a little about what you're hoping to do." className={inputClass} />
      </div>

      <button
        type="submit"
        className="inline-flex items-center rounded-full bg-[color:var(--ebron-green)] hover:bg-[color:var(--ebron-green-dark)] text-[color:var(--ebron-cream)] px-7 py-3.5 text-[15px] font-medium transition-colors"
      >
        {sent ? "Message sent" : "Send Message"}
      </button>
      {sent && (
        <p className="text-[14px] text-[color:var(--ebron-muted)]">
          Thanks. Someone from the Ebron team will be in touch soon.
        </p>
      )}
    </form>
  );
}
