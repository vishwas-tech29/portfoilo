"use client";

import { CardStack, CardStackItem } from "@/components/ui/card-stack";

const items: CardStackItem[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern shopping experience with seamless checkout",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    href: "#",
  },
  {
    id: 2,
    title: "Brand Identity System",
    description: "Complete visual identity for tech startup",
    imageSrc: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
    href: "#",
  },
  {
    id: 3,
    title: "Interactive Portfolio",
    description: "Award-winning portfolio with custom animations",
    imageSrc: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    href: "#",
  },
  {
    id: 4,
    title: "Mobile App Design",
    description: "Intuitive mobile experience for fitness tracking",
    imageSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    href: "#",
  },
  {
    id: 5,
    title: "Corporate Website",
    description: "Professional website for consulting firm",
    imageSrc: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
    href: "#",
  },
];

export default function CardStackDemoPage() {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-5xl p-8">
        <CardStack
          items={items}
          initialIndex={0}
          autoAdvance
          intervalMs={3000}
          pauseOnHover
          showDots
        />
      </div>
    </div>
  );
}