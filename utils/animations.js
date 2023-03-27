export const inViewDefault = {
  initial: 'initial',
  whileInView: 'animate',
};
const customTransition = { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] };

export const fadeInUp = {
  initial: { y: 60, opacity: 0, transition: customTransition },
  animate: { y: 0, opacity: 1, transition: customTransition },
};

export const fadeInDown = {
  initial: { y: -60, opacity: 0, transition: customTransition },
  animate: { y: 0, opacity: 1, transition: customTransition },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const fadeInRight = {
  initial: { x: 60, opacity: 0, transition: customTransition },
  animate: { x: 0, opacity: 1, transition: customTransition },
};

export const fadeInLeft = {
  initial: { x: -60, opacity: 0, transition: customTransition },
  animate: { x: 0, opacity: 1, transition: customTransition },
};

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { ease: [0.6, -0.05, 0.01, 0.99] },
};
