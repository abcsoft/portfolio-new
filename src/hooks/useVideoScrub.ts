import { useRef, useEffect, useCallback, useState } from 'react';

interface UseVideoScrubOptions {
  sensitivity?: number;
  enabled?: boolean;
}

export function useVideoScrub(options: UseVideoScrubOptions = {}) {
  const { sensitivity = 0.8, enabled = true } = options;

  const videoRef = useRef<HTMLVideoElement>(null);
  const prevXRef = useRef<number | null>(null);
  const targetTimeRef = useRef<number>(0);
  const isSeekingRef = useRef<boolean>(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const performSeek = useCallback(() => {
    const video = videoRef.current;
    if (!video || isSeekingRef.current) return;

    if (Math.abs(video.currentTime - targetTimeRef.current) > 0.02) {
      isSeekingRef.current = true;
      video.currentTime = targetTimeRef.current;
    }
  }, []);

  const handleSeeked = useCallback(() => {
    isSeekingRef.current = false;
    const video = videoRef.current;
    if (video && Math.abs(video.currentTime - targetTimeRef.current) > 0.02) {
      performSeek();
    }
  }, [performSeek]);

  const handleLoadedMetadata = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      setVideoLoaded(true);
      setVideoError(false);
      targetTimeRef.current = video.currentTime;
    }
  }, []);

  const handleError = useCallback(() => {
    setVideoError(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    // Check if prefers-reduced-motion is active
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const shouldIgnoreEvent = (target: EventTarget | null) => {
      if (!target || !(target instanceof HTMLElement)) return false;
      const tag = target.tagName.toLowerCase();
      return (
        tag === 'input' ||
        tag === 'textarea' ||
        tag === 'select' ||
        target.isContentEditable ||
        target.closest('[role="dialog"]') !== null
      );
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (shouldIgnoreEvent(e.target)) {
        prevXRef.current = null;
        return;
      }

      const video = videoRef.current;
      if (!video || !video.duration || Number.isNaN(video.duration)) {
        prevXRef.current = e.clientX;
        return;
      }

      if (prevXRef.current === null) {
        prevXRef.current = e.clientX;
        return;
      }

      const delta = e.clientX - prevXRef.current;
      prevXRef.current = e.clientX;

      const timeOffset = (delta / window.innerWidth) * sensitivity * video.duration;
      targetTimeRef.current = Math.max(0, Math.min(video.duration, targetTimeRef.current + timeOffset));

      performSeek();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      if (shouldIgnoreEvent(e.target)) {
        prevXRef.current = null;
        return;
      }

      const clientX = e.touches[0].clientX;
      const video = videoRef.current;
      if (!video || !video.duration || Number.isNaN(video.duration)) {
        prevXRef.current = clientX;
        return;
      }

      if (prevXRef.current === null) {
        prevXRef.current = clientX;
        return;
      }

      const delta = clientX - prevXRef.current;
      prevXRef.current = clientX;

      const timeOffset = (delta / window.innerWidth) * sensitivity * video.duration;
      targetTimeRef.current = Math.max(0, Math.min(video.duration, targetTimeRef.current + timeOffset));

      performSeek();
    };

    const handleTouchEnd = () => {
      prevXRef.current = null;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [enabled, sensitivity, performSeek]);

  return {
    videoRef,
    handleSeeked,
    handleLoadedMetadata,
    handleError,
    videoLoaded,
    videoError,
  };
}
