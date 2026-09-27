// import { AnimatePresence, motion } from "framer-motion";
// import { Briefcase, Clock, MapPin, X } from "lucide-react";
// import FilterCheckbox from "../Filtercheckbox/Filtercheckbox";


// function FilterGroup({ icon: Icon, title, items, selected, onToggle, getCount }) {
//   return (
//     <div className="rounded-xl border border-slate-200 bg-white p-5">
//       <div className="mb-3 flex items-center gap-2 text-[#14212E]">
//         <Icon className="h-4 w-4 text-[#2A317A]" strokeWidth={2} />
//         <h3 className="text-[14px] font-semibold tracking-tight">{title}</h3>
//       </div>
//       <div className="flex flex-col">
//         {items.map((item) => (
//           <FilterCheckbox
//             key={item}
//             id={`${title}-${item}`}
//             label={item}
//             count={getCount ? getCount(item) : undefined}
//             checked={selected.includes(item)}
//             onChange={() => onToggle(item)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function FilterSidebar({
//   departments,
//   jobTypes,
//   locations,
//   selectedDepartments,
//   selectedJobTypes,
//   selectedLocations,
//   onToggleDepartment,
//   onToggleJobType,
//   onToggleLocation,
//   counts,
//   activeCount,
//   onClear,
// }) {
//   return (
//     <aside className="flex w-full flex-col gap-4 lg:w-[290px] lg:shrink-0">
//       <AnimatePresence initial={false}>
//         {activeCount > 0 && (
//           <motion.button
//             key="clear"
//             initial={{ opacity: 0, height: 0, marginBottom: 0 }}
//             animate={{ opacity: 1, height: "auto", marginBottom: 4 }}
//             exit={{ opacity: 0, height: 0, marginBottom: 0 }}
//             transition={{ duration: 0.2 }}
//             onClick={onClear}
//             className="flex items-center justify-between rounded-lg border border-amber-200 bg-amber-50 px-4 py-2.5 text-[13px] font-medium text-amber-700 hover:bg-amber-100"
//           >
//             <span>
//               {activeCount} filter{activeCount > 1 ? "s" : ""} active
//             </span>
//             <span className="flex items-center gap-1">
//               Clear <X className="h-3.5 w-3.5" />
//             </span>
//           </motion.button>
//         )}
//       </AnimatePresence>

//       <FilterGroup
//         icon={Briefcase}
//         title="Department"
//         items={departments}
//         selected={selectedDepartments}
//         onToggle={onToggleDepartment}
//         getCount={(d) => counts.department[d] || 0}
//       />
//       <FilterGroup
//         icon={Clock}
//         title="Job Type"
//         items={jobTypes}
//         selected={selectedJobTypes}
//         onToggle={onToggleJobType}
//         getCount={(t) => counts.type[t] || 0}
//       />
//       <FilterGroup
//         icon={MapPin}
//         title="Location"
//         items={locations}
//         selected={selectedLocations}
//         onToggle={onToggleLocation}
//         getCount={(l) => counts.location[l] || 0}
//       />
//     </aside>
//   );
// }



import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Clock, MapPin, X } from "lucide-react";
import FilterCheckbox from "../Filtercheckbox/Filtercheckbox";

export const BLOCK_HEIGHT = 350; // لازم يتطابق مع CARD_HEIGHT في OpenPositions.jsx

function FilterGroup({ icon: Icon, title, items, selected, onToggle, getCount, columns = 1, className = "" }) {
  return (
    <div
      className={`flex min-h-0 flex-1 flex-col border border-[#3C3C3B]/15 bg-white p-4 ${className}`}
    >
      <div className="mb-2 flex shrink-0 items-center gap-2 border-b border-[#3C3C3B]/10 pb-2 text-[#3C3C3B]">
        <Icon className="h-4 w-4 text-[#2A317A]" strokeWidth={2} />
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.1em]">{title}</h3>
      </div>

      <div
        className={
          columns === 2
            ? "grid flex-1 grid-cols-2 content-start gap-x-3 gap-y-1.5"
            : "flex flex-1 flex-col content-start gap-1.5"
        }
      >
        {items.map((item) => (
          <FilterCheckbox
            key={item}
            id={`${title}-${item}`}
            label={item}
            count={getCount ? getCount(item) : undefined}
            checked={selected.includes(item)}
            onChange={() => onToggle(item)}
          />
        ))}
      </div>
    </div>
  );
}

export default function FilterSidebar({
  departments,
  jobTypes,
  locations,
  selectedDepartments,
  selectedJobTypes,
  selectedLocations,
  onToggleDepartment,
  onToggleJobType,
  onToggleLocation,
  counts,
  activeCount,
  onClear,
}) {
  return (
    <aside className="flex w-full flex-col gap-6 lg:w-[290px] lg:shrink-0">
      {/*
        Department + Job Type
        ارتفاعهم الكلي = ارتفاع الـ Job Card بالظبط (BLOCK_HEIGHT)
        كل واحد فيهم flex-1 عشان يتقسموا بالتساوي بينهم
      */}
      <div
        className="relative flex flex-col gap-6"
        style={{ height: `${BLOCK_HEIGHT}px` }}
      >
        <AnimatePresence initial={false}>
          {activeCount > 0 && (
            <motion.button
              key="clear"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              onClick={onClear}
              className="absolute right-3 top-3 z-10 flex items-center gap-2 border border-[#2A317A] bg-white px-3 py-1.5 text-[11px] font-medium uppercase tracking-wide text-[#3C3C3B] shadow-sm transition-colors hover:bg-[#2A317A] hover:text-white"
            >
              <span>
                {activeCount} filter{activeCount > 1 ? "s" : ""}
              </span>
              <X className="h-3.5 w-3.5" />
            </motion.button>
          )}
        </AnimatePresence>

        <FilterGroup
          icon={Briefcase}
          title="Department"
          items={departments}
          selected={selectedDepartments}
          onToggle={onToggleDepartment}
          getCount={(d) => counts.department[d] || 0}
          columns={2}
        />

        <FilterGroup
          icon={Clock}
          title="Job Type"
          items={jobTypes}
          selected={selectedJobTypes}
          onToggle={onToggleJobType}
          getCount={(t) => counts.type[t] || 0}
          columns={2}
        />
      </div>

      {/*
        Location
        ارتفاعها = ارتفاع الـ Job Card بالظبط (BLOCK_HEIGHT) برضو
        عمود واحد لأنها لوحدها وعندها مساحة كافية
      */}
      <div style={{ height: `${BLOCK_HEIGHT}px` }}>
        <FilterGroup
          icon={MapPin}
          title="Location"
          items={locations}
          selected={selectedLocations}
          onToggle={onToggleLocation}
          getCount={(l) => counts.location[l] || 0}
          columns={1}
          className="h-full"
        />
      </div>
    </aside>
  );
}
