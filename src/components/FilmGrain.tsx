/**
 * Global film-grain overlay using SVG feTurbulence.
 * Renders a hidden SVG filter and a fixed full-viewport pseudo via inline style.
 * Sits above all content with pointer-events: none.
 */
export function FilmGrain() {
  return (
    <>
      <svg
        aria-hidden
        width="0"
        height="0"
        style={{ position: "absolute" }}
      >
        <filter id="lab-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5" />
          </feComponentTransfer>
        </filter>
      </svg>
      <div className="lab-grain pointer-events-none fixed inset-0 z-[9999]" aria-hidden />
    </>
  );
}
