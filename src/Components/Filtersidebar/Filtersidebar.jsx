import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Clock, MapPin, X } from "lucide-react";
import FilterCheckbox from "../Filtercheckbox/Filtercheckbox";


function FilterGroup({ icon: Icon, title, items, selected, onToggle, getCount }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-3 flex items-center gap-2 text-[#14212E]">
        <Icon className="h-4 w-4 text-[#2A317A]" strokeWidth={2} />
        <h3 className="text-[14px] font-semibold tracking-tight">{title}</h3>
      </div>
      <div className="flex flex-col">
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
    <aside className="flex w-full flex-col gap-4 lg:w-[290px] lg:shrink-0">
      <AnimatePresence initial={false}>
        {activeCount > 0 && (
          <motion.button
            key="clear"
            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
            animate={{ opacity: 1, height: "auto", marginBottom: 4 }}
            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClear}
            className="flex items-center justify-between rounded-lg border border-amber-200 bg-amber-50 px-4 py-2.5 text-[13px] font-medium text-amber-700 hover:bg-amber-100"
          >
            <span>
              {activeCount} filter{activeCount > 1 ? "s" : ""} active
            </span>
            <span className="flex items-center gap-1">
              Clear <X className="h-3.5 w-3.5" />
            </span>
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
      />
      <FilterGroup
        icon={Clock}
        title="Job Type"
        items={jobTypes}
        selected={selectedJobTypes}
        onToggle={onToggleJobType}
        getCount={(t) => counts.type[t] || 0}
      />
      <FilterGroup
        icon={MapPin}
        title="Location"
        items={locations}
        selected={selectedLocations}
        onToggle={onToggleLocation}
        getCount={(l) => counts.location[l] || 0}
      />
    </aside>
  );
}