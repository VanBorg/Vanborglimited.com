"use client";

// Function to create animation props for different effects
export function slideUp(delay = 0, duration = 0.5) {
  return {
    style: {
      opacity: 0,
      transform: "translateY(20px)",
      animation: `slideUpAnimation ${duration}s ease-out forwards ${delay}s`,
    },
    className: "animate-slide-up",
  };
}

export function fadeIn(delay = 0, duration = 0.5) {
  return {
    style: {
      opacity: 0,
      animation: `fadeInAnimation ${duration}s ease-out forwards ${delay}s`,
    },
    className: "animate-fade-in",
  };
}

export function scaleIn(delay = 0, duration = 0.5) {
  return {
    style: {
      opacity: 0,
      transform: "scale(0.95)",
      animation: `scaleInAnimation ${duration}s ease-out forwards ${delay}s`,
    },
    className: "animate-scale-in",
  };
}

export function slideLeft(delay = 0, duration = 0.5) {
  return {
    style: {
      opacity: 0,
      transform: "translateX(20px)",
      animation: `slideLeftAnimation ${duration}s ease-out forwards ${delay}s`,
    },
    className: "animate-slide-left",
  };
}

export function slideRight(delay = 0, duration = 0.5) {
  return {
    style: {
      opacity: 0,
      transform: "translateX(-20px)",
      animation: `slideRightAnimation ${duration}s ease-out forwards ${delay}s`,
    },
    className: "animate-slide-right",
  };
}

// Hover animations
export function pulseOnHover() {
  return {
    className: "hover:animate-pulse",
  };
}

export function scaleOnHover() {
  return {
    className: "transition-transform duration-300 hover:scale-105",
  };
}

export function glowOnHover(color = "rgba(255, 255, 255, 0.2)") {
  return {
    className: "transition-shadow duration-300 hover:shadow-glow",
    style: {
      "--glow-color": color,
    },
  };
}

// Export a combined set of animations
export const animations = {
  slideUp,
  fadeIn,
  scaleIn,
  slideLeft,
  slideRight,
  pulseOnHover,
  scaleOnHover,
  glowOnHover,
};

export default animations;