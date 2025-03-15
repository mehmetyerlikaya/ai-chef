import { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, VolumeX, X } from 'lucide-react';

interface CookingModeProps {
  instructions: string[];
  onClose: () => void;
}

export const CookingMode = ({ instructions, onClose }: CookingModeProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [voiceEnabled, setVoiceEnabled] = useState(true);

  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = setInterval(() => {
        setTimeSpent((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    if (voiceEnabled && isPlaying) {
      const utterance = new SpeechSynthesisUtterance(instructions[currentStep]);
      speechSynthesis.speak(utterance);
    }
  }, [currentStep, voiceEnabled, isPlaying, instructions]);

  const handleNext = () => {
    if (currentStep < instructions.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-black/95 text-white z-50 flex flex-col">
      {/* Header */}
      <div className="p-6 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setVoiceEnabled(!voiceEnabled)}
            className="p-2 hover:bg-white/10 rounded-full"
          >
            {voiceEnabled ? <Volume2 /> : <VolumeX />}
          </button>
          <span className="text-lg">Cooking Mode</span>
        </div>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-white/10 rounded-full"
        >
          <X />
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="text-6xl mb-8">{currentStep + 1}/{instructions.length}</div>
        <div className="text-2xl text-center max-w-2xl mb-12">
          {instructions[currentStep]}
        </div>
        
        {/* Controls */}
        <div className="flex items-center gap-8">
          <button 
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="p-4 hover:bg-white/10 rounded-full disabled:opacity-50"
          >
            <SkipBack className="w-8 h-8" />
          </button>
          
          <button 
            onClick={togglePlay}
            className="p-6 bg-white/10 hover:bg-white/20 rounded-full"
          >
            {isPlaying ? 
              <Pause className="w-12 h-12" /> : 
              <Play className="w-12 h-12" />
            }
          </button>
          
          <button 
            onClick={handleNext}
            disabled={currentStep === instructions.length - 1}
            className="p-4 hover:bg-white/10 rounded-full disabled:opacity-50"
          >
            <SkipForward className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-white/10 flex justify-center">
        <div className="text-xl">{formatTime(timeSpent)}</div>
      </div>
    </div>
  );
};