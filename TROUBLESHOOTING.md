# Troubleshooting Guide

## React 19 + Three.js Compatibility

### Error: "Cannot read properties of null (reading 'useInsertionEffect')"

This error occurs when React Three Fiber tries to use React's `useInsertionEffect` hook before React is fully initialized, especially with React 19 and the React Compiler.

### Solutions Applied

1. **Client-Side Rendering Check**
   - Added `useState` and `useEffect` to ensure Canvas only renders after client-side hydration
   - The 3D scene now waits for `isClient` to be true before rendering

2. **React Compiler Configuration**
   - Changed from `reactCompiler: true` to `reactCompiler: { compilationMode: 'annotation' }`
   - This prevents automatic compilation of all components
   - Only components with `"use memo"` directive will be compiled

3. **Opt-out Directives**
   - Added `"use no memo"` to all 3D components
   - This tells React Compiler to skip optimization for Three.js components
   - Prevents conflicts with Three.js's internal React usage

### Files Modified

```
next.config.ts                          - React Compiler config
src/components/cinematic-hero-3d.tsx    - Client-side check
src/components/cinematic-hero-interactive.tsx - Client-side check
src/components/3d/scene-3d.tsx          - "use no memo" directive
src/components/3d/character-3d.tsx      - "use no memo" directive
src/components/3d/interactive-character.tsx - "use no memo" directive
src/components/3d/camera-rig.tsx        - "use no memo" directive
```

## Other Common Issues

### WebGL Not Supported
**Error**: "WebGL is not supported"
**Solution**: 
- Check browser compatibility (Chrome, Firefox, Safari, Edge)
- Update graphics drivers
- Enable hardware acceleration in browser settings

### Performance Issues
**Symptoms**: Low FPS, stuttering, lag
**Solutions**:
1. Reduce device pixel ratio:
   ```typescript
   // src/config/hero-config.ts
   performance: {
     dpr: [1, 1]  // Lower quality but better performance
   }
   ```

2. Reduce particle count:
   ```typescript
   particles: {
     count: 50  // Default is 100
   }
   ```

3. Disable post-processing:
   - Comment out `<EffectComposer>` in `scene-3d.tsx`

### Loading Screen Stuck
**Symptoms**: Progress bar doesn't complete
**Solutions**:
1. Check browser console for errors
2. Clear browser cache
3. Verify all dependencies are installed:
   ```bash
   npm install
   ```

### Character Not Visible
**Symptoms**: Black screen with text only
**Solutions**:
1. Check lighting setup in `scene-3d.tsx`
2. Verify camera position in `camera-rig.tsx`
3. Check browser console for Three.js errors

### Text Not Animating
**Symptoms**: Text appears instantly without animation
**Solutions**:
1. Verify Framer Motion is installed
2. Check timing configuration in `hero-config.ts`
3. Ensure component has `"use client"` directive

## Development Tips

### Hot Reload Issues
If changes don't appear:
1. Stop dev server (Ctrl+C)
2. Delete `.next` folder
3. Restart: `npm run dev`

### TypeScript Errors
If you see type errors:
```bash
npm run build
```
This will show all TypeScript errors at once.

### Testing on Mobile
1. Find your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. Access from mobile: `http://YOUR_IP:3000`
3. Ensure devices are on same network

## Browser Compatibility

### Recommended
- Chrome 90+ ✅
- Edge 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅

### Limited Support
- Mobile browsers (reduced effects)
- Older browsers (may need polyfills)

## Performance Benchmarks

### Target Performance
- Desktop: 60 FPS
- Mobile: 30-60 FPS
- Load time: < 3 seconds

### If Below Target
1. Check GPU usage in browser DevTools
2. Reduce geometry complexity
3. Lower texture quality
4. Disable shadows

## Getting Help

### Before Asking for Help
1. Check browser console for errors
2. Verify all dependencies are installed
3. Try in different browser
4. Clear cache and hard reload (Ctrl+Shift+R)

### Useful Debug Info
When reporting issues, include:
- Browser and version
- Operating system
- Error messages from console
- Network tab (for loading issues)
- GPU info (chrome://gpu)

## Quick Fixes

### Reset to Default
If everything breaks:
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Clear Next.js cache
rm -rf .next

# Restart
npm run dev
```

### Disable 3D Temporarily
To test if issue is 3D-related:
```tsx
// src/app/page.tsx
// Comment out the 3D hero
// <CinematicHero3D />

// Use old hero temporarily
import { Hero } from '@/components/hero'
<Hero />
```

## Known Limitations

1. **React Compiler**: Not fully compatible with Three.js
   - Solution: Use annotation mode
   
2. **Server-Side Rendering**: Canvas must render client-side only
   - Solution: Client-side check implemented

3. **Mobile Performance**: May be slower on older devices
   - Solution: Reduce quality settings in config

4. **Safari**: Occasional rendering glitches
   - Solution: Usually fixed by page refresh

## Updates

### Keeping Dependencies Updated
```bash
# Check for updates
npm outdated

# Update Three.js packages
npm update @react-three/fiber @react-three/drei @react-three/postprocessing three

# Update all packages (careful!)
npm update
```

### Breaking Changes
When updating major versions:
1. Check migration guides
2. Test thoroughly
3. Keep backup of working version
