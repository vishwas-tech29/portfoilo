import { GLSLHills } from "@/components/ui/glsl-hills";
import { BlurFade } from "@/components/ui/blur-fade";

export default function GLSLHillsDemo() {
  return (
    <section 
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[var(--background)]"
      data-cursor-hover
    >
      <GLSLHills />
      <div className="space-y-8 pointer-events-none z-10 text-center absolute max-w-4xl px-6">
        <BlurFade delay={0.2}>
          <h2 className="font-light text-5xl md:text-7xl lg:text-8xl tracking-tight text-[var(--foreground)]">
            <span className="italic text-4xl md:text-6xl lg:text-7xl font-thin text-[var(--primary)]">
              Creative Vision <br/> 
            </span>
            Meets Technology
          </h2>
        </BlurFade>
        <BlurFade delay={0.4}>
          <p className="text-sm md:text-base text-[var(--foreground)]/60 font-medium max-w-2xl mx-auto leading-relaxed">
            Where innovative design intersects with cutting-edge development, <br/>  
            creating digital experiences that push boundaries and inspire action.
          </p>
        </BlurFade>
        <BlurFade delay={0.6}>
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--foreground)]/40">
              Interactive Experience
            </span>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}