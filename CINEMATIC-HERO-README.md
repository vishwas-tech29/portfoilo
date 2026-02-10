# Cinematic 3D Hero Section

A bold, cinematic 3D animated hero section for your personal portfolio that defines identity, not just skills.

## Features

### Visual Design
- **Stylized 3D Character**: Modern digital creator representation with minimal, intentional design
- **Premium Environment**: Dark, futuristic space with volumetric lighting and subtle particles
- **Cinematic Camera**: Slow push-in with shallow depth of field and dramatic shadows
- **Kinetic Typography**: Text animates as part of the scene with smooth motion sync

### Technical Implementation
- **React Three Fiber**: High-performance 3D rendering
- **Framer Motion**: Smooth animations and transitions
- **Post-processing Effects**: Bloom, vignette, and chromatic aberration
- **Responsive Design**: Optimized for all screen sizes
- **Performance**: 60fps target with optimized rendering

### Color Palette
- Deep blacks (#000000)
- Charcoal gray (#1a1a1a)
- Electric blue (#4a9eff)
- Cyber purple (#7c3aed)
- Soft cyan (#00ffaa)

## Components

### Main Components
- `cinematic-hero-3d.tsx` - Main hero section container
- `3d/scene-3d.tsx` - Lighting, particles, and environment
- `3d/character-3d.tsx` - Stylized 3D character with animations
- `3d/kinetic-text.tsx` - Animated typography overlay
- `3d/camera-rig.tsx` - Cinematic camera movements
- `3d/loading-screen.tsx` - Elegant loading experience

## Character Design

The character features:
- Minimalist geometric forms (spheres, capsules)
- Metallic materials with emissive accents
- Subtle breathing and head turn animations
- Energy field with transmission material
- Floating geometric accents

## Animation Timeline

1. **0-1s**: Loading screen with progress bar
2. **1-2s**: Main text animates letter by letter
3. **2-3s**: Role badges appear with stagger
4. **3-4s**: Manifesto tagline fades in
5. **Continuous**: Character breathing, camera movement, particle drift

## Customization

### Easy Configuration
All major settings are centralized in `src/config/hero-config.ts` for easy customization:

```typescript
export const heroConfig = {
  // Text Content
  text: {
    mainStatement: "I build digital experiences",
    roles: ["Designer", "Developer", "AI Thinker"],
    manifesto: "Not just a header. A manifesto."
  },

  // Color Palette
  colors: {
    primary: "#4a9eff",      // Electric blue
    secondary: "#7c3aed",    // Cyber purple
    accent: "#00ffaa",       // Soft cyan
    background: "#000000",   // Deep black
    characterBase: "#1a1a1a" // Charcoal gray
  },

  // Animation Timing (in milliseconds)
  timing: {
    loadingDuration: 2000,
    textDelay: 1000,
    textStagger: 30,
    roleDelay: 2000,
    roleStagger: 150,
    manifestoDelay: 3500,
    scrollIndicatorDelay: 3000
  },

  // Camera, Character, Lighting, Particles, etc.
  // See full config file for all options
}
```

### Change Text Content
Edit `src/config/hero-config.ts`:
```typescript
text: {
  mainStatement: "Your main statement here",
  roles: ["Your Role 1", "Your Role 2", "Your Role 3"],
  manifesto: "Your manifesto tagline"
}
```

### Adjust Colors
Modify the color scheme:
```typescript
colors: {
  primary: "#your-color",
  secondary: "#your-color",
  accent: "#your-color"
}
```

### Tune Animation Speed
Control animation timing:
```typescript
timing: {
  textDelay: 500,      // Faster text appearance
  textStagger: 20,     // Faster letter animation
  roleDelay: 1500      // Roles appear sooner
}
```

### Camera Behavior
Tune camera movement in `camera-rig.tsx`:
```typescript
const targetZ = 8 - Math.min(t * 0.15, 2) // Adjust push-in speed
```

### Character Animation
Modify breathing and movement in `character-3d.tsx`:
```typescript
headRef.current.rotation.y = Math.sin(t * 0.3) * 0.1 // Head turn speed
```

## Performance Optimization

- Uses `dpr={[1, 2]}` for adaptive pixel ratio
- Suspense boundaries for progressive loading
- Optimized geometry with appropriate segment counts
- Post-processing effects balanced for performance

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (WebGL 2.0)
- Mobile: Optimized with reduced effects

## Dependencies

```json
{
  "@react-three/fiber": "^8.x",
  "@react-three/drei": "^9.x",
  "@react-three/postprocessing": "^2.x",
  "three": "^0.182.0",
  "framer-motion": "^12.x"
}
```

## Usage

The component is already integrated into your main page:

```tsx
import { CinematicHero3D } from '@/components/cinematic-hero-3d'

export default function Home() {
  return (
    <div>
      <CinematicHero3D />
      {/* Other sections */}
    </div>
  )
}
```

## Future Enhancements

Potential additions:
- Custom 3D model import (GLTF/GLB)
- Interactive mouse tracking
- Audio-reactive animations
- Multiple character poses
- Particle system variations
- Advanced shader materials

## Inspiration

This hero section embodies:
- Apple-level polish and attention to detail
- 2026 aesthetic with futuristic elements
- Personal manifesto approach vs traditional header
- Bold, intelligent, future-ready mood

---

**Note**: This is a personal manifesto, not just a website header. Every element is intentional and contributes to defining your identity as a digital creator.


## Versions

### Standard Version (Default)
The standard version features autonomous character animations with cinematic camera movements.

```tsx
import { CinematicHero3D } from '@/components/cinematic-hero-3d'
```

### Interactive Version
The interactive version adds mouse tracking - the character follows your cursor movement for a more engaging experience.

```tsx
import { CinematicHeroInteractive } from '@/components/cinematic-hero-interactive'
```

To switch versions, simply change the import in `src/app/page.tsx`:

```tsx
// Standard (current)
import { CinematicHero3D } from '@/components/cinematic-hero-3d'

// OR Interactive
import { CinematicHeroInteractive } from '@/components/cinematic-hero-interactive'

export default function Home() {
  return (
    <div className="min-h-screen">
      <CinematicHero3D /> {/* or <CinematicHeroInteractive /> */}
      {/* Other sections */}
    </div>
  )
}
```

## Testing

To see your new hero section:

1. Start the development server:
```bash
npm run dev
```

2. Open your browser to `http://localhost:3000`

3. You should see:
   - Loading screen with progress bar
   - 3D character materializing
   - Kinetic text animation
   - Smooth camera movements
   - Particle effects and lighting

## Troubleshooting

### Performance Issues
- Reduce `dpr` in Canvas: `dpr={[1, 1]}`
- Disable post-processing effects in `scene-3d.tsx`
- Lower particle count in Sparkles component

### Character Not Visible
- Check browser console for WebGL errors
- Ensure Three.js dependencies are installed
- Try refreshing the page

### Text Not Animating
- Verify Framer Motion is installed
- Check browser console for errors
- Ensure component is client-side (`"use client"`)

### Loading Screen Stuck
- Check network tab for asset loading
- Verify all imports are correct
- Clear browser cache and reload
