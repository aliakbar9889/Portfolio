

"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <section id="testimonials">
    <div className='text-white flex flex-col items-center bg-gray-700 py-32 min-h-screen'>  
      <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-neutral-100 to-neutral-500 mb-10">
        TESTIMONIALS
      </h2>
      <p className="text-white italic mb-5 text-center">
        Satisfied clients share their experiences with our services.
      </p>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "This service exceeded our expectations! The team was professional, efficient, and highly skilled. Highly recommended!",
    name: "Sarah Johnson",
    title: "CEO, Tech Innovations",
  },
  {
    quote:
      "Fantastic experience! Their attention to detail and commitment to quality made all the difference. Would definitely work with them again.",
    name: "Michael Lee",
    title: "Project Manager, Creative Solutions",
  },
  {
    quote: "Reliable, trustworthy, and highly talented. Our project was completed on time and surpassed our expectations.",
    name: "Emily Davis",
    title: "Founder, Startup Hub",
  },
  {
    quote:
      "The customer service was outstanding! Every concern was addressed promptly, and the final result was outstanding.",
    name: "James Carter",
    title: "COO, Enterprise Corp",
  },
  {
    quote:
      "Exceptional work! Their expertise and dedication made a significant impact on our business. A pleasure to collaborate with.",
    name: "Olivia Martinez",
    title: "Marketing Director, Brand Boosters",
  },
];