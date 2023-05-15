export const inViewProps = {
  initial: 'initial',
  whileInView: 'animate',
  viewport: { once: true, amount: 0.3 },
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
  initial: { opacity: 0, transition: customTransition },
  animate: { opacity: 1, transition: customTransition },
};

export const fadeInRight = {
  initial: { x: 60, opacity: 0, transition: customTransition },
  animate: { x: 0, opacity: 1, transition: customTransition },
};

export const fadeInLeft = {
  initial: { x: -60, opacity: 0, transition: customTransition },
  animate: { x: 0, opacity: 1, transition: customTransition },
};

export const fadeInScale = {
  initial: { opacity: 0, scale: 0, transition: customTransition },
  animate: { opacity: 1, scale: 1, transition: customTransition },
};

export const filterAnimation = {
  initial: { opacity: 0, transition: customTransition },
  animate: { opacity: 1, transition: customTransition },
  exit: { opacity: 0, transition: customTransition },
};

export const moveUpOnHover = {
  y: -5,
  transition: { ease: [0.6, -0.05, 0.01, 0.99] },
};

export const staggerChildren = {
  animate: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

export const navbarStagger = {
  animate: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.03,
    },
  },
};
