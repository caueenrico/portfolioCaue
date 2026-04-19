import { useEffect, useCallback } from 'react';

const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

function playChiptune() {
  try {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  } catch {
    // Web Audio not available
  }
}

function playKonamiSound() {
  try {
    const ctx = new AudioContext();
    const notes = [523, 659, 784, 1047];
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.06, ctx.currentTime + i * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.1 + 0.15);
      osc.connect(gain).connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.1);
      osc.stop(ctx.currentTime + i * 0.1 + 0.15);
    });
  } catch {
    // Web Audio not available
  }
}

export function useEasterEggs() {
  // Konami code detector
  useEffect(() => {
    const buffer: string[] = [];

    function handleKey(e: KeyboardEvent) {
      buffer.push(e.key);
      if (buffer.length > KONAMI.length) buffer.shift();

      if (buffer.length === KONAMI.length && buffer.every((k, i) => k === KONAMI[i])) {
        buffer.length = 0;
        activatePixelDimension();
      }
    }

    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  // Shift key pixel cursor
  useEffect(() => {
    function handleDown(e: KeyboardEvent) {
      if (e.key === 'Shift') document.documentElement.classList.add('pixel-cursor');
    }
    function handleUp(e: KeyboardEvent) {
      if (e.key === 'Shift') document.documentElement.classList.remove('pixel-cursor');
    }

    document.addEventListener('keydown', handleDown);
    document.addEventListener('keyup', handleUp);
    return () => {
      document.removeEventListener('keydown', handleDown);
      document.removeEventListener('keyup', handleUp);
      document.documentElement.classList.remove('pixel-cursor');
    };
  }, []);

  const handleLogoClick = useCallback(() => {
    playChiptune();
  }, []);

  return { handleLogoClick };
}

function activatePixelDimension() {
  playKonamiSound();
  document.documentElement.classList.add('pixel-dimension');

  // Screen shake
  document.body.style.animation = 'none';
  document.body.offsetHeight; // force reflow
  document.body.style.animation = 'shake 0.2s ease';

  if (!document.getElementById('shake-style')) {
    const style = document.createElement('style');
    style.id = 'shake-style';
    style.textContent = `
      @keyframes shake {
        0%, 100% { transform: translate(0); }
        25% { transform: translate(-3px, 2px); }
        50% { transform: translate(2px, -3px); }
        75% { transform: translate(-2px, 1px); }
      }
    `;
    document.head.appendChild(style);
  }

  setTimeout(() => {
    document.documentElement.classList.remove('pixel-dimension');
    document.body.style.animation = '';
  }, 10000);
}
