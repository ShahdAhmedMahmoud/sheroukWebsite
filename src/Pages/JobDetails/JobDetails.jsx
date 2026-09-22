import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowLeft, Hourglass, BadgeCheck } from "lucide-react";
import { jobs } from "../../data/Jobsdata";
import ApplicationForm from "../../Components/ApplicationForm/ApplicationForm";

export default function JobDetails() {
  const { jobId } = useParams();
  const [showForm, setShowForm] = useState(false);
  const job = jobs.find((j) => String(j.id) === jobId);

  if (!job) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#1E2432] text-white">
        <p className="text-lg font-semibold">Job not found</p>
        <Link to="/careers" className="text-amber-400 underline">
          Back to open positions
        </Link>
      </div>
    );
  }

  const isWaiting = job.type === "Waiting List";

  return (
    <section className="min-h-screen bg-[#1E2432] px-6 py-16 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/careers"
          className="mb-8 inline-flex items-center gap-1.5 text-[13.5px] text-slate-400 hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to open positions
        </Link>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-[28px] font-bold sm:text-[32px]">{job.title}</h1>
              <p className="mt-1 font-mono text-[13px] uppercase tracking-wide text-amber-400">
                {job.department}
              </p>
            </div>
            <span
              className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white ${
                isWaiting ? "bg-slate-500" : "bg-amber-500"
              }`}
            >
              {isWaiting ? <Hourglass className="h-3 w-3" /> : <BadgeCheck className="h-3 w-3" />}
              {job.type}
            </span>
          </div>

          <div className="mt-4 flex items-center gap-1.5 text-[13.5px] text-slate-300">
            <MapPin className="h-3.5 w-3.5" />
            <span>{job.locationLabel}</span>
          </div>

          <p className="mt-2 text-[15px] font-semibold text-white">
            {job.salaryMin.toLocaleString()} – {job.salaryMax.toLocaleString()}{" "}
            <span className="text-[13px] font-medium text-slate-400">{job.currency}</span>
          </p>

          {/* البانر ده هو اللي بيوضّح للمتقدم إن الوظيفة مفتوحة فعليًا
              ولا مقفولة وهو بيدخل waiting list */}
          <div
            className={`mt-6 rounded-xl border px-4 py-3 text-[13.5px] ${
              isWaiting
                ? "border-slate-500/40 bg-slate-500/10 text-slate-200"
                : "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
            }`}
          >
            {isWaiting ? (
              <>
                <strong className="font-semibold">This position is currently closed.</strong>{" "}
                We're not actively hiring for this role right now. You can still join the
                waiting list — we'll reach out if the position reopens.
              </>
            ) : (
              <>
                <strong className="font-semibold">This position is currently open.</strong>{" "}
                We're actively reviewing applications for this role.
              </>
            )}
          </div>

          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="relative mt-8 flex w-full items-center justify-center gap-1.5 overflow-hidden rounded-xl bg-[#3C3C3B] py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-[#2A317A] sm:w-auto sm:px-8"
            >
              {isWaiting ? "Join Waiting List" : "Apply"}
            </button>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ApplicationForm job={job} isWaiting={isWaiting} />
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}