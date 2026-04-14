import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Play, Pause, Volume2, X } from 'lucide-react';
import { Howl } from 'howler';

const MusicPlayer = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const soundRef = useRef(null);

  const track = { 
    title: 'Until I Found You', 
    artist: 'Stephen Sanchez', 
    url: '/Until_I_Found_You.mp3'
  };

  useEffect(() => {
    // Initialize Howler
    soundRef.current = new Howl({
      src: [track.url],
      html5: true, // Use HTML5 Audio for streaming large files
      volume: volume / 100,
      onload: () => {
        setDuration(soundRef.current.duration());
        setIsLoading(false);
      },
      onplay: () => {
        setIsPlaying(true);
        setIsLoading(false);
      },
      onpause: () => {
        setIsPlaying(false);
      },
      onend: () => {
        setIsPlaying(false);
        setCurrentTime(0);
      },
      onloaderror: () => {
        setIsLoading(false);
        console.error("Audio load error");
      },
      onplayerror: () => {
        setIsLoading(false);
        console.error("Audio play error");
      }
    });

    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
    };
  }, []);

  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.volume(volume / 100);
    }
  }, [volume]);

  // Update current time continuously while playing
  useEffect(() => {
    let animationFrameId;
    
    const updateTime = () => {
      if (isPlaying && soundRef.current) {
        setCurrentTime(soundRef.current.seek() || 0);
        animationFrameId = requestAnimationFrame(updateTime);
      }
    };

    if (isPlaying) {
      animationFrameId = requestAnimationFrame(updateTime);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPlaying]);

  const handlePlayPause = () => {
    if (!soundRef.current) return;

    if (isPlaying) {
      soundRef.current.pause();
    } else {
      setIsLoading(true);
      soundRef.current.play();
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e) => {
    if (soundRef.current && duration > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      const seekTime = percent * duration;
      soundRef.current.seek(seekTime);
      setCurrentTime(seekTime);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-24 right-4 w-80 bg-dark-secondary border border-dark-border rounded-xl shadow-2xl overflow-hidden z-50"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-dark-border">
          <div className="flex items-center gap-2">
            <Music size={16} className="text-purple-400" />
            <span className="text-sm font-medium text-white">Now Playing</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-dark-border rounded transition-colors"
          >
            <X size={16} className="text-gray-400" />
          </button>
        </div>

        {/* Track Info */}
        <div className="p-4">
          <div className="mb-4">
            <div className="w-full h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden">
              <Music size={48} className="text-white/80" />
              {isPlaying && (
                <motion.div
                  className="absolute inset-0 bg-white/10"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </div>
            <h3 className="text-white font-medium text-sm mb-1">{track.title}</h3>
            <p className="text-gray-400 text-xs">{track.artist}</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-4">
            <div 
              className="h-1 bg-dark-border rounded-full overflow-hidden cursor-pointer"
              onClick={handleSeek}
            >
              <div 
                className="h-full bg-purple-500 transition-all"
                style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <button
              onClick={handlePlayPause}
              disabled={isLoading}
              className="p-4 bg-purple-600 hover:bg-purple-500 rounded-full transition-colors disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : isPlaying ? (
                <Pause size={24} className="text-white" />
              ) : (
                <Play size={24} className="text-white ml-0.5" />
              )}
            </button>
          </div>

          {/* Volume */}
          <div className="flex items-center gap-3">
            <Volume2 size={16} className="text-gray-400" />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="flex-1 h-1 bg-dark-border rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #8b5cf6 0%, #8b5cf6 ${volume}%, #1a1a1a ${volume}%, #1a1a1a 100%)`,
              }}
            />
            <span className="text-xs text-gray-500 w-8">{volume}%</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MusicPlayer;
