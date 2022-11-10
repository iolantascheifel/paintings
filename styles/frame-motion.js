// initial: defines initial state of animation or stating point.
// animate: defines animation
// exit: defines animation when component exits

export const easing = [0.6, -0.05, 0.01, 0.99];

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.8, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};

export const fadeInLeft = {
  initial: {
    x: -60,
    opacity: 0,
    transition: { duration: 0.8, ease: easing },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easing,
    },
  },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
