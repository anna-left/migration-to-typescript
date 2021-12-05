function scrollTo(to: number, duration = 700) {
  const element = document.scrollingElement || document.documentElement,
    start = element.scrollTop,
    change = to - start,
    startDate = +new Date(),
    easeInOutQuad = function (t: number, b: number, c: number, d: number) {
      let time = t / (d / 2);
      if (time < 1) return (c / 2) * time * time + b;
      time--;
      return (-c / 2) * (time * (time - 2) - 1) + b;
    },
    animateScroll = function () {
      const currentDate = +new Date();
      const currentTime = currentDate - startDate;
      element.scrollTop = easeInOutQuad(currentTime, start, change, duration);
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        element.scrollTop = to;
      }
    };
  animateScroll();
}

export default scrollTo;
