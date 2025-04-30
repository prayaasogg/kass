import React, { useState, useEffect, useRef } from 'react';
import { Music, Pause, Volume2 } from 'lucide-react';
import { Howl } from 'howler';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    // Soft emotional piano music (royalty-free example)
    soundRef.current = new Howl({
      src: ['https://assets.mixkit.co/music/preview/mixkit-a-very-happy-christmas-897.mp3'],
      loop: true,
      volume: volume,
      html5: true,
    });

    return () => {
      if (soundRef.current) {
        soundRef.current.stop();
      }
    };
  }, []);

  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.volume(volume);
    }
  }, [volume]);

  const togglePlay = () => {
    if (!soundRef.current) return;
    
    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 paper-texture rounded-full p-3 flex items-center gap-2 shadow-lg">
      <button 
        onClick={togglePlay}
        className="rounded-full bg-primary p-2 hover:bg-accent transition-colors duration-300"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Pause size={18} className="text-white" />
        ) : (
          <Music size={18} className="text-white" />
        )}
      </button>
      
      <div className="flex items-center gap-2 px-2">
        <Volume2 size={16} className="text-text-light" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-20 h-2 accent-secondary"
        />
      </div>
    </div>
  );
};

export default MusicPlayer;