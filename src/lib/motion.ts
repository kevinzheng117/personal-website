// Shared motion constants for consistency across animations

export const motionConfig = {
  // Durations (in seconds)
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    pageLoad: 0.6,
  },
  
  // Easing functions
  easing: {
    default: [0.4, 0, 0.2, 1], // ease-in-out
    easeOut: [0, 0, 0.2, 1],
    easeIn: [0.4, 0, 1, 1],
    spring: [0.34, 1.56, 0.64, 1],
  },
  
  // Stagger delays (in seconds)
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
  
  // Page load animation delays
  pageLoad: {
    avatar: 0,
    headline: 0.1,
    bio: 0.2,
    links: 0.3,
    tabs: 0.4,
    content: 0.5,
  },
};

