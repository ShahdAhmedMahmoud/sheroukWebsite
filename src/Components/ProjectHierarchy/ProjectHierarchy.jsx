

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ClipboardList,
  HardHat,
  Layers,
  Building2,
  Cable,
  Paintbrush,
  Sparkles,
  CheckCircle2,
  Plus,
  ArrowRight,
} from "lucide-react";
import KineticGrid from "../KineticGrid/KineticGrid";

const PHASES = [
  {
    title: "Project Start",
    tag: "START",
    icon: ClipboardList,
  },
  {
    title: "Site Preparation",
    tag: "PREP",
    icon: HardHat,
  },
  {
    title: "Foundation",
    tag: "FOUND",
    icon: Layers,
  },
  {
    title: "Structural Work",
    tag: "STRUCT",
    icon: Building2,
  },
  {
    title: "MEP Installation",
    tag: "MEP",
    icon: Cable,
  },
  {
    title: "Interior & Exterior",
    tag: "FINISH",
    icon: Paintbrush,
  },
  {
    title: "Final Finishing",
    tag: "DETAIL",
    icon: Sparkles,
  },
  {
    title: "Project Completed",
    tag: "DONE",
    icon: CheckCircle2,
  },
];

const GROUPS = [
  {
    title: "Pre-Construction",
    phases: [0, 1],
  },
  {
    title: "Core Construction",
    phases: [2, 3, 4],
  },
  {
    title: "Finishing & Delivery",
    phases: [5, 6, 7],
  },
];


const CARD_HOLD = 1900;
const RESET_DELAY = 900;



const GOLD = "#FFBF00";
const NAVY = "#293A82";
const BG = "#425073";

const LINE_IDLE = "rgba(248,249,253,0.12)";
const LINE_ACTIVE = "rgba(248,249,253,0.55)";



const GROUP_POSITIONS_DESKTOP = [
  { x: 30, y: 22 },
  { x: 48, y: 50 },
  { x: 66, y: 78 },
];

const ROOT_POSITION_DESKTOP = {
  x: 7,
  y: 50,
};

const CARD_POSITION_DESKTOP = {
  x: 78,
};

function getGroupIndex(phaseIndex) {
  return GROUPS.findIndex((group) =>
    group.phases.includes(phaseIndex)
  );
}

function PhaseCard({
  phase,
  index,
  image,
  progress,
  status,
  groupIndex,
}) {
  const Icon = phase.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.92,
      }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        w-[280px]
        sm:w-[310px]
        lg:w-[340px]
        overflow-hidden
        rounded-2xl
        border border-white/10
        
        bg-[#425073]
        shadow-[0_25px_80px_rgba(0,0,0,0.35)]
      "
    >
      {/* IMAGE */}

      <div className="relative h-40 sm:h-44 lg:h-48 w-full overflow-hidden">
        <motion.img
          src={image}
          alt={phase.title}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
          className="h-full w-full object-cover"
        />

        {/* dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E2432] via-transparent to-black/20" />

        {/* phase number */}

        <div className="absolute left-3 top-3">
          <span className="
            rounded-full
            bg-black/60
            px-2.5
            py-1
            text-[9px]
            font-semibold
            tracking-[0.12em]
            text-[#FFBF00]
            backdrop-blur-md
          ">
            PHASE {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* icon */}

        <div className="
          absolute
          right-3
          top-3
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          bg-[#FFBF00]
          shadow-lg
        ">
          <Icon className="h-4 w-4 text-[#1E2432]" />
        </div>

        {/* cinematic phase label */}

        <div className="absolute bottom-3 left-4 right-4">
          <div className="mb-1 text-[9px] uppercase tracking-[0.25em] text-white/45">
            Construction Sequence
          </div>

          <h3 className="
            text-base
            sm:text-lg
            lg:text-xl
            font-bold
            leading-tight
            text-white
          ">
            {phase.title}
          </h3>
        </div>
      </div>

      {/* CONTENT */}

      <div className="p-4 sm:p-5">
        <div className="mb-3 flex items-center justify-between">
          <div>
            <p className="text-[9px] uppercase tracking-[0.18em] text-white/35">
              Current Stage
            </p>

            <p className="mt-1 text-xs font-semibold text-white/85">
              {GROUPS[groupIndex].title}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`
                rounded-full
                px-2.5
                py-1
                text-[9px]
                font-semibold
                ${
                  status === "Completed"
                    ? "bg-[#FFBF00]/15 text-[#FFBF00]"
                    : status === "In Progress"
                    ? "bg-[#293A82]/50 text-white"
                    : "bg-white/5 text-white/25"
                }
              `}
            >
              {status}
            </span>
          </div>
        </div>

        {/* progress */}

        <div className="mb-2 flex items-center justify-between">
          <span className="text-[9px] uppercase tracking-[0.12em] text-white/35">
            Progress
          </span>

          <span className="text-[10px] font-semibold text-[#FFBF00]">
            {progress}%
          </span>
        </div>

        <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            className="h-full rounded-full bg-[#FFBF00]"
          />
        </div>

        {/* footer */}

        <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
          <span className="text-[9px] tracking-[0.16em] text-white/25">
            HANDOFF {String(index + 1).padStart(2, "0")}
          </span>

          <ArrowRight className="h-3.5 w-3.5 text-[#FFBF00]" />
        </div>
      </div>
    </motion.div>
  );
}

