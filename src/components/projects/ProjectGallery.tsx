"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent as ReactMouseEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import type { ResolvedProjectImage } from "@/lib/projects/project-types";

export function ProjectGallery({ images }: { images: ResolvedProjectImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const closeLightbox = useCallback(() => setSelectedIndex(null), []);

  const showPrevious = useCallback(() => {
    setSelectedIndex((current) =>
      current === null ? current : (current - 1 + images.length) % images.length,
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setSelectedIndex((current) =>
      current === null ? current : (current + 1) % images.length,
    );
  }, [images.length]);

  useEffect(() => {
    if (selectedIndex === null) {
      triggerRef.current?.focus();
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      } else if (event.key === "ArrowLeft" && images.length > 1) {
        event.preventDefault();
        showPrevious();
      } else if (event.key === "ArrowRight" && images.length > 1) {
        event.preventDefault();
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeLightbox, images.length, selectedIndex, showNext, showPrevious]);

  if (images.length === 0) return null;

  const selectedImage = selectedIndex === null ? null : images[selectedIndex];

  const handleDialogKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") return;

    const controls = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
      ),
    );
    if (controls.length === 0) return;

    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const handleBackdropClick = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) closeLightbox();
  };

  return (
    <>
      <section className="mt-12" aria-labelledby="project-gallery-heading">
        <h2
          id="project-gallery-heading"
          className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
        >
          Project gallery
        </h2>
        <div
          className={`mt-6 grid gap-5 ${images.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"}`}
        >
          {images.map((image, index) => (
            <figure
              key={`${image.src}-${index}`}
              className="overflow-hidden rounded-[1.25rem] border border-navy/10 bg-white"
            >
              <button
                type="button"
                onClick={(event) => {
                  triggerRef.current = event.currentTarget;
                  setSelectedIndex(index);
                }}
                className="group relative block w-full cursor-zoom-in overflow-hidden text-left focus-visible:outline-offset-[-4px]"
                style={{ aspectRatio: `${image.width} / ${image.height}` }}
                aria-label={`Expand image: ${image.alt}`}
                aria-haspopup="dialog"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={images.length > 1 ? "(max-width: 640px) 100vw, 50vw" : "(max-width: 768px) 100vw, 768px"}
                  style={{ objectPosition: image.position ?? "center" }}
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.015] group-focus-visible:scale-[1.015] motion-reduce:transform-none"
                />
              </button>
              {image.caption ? (
                <figcaption className="border-t border-navy/10 px-4 py-3 text-sm leading-6 text-slate-600">
                  {image.caption}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </section>

      {selectedImage && typeof document !== "undefined"
        ? createPortal(
            <AnimatePresence>
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-lightbox-title"
                onMouseDown={handleBackdropClick}
                onKeyDown={handleDialogKeyDown}
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-4 sm:p-8"
              >
                <h2 id="project-lightbox-title" className="sr-only">
                  Expanded project image
                </h2>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 flex size-11 items-center justify-center rounded-full border border-white/40 bg-navy text-xl text-white hover:border-cyan hover:text-cyan sm:top-6 sm:right-6"
                  aria-label="Close image viewer"
                >
                  ×
                </button>

                {images.length > 1 ? (
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="absolute bottom-4 left-4 z-10 flex min-h-11 items-center rounded-full border border-white/40 bg-navy px-4 font-semibold text-white hover:border-cyan hover:text-cyan sm:top-1/2 sm:bottom-auto sm:left-6 sm:-translate-y-1/2"
                    aria-label="Show previous image"
                  >
                    <span aria-hidden="true">←</span>
                    <span className="sr-only sm:not-sr-only sm:ml-2">Previous</span>
                  </button>
                ) : null}

                <motion.figure
                  key={selectedImage.src}
                  initial={
                    prefersReducedMotion
                      ? { opacity: 1 }
                      : { opacity: 0, scale: 0.985 }
                  }
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
                  className="flex max-h-[calc(100vh-7rem)] max-w-[min(92vw,90rem)] flex-col items-center"
                >
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={selectedImage.width}
                    height={selectedImage.height}
                    sizes="95vw"
                    priority
                    className="h-auto max-h-[calc(100vh-10rem)] w-auto max-w-full rounded-lg object-contain"
                  />
                  {selectedImage.caption ? (
                    <figcaption className="mt-3 max-w-3xl text-center text-sm leading-6 text-slate-300">
                      {selectedImage.caption}
                    </figcaption>
                  ) : null}
                </motion.figure>

                {images.length > 1 ? (
                  <button
                    type="button"
                    onClick={showNext}
                    className="absolute right-4 bottom-4 z-10 flex min-h-11 items-center rounded-full border border-white/40 bg-navy px-4 font-semibold text-white hover:border-cyan hover:text-cyan sm:top-1/2 sm:right-6 sm:bottom-auto sm:-translate-y-1/2"
                    aria-label="Show next image"
                  >
                    <span className="sr-only sm:not-sr-only sm:mr-2">Next</span>
                    <span aria-hidden="true">→</span>
                  </button>
                ) : null}
              </motion.div>
            </AnimatePresence>,
            document.body,
          )
        : null}
    </>
  );
}
