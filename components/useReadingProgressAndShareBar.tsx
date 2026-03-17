import { useEffect } from 'react';

export function useReadingProgressAndShareBar() {
  useEffect(() => {
    // Reading progress bar (gentle update)
    let progressRaf: number | null = null;
    const updateProgress = () => {
      const bar = document.getElementById('readingProgress');
      if (!bar) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${progress}%`;
      progressRaf = null;
    };

    // Show/hide share bar
    const toggleShareBar = () => {
      const shareBar = document.getElementById('shareBar');
      const storyStart = document.getElementById('storyStart');
      if (!shareBar || !storyStart) return;
      const startOffset = storyStart.getBoundingClientRect().top + window.scrollY;
      if (window.scrollY > startOffset - 200) {
        shareBar.classList.add('visible');
      } else {
        shareBar.classList.remove('visible');
      }
    };

    const onScroll = () => {
      if (!progressRaf) {
        progressRaf = window.requestAnimationFrame(updateProgress);
      }
      toggleShareBar();
    };

    // Initial update
    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (progressRaf) window.cancelAnimationFrame(progressRaf);
    };
  }, []);
}