function DesktopGroupNode({
  group,
  index,
  active,
  revealed,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.7,
      }}
      animate={{
        opacity: revealed ? 1 : 0,
        scale: revealed ? 1 : 0.7,
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        absolute
        z-20
        flex
        -translate-x-1/2
        -translate-y-1/2
        flex-col
        items-center
        gap-2
      "
      style={{
        left: `${GROUP_POSITIONS_DESKTOP[index].x}%`,
        top: `${GROUP_POSITIONS_DESKTOP[index].y}%`,
      }}
    >
      {/* pulse ring */}

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.6,
            }}
            animate={{
              opacity: [0.15, 0.4, 0.15],
              scale: [0.9, 1.25, 0.9],
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              h-16
              w-16
              rounded-full
              border
              border-[#FFBF00]/30
            "
          />
        )}
      </AnimatePresence>

      {/* node */}

      <motion.div
        animate={{
          borderColor: active
            ? GOLD
            : "rgba(255,191,0,0.35)",
          backgroundColor: active
            ? "rgba(255,191,0,0.08)"
            : BG,
          scale: active ? 1.08 : 1,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          border
          text-[#FFBF00]
        "
      >
        <Plus className="h-4 w-4" />
      </motion.div>

      {/* label */}

      <span
        className={`
          rounded-full
          border
          px-3
          py-1
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.08em]
          whitespace-nowrap
          backdrop-blur-md
          ${
            active
              ? "border-[#FFBF00]/30 bg-[#FFBF00]/10 text-[#FFBF00]"
              : "border-white/5 bg-white/5 text-white/45"
          }
        `}
      >
        {group.title}
      </span>
    </motion.div>
  );
}

export default function ProjectHierarchy({ project }) {
  const [isInView, setIsInView] = useState(false);
  const [activePhase, setActivePhase] = useState(null);
  const [revealedGroups, setRevealedGroups] = useState(new Set());

  /* =========================
     TARGET PHASE
  ========================= */

  const targetIndex = useMemo(() => {
    if (typeof project.currentPhase === "number") {
      return project.currentPhase;
    }

    if (project.status?.toLowerCase() === "finished") {
      return PHASES.length - 1;
    }

    return Math.floor(PHASES.length / 2);
  }, [project]);

  /* =========================
     VALID PHASES
  ========================= */

  const playablePhases = useMemo(() => {
    return PHASES.slice(0, targetIndex + 1).map((_, index) => index);
  }, [targetIndex]);

  /* =========================
     IMAGE
  ========================= */

  const getImage = (phaseIndex) => {
    return (
      project.phaseGallery?.[phaseIndex] ||
      (project.gallery?.length
        ? project.gallery[
            phaseIndex % project.gallery.length
          ]
        : project.src)
    );
  };

  /* =========================
     CURRENT GROUP
  ========================= */

  const activeGroup =
    activePhase !== null
      ? getGroupIndex(activePhase)
      : null;

  /* =========================
     INTERSECTION OBSERVER
  ========================= */

  useEffect(() => {
    const section = document.getElementById(
      `project-hierarchy-${project.title}`
    );

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [project.title]);

  /* =========================
     AUTOMATIC CINEMATIC LOOP
  ========================= */

  useEffect(() => {
    if (!isInView || !playablePhases.length) {
      setActivePhase(null);
      setRevealedGroups(new Set());
      return;
    }

    let timer;

    // start from beginning
    setActivePhase(0);
    setRevealedGroups(new Set([getGroupIndex(0)]));

    return () => {
      clearTimeout(timer);
    };
  }, [isInView, playablePhases]);

  /* =========================
     PHASE TO PHASE LOOP
  ========================= */

  useEffect(() => {
    if (!isInView || activePhase === null) return;

    const currentPosition =
      playablePhases.indexOf(activePhase);

    if (currentPosition === -1) return;

    const timer = setTimeout(() => {
      const nextPosition = currentPosition + 1;

      // finished → restart cinematic sequence
      if (nextPosition >= playablePhases.length) {
        setActivePhase(null);

        setTimeout(() => {
          if (!isInView) return;

          setRevealedGroups(new Set());

          setTimeout(() => {
            if (!isInView) return;

            setActivePhase(playablePhases[0]);

            setRevealedGroups(
              new Set([getGroupIndex(playablePhases[0])])
            );
          }, RESET_DELAY);
        }, 700);

        return;
      }

      const nextPhase = playablePhases[nextPosition];
      const nextGroup = getGroupIndex(nextPhase);

      setRevealedGroups((previous) => {
        const updated = new Set(previous);
        updated.add(nextGroup);
        return updated;
      });

      setActivePhase(nextPhase);
    }, CARD_HOLD);

    return () => clearTimeout(timer);
  }, [
    activePhase,
    isInView,
    playablePhases,
  ]);

  /* =========================
     STATUS
  ========================= */

  const getStatus = (index) => {
    if (index < targetIndex) {
      return "Completed";
    }

    if (index === targetIndex) {
      return "In Progress";
    }

    return "Pending";
  };

  /* =========================
     DESKTOP TREE
  ========================= */

  return (
    <section
      id={`project-hierarchy-${project.title}`}
      className="
        relative
        w-full
        overflow-hidden
        bg-[#425073]
        px-4
        py-14
        sm:px-6
        sm:py-20
      "
    >
      <KineticGrid className="!h-auto rounded-2xl">
        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-4
            py-10
            sm:px-8
            sm:py-14
          "
        >
          {/* =========================
              HEADER
          ========================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mb-8 text-center sm:mb-10"
          >
            <span className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.28em]
              text-[#FFBF00]
              sm:text-xs
            ">
              The Construction Journey
            </span>

            <h2 className="
              mt-3
              text-3xl
              font-bold
              leading-tight
              text-white
              sm:text-4xl
              md:text-5xl
            ">
              From Ground To Completion
            </h2>

            <p className="
              mx-auto
              mt-3
              max-w-xl
              text-[11px]
              leading-relaxed
              text-white/35
              sm:text-xs
            ">
              Every phase hands the project to the next.
              One continuous construction sequence.
            </p>
          </motion.div>

          {/* ==================================================
              DESKTOP CINEMATIC TREE
          ================================================== */}

          <div
            className="
              relative
              hidden
              h-[430px]
              overflow-hidden
              md:block
              lg:h-[470px]
            "
          >
            {/* =========================
                SVG TREE
            ========================= */}

            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="
                pointer-events-none
                absolute
                inset-0
                h-full
                w-full
              "
            >
              {/* ROOT → GROUPS */}

              {GROUPS.map((group, index) => {
                const point =
                  GROUP_POSITIONS_DESKTOP[index];

                const revealed =
                  revealedGroups.has(index);

                return (
                  <motion.path
                    key={`root-group-${index}`}
                    d={`
                      M ${ROOT_POSITION_DESKTOP.x}
                        ${ROOT_POSITION_DESKTOP.y}

                      Q
                        ${(ROOT_POSITION_DESKTOP.x + point.x) / 2}
                        ${point.y}

                        ${point.x}
                        ${point.y}
                    `}
                    fill="none"
                    stroke={
                      revealed
                        ? GOLD
                        : LINE_IDLE
                    }
                    strokeWidth="0.35"
                    strokeLinecap="round"
                    initial={{
                      pathLength: 0,
                      opacity: 0,
                    }}
                    animate={{
                      pathLength: revealed ? 1 : 0,
                      opacity: revealed ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}

              {/* ACTIVE GROUP → ACTIVE PHASE */}

              <AnimatePresence mode="wait">
                {activePhase !== null &&
                  activeGroup !== null && (
                    <motion.path
                      key={`active-line-${activePhase}`}
                      d={`
                        M
                          ${GROUP_POSITIONS_DESKTOP[
                            activeGroup
                          ].x}
                          ${GROUP_POSITIONS_DESKTOP[
                            activeGroup
                          ].y}

                        C
                          ${GROUP_POSITIONS_DESKTOP[
                            activeGroup
                          ].x + 8}
                          ${GROUP_POSITIONS_DESKTOP[
                            activeGroup
                          ].y}

                          70
                          ${GROUP_POSITIONS_DESKTOP[
                            activeGroup
                          ].y}

                          ${CARD_POSITION_DESKTOP.x}
                          ${GROUP_POSITIONS_DESKTOP[
                            activeGroup
                          ].y}
                      `}
                      fill="none"
                      stroke={LINE_ACTIVE}
                      strokeWidth="0.4"
                      strokeLinecap="round"
                      initial={{
                        pathLength: 0,
                        opacity: 0,
                      }}
                      animate={{
                        pathLength: 1,
                        opacity: 1,
                      }}
                      exit={{
                        pathLength: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.75,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  )}
              </AnimatePresence>
            </svg>

            {/* =========================
                ROOT NODE
            ========================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                absolute
                z-30
                flex
                -translate-x-1/2
                -translate-y-1/2
                flex-col
                items-center
                gap-2
              "
              style={{
                left: `${ROOT_POSITION_DESKTOP.x}%`,
                top: `${ROOT_POSITION_DESKTOP.y}%`,
              }}
            >
              <div className="
                relative
                h-24
                w-24
                overflow-hidden
                rounded-full
                border-2
                border-[#FFBF00]
                bg-[#425073]
                shadow-[0_0_45px_rgba(255,191,0,0.15)]
                lg:h-28
                lg:w-28
              ">
                <img
                  src={project.src}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />

                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/35
                  to-transparent
                " />
              </div>

              <span className="
                rounded-full
                bg-[#293A82]
                px-3
                py-1
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.1em]
                text-white
              ">
                Project Start
              </span>
            </motion.div>

            {/* =========================
                GROUP NODES
            ========================= */}

            {GROUPS.map((group, index) => (
              <DesktopGroupNode
                key={group.title}
                group={group}
                index={index}
                active={activeGroup === index}
                revealed={revealedGroups.has(index)}
              />
            ))}

            {/* =========================
                MOVING PHASE CARD
            ========================= */}

            <AnimatePresence mode="wait">
              {activePhase !== null &&
                activeGroup !== null && (
                  <motion.div
                    key={activePhase}
                    initial={{
                      left: `${GROUP_POSITIONS_DESKTOP[
                        activeGroup
                      ].x}%`,
                      top: `${GROUP_POSITIONS_DESKTOP[
                        activeGroup
                      ].y}%`,
                      opacity: 0,
                      scale: 0.85,
                    }}
                    animate={{
                      left: `${CARD_POSITION_DESKTOP.x}%`,
                      top: `${GROUP_POSITIONS_DESKTOP[
                        activeGroup
                      ].y}%`,
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      left: "108%",
                      opacity: 0,
                      scale: 0.96,
                    }}
                    transition={{
                      left: {
                        duration: 1.05,
                        ease: [0.22, 1, 0.36, 1],
                      },
                      top: {
                        duration: 0.5,
                        ease: "easeInOut",
                      },
                      opacity: {
                        duration: 0.45,
                      },
                      scale: {
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }}
                    className="
                      absolute
                      z-40
                      -translate-x-1/2
                      -translate-y-1/2
                    "
                  >
                    <PhaseCard
                      phase={PHASES[activePhase]}
                      index={activePhase}
                      image={getImage(activePhase)}
                      progress={Math.round(
                        ((activePhase + 1) /
                          PHASES.length) *
                          100
                      )}
                      status={getStatus(activePhase)}
                      groupIndex={activeGroup}
                    />
                  </motion.div>
                )}
            </AnimatePresence>

            {/* =========================
                LIVE INDICATOR
            ========================= */}

            {activePhase !== null && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="
                  absolute
                  bottom-2
                  left-[78%]
                  z-30
                  -translate-x-1/2
                "
              >
                <div className="
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#FFBF00]/15
                  bg-black/20
                  px-3
                  py-1.5
                  backdrop-blur-md
                ">
                  <motion.span
                    animate={{
                      opacity: [0.35, 1, 0.35],
                    }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                    }}
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#FFBF00]
                    "
                  />

                  <span className="
                    text-[8px]
                    uppercase
                    tracking-[0.2em]
                    text-white/45
                  ">
                    Live Construction Sequence
                  </span>
                </div>
              </motion.div>
            )}
          </div>

          {/* ==================================================
              MOBILE
          ================================================== */}

          <div className="relative md:hidden">
            <div
              className="
                relative
                h-[560px]
                overflow-hidden
              "
            >
              {/* =========================
                  MOBILE SVG TREE
              ========================= */}

              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  h-full
                  w-full
                "
              >
                {/* ROOT → GROUPS */}

                {GROUPS.map((group, index) => {
                  const x = [18, 50, 82][index];
                  const y = 31;

                  return (
                    <motion.path
                      key={`mobile-root-${index}`}
                      d={`
                        M 50 11

                        Q
                          50 ${20}
                          ${x} ${y}
                      `}
                      fill="none"
                      stroke={
                        revealedGroups.has(index)
                          ? GOLD
                          : LINE_IDLE
                      }
                      strokeWidth="0.55"
                      strokeLinecap="round"
                      initial={{
                        pathLength: 0,
                      }}
                      animate={{
                        pathLength:
                          revealedGroups.has(index)
                            ? 1
                            : 0,
                      }}
                      transition={{
                        duration: 0.65,
                      }}
                    />
                  );
                })}

                {/* GROUP → ACTIVE PHASE */}

                {activePhase !== null &&
                  activeGroup !== null && (
                    <motion.path
                      key={`mobile-line-${activePhase}`}
                      d={`
                        M
                          ${[18, 50, 82][
                            activeGroup
                          ]}
                          31

                        C
                          ${[18, 50, 82][
                            activeGroup
                          ]}
                          46

                          50
                          50

                          50
                          61
                      `}
                      fill="none"
                      stroke={LINE_ACTIVE}
                      strokeWidth="0.55"
                      strokeLinecap="round"
                      initial={{
                        pathLength: 0,
                        opacity: 0,
                      }}
                      animate={{
                        pathLength: 1,
                        opacity: 1,
                      }}
                      transition={{
                        duration: 0.7,
                        ease: "easeInOut",
                      }}
                    />
                  )}
              </svg>

              {/* =========================
                  ROOT
              ========================= */}

              <div className="
                absolute
                left-1/2
                top-[11%]
                z-20
                -translate-x-1/2
                -translate-y-1/2
              ">
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="
                    h-16
                    w-16
                    overflow-hidden
                    rounded-full
                    border-2
                    border-[#FFBF00]
                    shadow-lg
                  ">
                    <img
                      src={project.src}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <span className="
                    rounded-full
                    bg-[#293A82]
                    px-2.5
                    py-1
                    text-[8px]
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                    text-white
                  ">
                    Project Start
                  </span>
                </motion.div>
              </div>

              {/* =========================
                  GROUP NODES
              ========================= */}

              {GROUPS.map((group, index) => {
                const active = activeGroup === index;
                const revealed =
                  revealedGroups.has(index);

                return (
                  <motion.div
                    key={group.title}
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: revealed ? 1 : 0,
                      scale: revealed ? 1 : 0.7,
                    }}
                    className="
                      absolute
                      top-[31%]
                      z-20
                      -translate-x-1/2
                    "
                    style={{
                      left: `${[18, 50, 82][index]}%`,
                    }}
                  >
                    <motion.div
                      animate={{
                        borderColor: active
                          ? GOLD
                          : "rgba(255,191,0,0.35)",
                        scale: active ? 1.08 : 1,
                      }}
                      className="
                        mx-auto
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        bg-[#425073]
                        text-[#FFBF00]
                      "
                    >
                      <Plus className="h-3.5 w-3.5" />
                    </motion.div>

                    <span className={`
                      mt-2
                      block
                      max-w-[90px]
                      text-center
                      text-[7px]
                      font-semibold
                      uppercase
                      leading-tight
                      ${
                        active
                          ? "text-[#FFBF00]"
                          : "text-white/40"
                      }
                    `}>
                      {group.title}
                    </span>
                  </motion.div>
                );
              })}

              {/* =========================
                  MOBILE PHASE
              ========================= */}

              <div className="
                absolute
                left-1/2
                top-[71%]
                z-40
                w-full
                -translate-x-1/2
                -translate-y-1/2
                px-2
              ">
                <AnimatePresence mode="wait">
                  {activePhase !== null &&
                    activeGroup !== null && (
                      <motion.div
                        key={activePhase}
                        initial={{
                          opacity: 0,
                          x:
                            activeGroup === 0
                              ? -70
                              : activeGroup === 2
                              ? 70
                              : 0,
                          scale: 0.92,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          x: 90,
                          scale: 0.94,
                        }}
                        transition={{
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex justify-center"
                      >
                        <PhaseCard
                          phase={PHASES[activePhase]}
                          index={activePhase}
                          image={getImage(activePhase)}
                          progress={Math.round(
                            ((activePhase + 1) /
                              PHASES.length) *
                              100
                          )}
                          status={getStatus(activePhase)}
                          groupIndex={activeGroup}
                        />
                      </motion.div>
                    )}
                </AnimatePresence>
              </div>

              {/* =========================
                  MOBILE LIVE LABEL
              ========================= */}

              <div className="
                absolute
                bottom-2
                left-1/2
                z-20
                -translate-x-1/2
              ">
                <div className="
                  flex
                  items-center
                  gap-2
                  whitespace-nowrap
                  rounded-full
                  border
                  border-[#FFBF00]/15
                  bg-black/20
                  px-3
                  py-1.5
                  backdrop-blur-md
                ">
                  <motion.span
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                    }}
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#FFBF00]
                    "
                  />

                  <span className="
                    text-[7px]
                    uppercase
                    tracking-[0.18em]
                    text-white/40
                  ">
                    Live Construction Sequence
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </KineticGrid>
    </section>
  );
}



