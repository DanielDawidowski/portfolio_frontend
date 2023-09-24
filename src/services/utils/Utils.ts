export const scrollToElement = (id: string, time: number): void => {
  const element = document.getElementById(id);
  if (element) {
    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition - 80;
    const startTime = performance.now();
    const duration = time; // 5 seconds in milliseconds

    const scrollAnimation = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      window.scrollTo(0, startPosition + distance * progress);

      if (progress < 1) {
        requestAnimationFrame(scrollAnimation);
      }
    };

    requestAnimationFrame(scrollAnimation);
  }
};
