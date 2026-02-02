import { useRef, useState, useEffect } from "react";
import apnaBanaLe from "@/assets/apna_bana_le.mp3";

const clamp = (val: number, min: number, max: number) => Math.max(min, Math.min(max, val));

const AudioPlayer = ({ volume = 0.6 }: { volume?: number }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUserInteracted, setIsUserInteracted] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = clamp(volume, 0, 1);
    }
  }, [volume]);

  // Try to autoplay after first user interaction
  useEffect(() => {
    const handleUserInteraction = () => {
      setIsUserInteracted(true);
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
      window.removeEventListener("pointerdown", handleUserInteraction);
    };
    window.addEventListener("pointerdown", handleUserInteraction);
    return () => window.removeEventListener("pointerdown", handleUserInteraction);
  }, [isPlaying]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-background/80 rounded-full shadow-lg px-3 py-2">
      <audio
        ref={audioRef}
        src={apnaBanaLe}
        loop
        preload="auto"
        // autoPlay is omitted due to browser restrictions
      />
      <button
        onClick={handlePlayPause}
        className="text-gold hover:text-yellow-400 focus:outline-none font-display text-lg"
        aria-label={isPlaying ? "Pause background music" : "Play background music"}
      >
        {isPlaying ? (
          <span title="Pause">&#x23F8; Mute</span>
        ) : (
          <span title="Play">&#x25B6; Play</span>
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
