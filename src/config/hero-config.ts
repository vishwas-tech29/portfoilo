/**
 * Cinematic Hero Configuration
 * Customize your hero section here
 */

export const heroConfig = {
  // Text Content
  text: {
    mainStatement: "I build what's next.",
    roles: ["Designer", "Developer", "AI Thinker"],
    manifesto: "I'm early. I'm focused. I'm coming."
  },

  // Color Palette - Restrained and disciplined
  colors: {
    primary: "#4a7c9e",      // Cool blue (restrained)
    secondary: "#6b5b95",    // Violet (subtle)
    accent: "#8a9ba8",       // Muted grey-blue
    background: "#000000",   // Deep black
    characterBase: "#0a0a0a" // Charcoal black
  },

  // Animation Timing
  timing: {
    loadingDuration: 2500,        // Loading screen duration (ms)
    textDelay: 1500,              // Delay before text animation starts (ms)
    textStagger: 40,              // Delay between each letter (ms)
    roleDelay: 3000,              // Delay before roles appear (ms)
    roleStagger: 200,             // Delay between each role (ms)
    manifestoDelay: 5000,         // Delay before manifesto appears (ms)
    scrollIndicatorDelay: 6000    // Delay before scroll indicator appears (ms)
  },

  // Camera Settings - Slow and confident
  camera: {
    initialPosition: [0, 0, 12] as [number, number, number],
    fov: 50,
    pushInSpeed: 0.08,      // Slower, more deliberate
    pushInDistance: 5,      // Longer journey
    swayAmount: 0.15,       // Minimal sway
    swaySpeed: 0.1          // Very slow
  },

  // Character Settings - Minimal movement
  character: {
    breathingSpeed: 0.6,    // Slower breathing
    breathingAmount: 0.015, // Subtle movement
    headTurnSpeed: 0.15,    // Slow, thoughtful
    headTurnAmount: 0.08,   // Minimal turn
    floatSpeed: 0.3,        // Gentle float
    floatAmount: 0.1        // Barely noticeable
  },

  // Lighting - Minimal and cinematic
  lighting: {
    ambientIntensity: 0.05,
    keyLight: {
      position: [0, 8, 2] as [number, number, number],
      intensity: 1.2,
      color: "#ffffff"
    },
    fillLight: {
      position: [-3, 2, -4] as [number, number, number],
      intensity: 0.4,
      color: "#4a7c9e"
    },
    backLight: {
      position: [3, 1, -5] as [number, number, number],
      intensity: 0.3,
      color: "#6b5b95"
    }
  },

  // Particles - Minimal, sense of scale
  particles: {
    count: 40,
    scale: 20,
    size: 1.5,
    speed: 0.1,
    opacity: 0.15
  },

  // Post Processing
  postProcessing: {
    bloom: {
      intensity: 0.3,
      threshold: 0.4,
      smoothing: 0.9
    },
    vignette: {
      offset: 0.2,
      darkness: 0.9
    },
    depthOfField: {
      focusDistance: 0.02,
      focalLength: 0.05,
      bokehScale: 1
    }
  },

  // Performance
  performance: {
    dpr: [1, 2] as [number, number],
    antialias: true,
    powerPreference: "high-performance" as const
  }
}

export type HeroConfig = typeof heroConfig
