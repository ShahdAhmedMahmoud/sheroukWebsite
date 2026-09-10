



import { useEffect, useRef } from "react";


const BRICK_COLOR = "#1E2432";

function buildBricks({ width, height, brickWidth, brickHeight, gap, rows }) {
  const cols = Math.ceil(width / (brickWidth + gap)) + 1;
  const totalH = rows * (brickHeight + gap);
  const offsetY = height - totalH; // الصفوف بتترص من تحت السكشن لفوق

  const bricks = [];
  for (let r = 0; r < rows; r++) {
    const shift = r % 2 === 0 ? 0 : (brickWidth + gap) / 2;
    for (let c = -1; c < cols; c++) {
      const x = c * (brickWidth + gap) + shift;
      if (x < -brickWidth || x > width) continue;
      const y = offsetY + (rows - 1 - r) * (brickHeight + gap);
      bricks.push({ x, y, row: r });
    }
  }
  return { bricks, maxRow: rows - 1 };
}

export function BricksAccentBackground({
  className,
  backgroundColor = "#FFFFFF",
  brickWidth = 64,
  brickHeight = 28,
  gap = 4,
  rows = 3, // عدد صفوف الطوب في آخر السكشن بس
  edgeWidth = 180,
  opacity = 0.1,
  fallDuration = 2.5, // نزول أبطأ من قبل
  rowStagger = 0.4, // فرق التوقيت بين كل صف والتاني — كل ما زاد، الحركة تبان أهدأ وأتدرّج
  children,
}) {
  const containerRef = useRef(null);
  const wallRef = useRef(null);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const container = containerRef.current;
    const wall = wallRef.current;
    if (!container || !wall) return;

    const visibleRef = { current: false };

    const paint = (animate) => {
      const { width, height } = container.getBoundingClientRect();
      if (!width || !height) return;

      const scale = width < 480 ? 0.6 : width < 768 ? 0.8 : 1;
      const rBW = Math.round(brickWidth * scale);
      const rBH = Math.round(brickHeight * scale);
      const rGap = Math.max(2, Math.round(gap * scale));
      const rEdgeWidth = Math.min(Math.max(width * 0.18, rBW + rGap), edgeWidth);

      wall.innerHTML = "";
      const { bricks: edgeBricks, maxRow } = buildBricks({
        width: rEdgeWidth,
        height,
        brickWidth: rBW,
        brickHeight: rBH,
        gap: rGap,
        rows,
      });
      const bricks = [
        ...edgeBricks,
        ...edgeBricks.map((brick) => ({ ...brick, x: width - rEdgeWidth + brick.x })),
      ];

      bricks
        .slice()
        .sort((a, b) => b.row - a.row)
        .forEach((b) => {
          const el = document.createElement("div");
          el.style.position = "absolute";
          el.style.width = `${rBW}px`;
          el.style.height = `${rBH}px`;
          el.style.left = `${b.x}px`;
          el.style.top = `${b.y}px`;
          el.style.background = BRICK_COLOR;
          el.style.borderRadius = "2px";

          if (animate && !reduceMotion) {
            const delay = ((maxRow - b.row) * rowStagger + Math.random() * 0.12).toFixed(2);
            el.style.opacity = "0";
            el.style.setProperty("--target-opacity", opacity);
            el.style.setProperty("--fall-distance", `${-(height + rBH)}px`);
            // إيزنج ناعم من غير أي ارتداد (bounce) — نزول متدرّج وهادي
            el.style.animation = `bricks-accent-fall-in ${fallDuration}s ${delay}s cubic-bezier(0.33,1,0.68,1) both`;
          } else {
            el.style.opacity = String(opacity);
          }

          wall.appendChild(el);
        });
    };

    const handleResize = () => {
      if (visibleRef.current) paint(false);
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    let io;
    if (reduceMotion) {
      paint(false);
    } else {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleRef.current = true;
              paint(true);
            } else {
              visibleRef.current = false;
              wall.innerHTML = "";
            }
          });
        },
        { threshold: 0.15 }
      );
      io.observe(container);
    }

    return () => {
      resizeObserver.disconnect();
      if (io) io.disconnect();
    };
  }, [brickWidth, brickHeight, gap, rows, edgeWidth, opacity, fallDuration, rowStagger]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: "relative", overflow: "hidden", width: "100%", background: backgroundColor }}
    >
      <style>{`
        @keyframes bricks-accent-fall-in {
          0%   { transform: translateY(var(--fall-distance)); opacity: 0; }
          45%  { opacity: var(--target-opacity); }
          100% { transform: translateY(0); opacity: var(--target-opacity); }
        }
      `}</style>

      <div
        ref={wallRef}
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}
      />

      <div style={{ position: "relative", zIndex: 10 }}>{children}</div>
    </div>
  );
}

export default BricksAccentBackground;