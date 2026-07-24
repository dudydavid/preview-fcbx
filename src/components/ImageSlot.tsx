import { useState } from "react";

export type ImageSlotLabel =
  | "DESIGN MOCKUP"
  | "CONCEPT — NOT BUILT"
  | "PROTOTYPE"
  | null;

interface ImageSlotProps {
  src: string;
  alt: string;
  caption: string;
  label?: ImageSlotLabel;
  aspect?: string;
}

const CornerMarkers = () => (
  <>
    <span className="absolute -top-1 -left-1 font-mono text-[10px] text-primary/40 z-10">+</span>
    <span className="absolute -top-1 -right-1 font-mono text-[10px] text-primary/40 z-10">+</span>
    <span className="absolute -bottom-1 -left-1 font-mono text-[10px] text-primary/40 z-10">+</span>
    <span className="absolute -bottom-1 -right-1 font-mono text-[10px] text-primary/40 z-10">+</span>
  </>
);

const ImageSlot = ({
  src,
  alt,
  caption,
  label = null,
  aspect = "4/3",
}: ImageSlotProps) => {
  const [failed, setFailed] = useState(false);
  const isEmpty = !src || failed;

  return (
    <figure className="m-0">
      <div
        className="relative border border-white/10 overflow-hidden"
        style={{ aspectRatio: aspect, background: "rgba(15, 23, 42, 0.6)" }}
      >
        <CornerMarkers />

        {isEmpty ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
            <span className="font-mono text-[12px] text-primary/50 break-all">
              {src || "/media/[unspecified]"}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/30">
              AWAITING UPLOAD
            </span>
          </div>
        ) : (
          <>
            <img
              src={src || "/placeholder.svg"}
              alt={alt}
              onError={() => setFailed(true)}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 scanlines pointer-events-none" />
            {label && (
              <span
                className="absolute top-3 left-3 z-20 font-mono text-[11px] uppercase tracking-wider px-2 py-1 border border-white/20 text-foreground"
                style={{ background: "rgba(15, 23, 42, 0.85)" }}
              >
                {label}
              </span>
            )}
          </>
        )}

        {/* Label is also shown on the empty frame so intent is never lost */}
        {isEmpty && label && (
          <span
            className="absolute top-3 left-3 z-20 font-mono text-[11px] uppercase tracking-wider px-2 py-1 border border-white/20 text-foreground"
            style={{ background: "rgba(15, 23, 42, 0.85)" }}
          >
            {label}
          </span>
        )}
      </div>

      {caption && (
        <figcaption className="font-mono text-[12px] text-muted-foreground mt-3 leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default ImageSlot;
