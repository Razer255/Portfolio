// Utility to detect low-end devices, mobile screens, and user motion preferences for adaptive performance scaling

export interface PerformanceProfile {
  isLowEnd: boolean;
  isMobile: boolean;
  isTouch: boolean;
  prefersReducedMotion: boolean;
  particleCount: number;
  enableGlobe: boolean;
  dprCap: number;
  enableCursorParticles: boolean;
  enableBackdropBlur: boolean;
}

export function getPerformanceProfile(): PerformanceProfile {
  if (typeof window === 'undefined') {
    return {
      isLowEnd: false,
      isMobile: false,
      isTouch: false,
      prefersReducedMotion: false,
      particleCount: 750,
      enableGlobe: true,
      dprCap: 1.5,
      enableCursorParticles: true,
      enableBackdropBlur: true,
    };
  }

  const isTouch =
    'ontouchstart' in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia('(pointer: coarse)').matches;

  const isMobile = window.innerWidth < 768 || isTouch;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Device hardware capability heuristics
  const logicalCores = navigator.hardwareConcurrency || 4;
  // @ts-expect-error deviceMemory is supported in Chromium browsers
  const deviceMemory = navigator.deviceMemory || 4;

  const isLowEnd = logicalCores <= 4 || deviceMemory <= 4 || isMobile || prefersReducedMotion;

  return {
    isLowEnd,
    isMobile,
    isTouch,
    prefersReducedMotion,
    particleCount: isLowEnd ? 450 : 750,
    enableGlobe: !isMobile && !prefersReducedMotion,
    dprCap: isLowEnd ? 1.0 : Math.min(window.devicePixelRatio || 1, 1.5),
    enableCursorParticles: !isTouch && !isLowEnd && !prefersReducedMotion,
    enableBackdropBlur: !isLowEnd,
  };
}
