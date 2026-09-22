import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function ApplicationForm({ job, isWaiting }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا هتحطي الاتصال الفعلي بالـ backend/API لتسجيل الطلب
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 flex flex-col items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-10 text-center"
      >
        <CheckCircle2 className="h-8 w-8 text-emerald-400" />
        <p className="text-[15px] font-semibold text-white">
          {isWaiting
            ? "You've been added to the waiting list."
            : "Your application has been submitted."}
        </p>
        <p className="text-[13px] text-slate-300">
          {isWaiting
            ? "We'll email you as soon as this position reopens."
            : "Our team will review it and get back to you soon."}
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
      <p className="text-[13px] text-slate-300">
        {isWaiting ? (
          <>
            You're joining the waiting list for <strong>{job.title}</strong>. This role
            isn't actively hiring right now — we'll contact you if that changes.
          </>
        ) : (
          <>
            You're applying for the currently open position of <strong>{job.title}</strong>.
          </>
        )}
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-[12.5px] font-medium text-slate-300">Full name</label>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            className="rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-[14px] text-white outline-none focus:border-amber-400"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[12.5px] font-medium text-slate-300">Email</label>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-[14px] text-white outline-none focus:border-amber-400"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[12.5px] font-medium text-slate-300">Phone</label>
        <input
          required
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-[14px] text-white outline-none focus:border-amber-400"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[12.5px] font-medium text-slate-300">
          {isWaiting ? "Why are you interested in this role?" : "Cover letter"}
        </label>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-[14px] text-white outline-none focus:border-amber-400"
        />
      </div>

      <button
        type="submit"
        className="mt-2 rounded-xl bg-amber-500 py-3 text-[14px] font-semibold text-[#1E2432] transition-opacity hover:opacity-90"
      >
        {isWaiting ? "Join Waiting List" : "Submit Application"}
      </button>
    </form>
  );
}