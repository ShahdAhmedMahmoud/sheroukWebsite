import { useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ApplicationForm from "../ApplicationForm/ApplicationForm";

export default function ApplicationModal({ job, isWaiting, isOpen, onClose }) {
  // يمنع السكرول بتاع الصفحة اللي وراء البوب أب وهو مفتوح
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  // إغلاق بزرار Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-[#3C3C3B]/60 backdrop-blur-sm sm:items-center sm:p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:max-h-[88vh] sm:w-full sm:max-w-lg sm:rounded-2xl"
          >
            {/* Header ثابت */}
            <div className="flex shrink-0 items-start justify-between border-b border-[#3C3C3B]/10 bg-[#2A317A] px-5 py-4 sm:px-7 sm:py-5">
              <div className="min-w-0 pr-3">
                <p className="truncate text-[15px] font-bold text-white sm:text-[17px]">
                  {isWaiting ? "انضم لقائمة الانتظار" : "تقديم على الوظيفة"}
                </p>
                <p className="mt-0.5 truncate text-[12.5px] text-white/70">
                  {job.title} {job.department ? `· ${job.department}` : ""}
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="إغلاق"
                className="shrink-0 rounded-full p-1.5 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* المحتوى القابل للسكرول */}
            <div className="overflow-y-auto px-5 py-6 sm:px-7">
              <ApplicationForm job={job} isWaiting={isWaiting} embedded onSuccessClose={onClose} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}