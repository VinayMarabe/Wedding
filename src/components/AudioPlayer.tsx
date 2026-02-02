import { useRef, useState, useEffect } from "react";
import apnaBanaLe from "@/assets/apna_bana_le.mp3";

const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val));


const AudioPlayer = ({ volume = 0.6 }: { volume?: number }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isUserInteracted, setIsUserInteracted] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = clamp(volume, 0, 1);
    }
  }, [volume]);

  // Autoplay after first user interaction
  useEffect(() => {
    const handleUserInteraction = () => {
      setIsUserInteracted(true);
      setShouldPlay(true);
      window.removeEventListener("pointerdown", handleUserInteraction);
    };
    window.addEventListener("pointerdown", handleUserInteraction);
    return () => window.removeEventListener("pointerdown", handleUserInteraction);
  }, []);

  // Pause when tab is hidden, play when visible
  useEffect(() => {
    const handleVisibility = () => {
      if (!audioRef.current) return;
      if (document.hidden) {
        audioRef.current.pause();
      } else if (isUserInteracted && shouldPlay) {
        audioRef.current.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [isUserInteracted, shouldPlay]);

  // Play/pause based on shouldPlay
  useEffect(() => {
    if (!audioRef.current) return;
    if (isUserInteracted && shouldPlay && !document.hidden) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isUserInteracted, shouldPlay]);

  return (
    <audio
      ref={audioRef}
      src={apnaBanaLe}
      loop
      preload="auto"
      // autoPlay is omitted due to browser restrictions
      style={{ display: "none" }}
    />
  );
};

export default AudioPlayer;
