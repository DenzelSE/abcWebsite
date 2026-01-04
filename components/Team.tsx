"use client";

import React from "react";
import { teamImages } from "@/data";
import Image from "next/image";
import BlockchainBlocks from "./ui/blockchain-blocks";

export default function Carousel() {
  return (
    <div className="relative w-full overflow-hidden min-h-[200px] md:min-h-[400px]">
      <BlockchainBlocks className="h-full w-full" />
      
      {/* Giant Text Overlay - Mobile Optimized */}
      <div className="absolute inset-0 z-10 flex items-center justify-center md:justify-start md:ml-[50px] pointer-events-none py-8 md:py-[10vh] md:pt-[43vh]">
        <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-text opacity-90 drop-shadow-lg leading-tight text-center md:text-left px-4">
          {/* Add your text here */}
        </h2>
      </div>
      
      <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

      <div className="relative perspective-[400px] md:perspective-[800px] z-0 py-8 md:py-0">
        <div className="skewed-carousel animate-carousel-mobile md:animate-carousel">
          {[...teamImages, ...teamImages].map((img, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 mx-2 md:mx-3 w-[280px] h-[220px] md:w-[380px] md:h-[300px]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover rounded-lg md:rounded-xl"
                sizes="(max-width: 768px) 280px, 380px"
              />
            </div>
          ))}
        </div>
        <BlockchainBlocks className="h-full w-full" />
      </div>

      {/* Mobile-optimized CSS */}
      <style jsx>{`
        .skewed-carousel {
          display: flex;
          gap: 1rem;
        }
        
        .animate-carousel-mobile {
          animation: scroll-mobile 30s linear infinite;
        }
        
        .animate-carousel {
          animation: scroll 40s linear infinite;
        }
        
        @keyframes scroll-mobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - 1rem));
          }
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% - 1.5rem));
          }
        }
        
        .perspective-400 {
          perspective: 400px;
        }
        
        /* Pause animation on hover for better UX */
        .skewed-carousel:hover {
          animation-play-state: paused;
        }
        
        /* Mobile touch improvements */
        @media (max-width: 768px) {
          .skewed-carousel {
            gap: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}