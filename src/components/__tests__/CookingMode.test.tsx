import { describe, it, beforeEach, vi, afterEach, expect } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { CookingMode } from '../CookingMode';

describe('CookingMode', () => {
  const mockInstructions = [
    'Step 1: Do this',
    'Step 2: Do that',
    'Step 3: Finally this',
  ];
  const mockOnClose = vi.fn();

  beforeEach(() => {
    // Mock SpeechSynthesis API
    Object.defineProperty(window, 'speechSynthesis', {
      value: {
        speak: vi.fn(),
      },
    });
    
    // Reset timer mocks
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
    mockOnClose.mockClear();
  });

  it('renders initial step correctly', () => {
    render(<CookingMode instructions={mockInstructions} onClose={mockOnClose} />);
    
    expect(screen.getByText('1/3')).toBeInTheDocument();
    expect(screen.getByText(mockInstructions[0])).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /play/i })).toBeInTheDocument();
  });

  it('navigates through steps correctly', () => {
    render(<CookingMode instructions={mockInstructions} onClose={mockOnClose} />);
    
    const nextButton = screen.getByRole('button', { name: /skip forward/i });
    const prevButton = screen.getByRole('button', { name: /skip back/i });
    
    // Test forward navigation
    fireEvent.click(nextButton);
    expect(screen.getByText('2/3')).toBeInTheDocument();
    expect(screen.getByText(mockInstructions[1])).toBeInTheDocument();
    
    // Test backward navigation
    fireEvent.click(prevButton);
    expect(screen.getByText('1/3')).toBeInTheDocument();
    expect(screen.getByText(mockInstructions[0])).toBeInTheDocument();
  });

  it('disables navigation buttons appropriately', () => {
    render(<CookingMode instructions={mockInstructions} onClose={mockOnClose} />);
    
    const nextButton = screen.getByRole('button', { name: /skip forward/i });
    const prevButton = screen.getByRole('button', { name: /skip back/i });
    
    // Initially, prev button should be disabled
    expect(prevButton).toHaveClass('disabled:opacity-50');
    
    // Go to last step
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    
    // At last step, next button should be disabled
    expect(nextButton).toHaveClass('disabled:opacity-50');
  });

  it('toggles play/pause state and updates timer', () => {
    render(<CookingMode instructions={mockInstructions} onClose={mockOnClose} />);
    
    const playButton = screen.getByRole('button', { name: /play|pause/i });
    
    // Start playing
    fireEvent.click(playButton);
    expect(screen.getByRole('button', { name: /pause/i })).toBeInTheDocument();
    
    // Check timer after 5 seconds
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(screen.getByText('0:05')).toBeInTheDocument();
    
    // Pause
    fireEvent.click(playButton);
    expect(screen.getByRole('button', { name: /play/i })).toBeInTheDocument();
    
    // Timer should not advance while paused
    act(() => {
      vi.advanceTimersByTime(5000);
    });
    expect(screen.getByText('0:05')).toBeInTheDocument();
  });

  it('toggles voice control and triggers speech synthesis', () => {
    render(<CookingMode instructions={mockInstructions} onClose={mockOnClose} />);
    
    const voiceButton = screen.getByRole('button', { name: /volume/i });
    const playButton = screen.getByRole('button', { name: /play/i });
    
    // Start playing with voice enabled
    fireEvent.click(playButton);
    expect(window.speechSynthesis.speak).toHaveBeenCalledWith(
      expect.any(SpeechSynthesisUtterance)
    );
    
    // Disable voice
    fireEvent.click(voiceButton);
    
    // Go to next step
    const nextButton = screen.getByRole('button', { name: /skip forward/i });
    fireEvent.click(nextButton);
    
    // Speech synthesis should not be called again
    expect(window.speechSynthesis.speak).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when close button is clicked', () => {
    render(<CookingMode instructions={mockInstructions} onClose={mockOnClose} />);
    
    const closeButton = screen.getByRole('button', { name: /x/i });
    fireEvent.click(closeButton);
    
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});