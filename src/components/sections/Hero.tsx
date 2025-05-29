import Link from 'next/link'
import { Button } from "@src/components/ui/button";

export function Hero() {
  return (
   <section data-editor-tag="wOQ1B8k4Fl"  id="welcome-to-wonderland" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background pattern element - subtle playing card pattern */}
     <div data-editor-tag="GDWp9EQpmq"  className="absolute inset-0 opacity-5 bg-pattern-wonderland"></div>
      
     <div data-editor-tag="4wuRrAAkb9"  className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
       <div data-editor-tag="AuEX7U4Sgg"  className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          {/* Text content */}
         <div data-editor-tag="Mlu2MS8rLb"  className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
           <div data-editor-tag="2V2TzCxY4t"  className="space-y-4">
             <div data-editor-tag="Tpv4OmNJcl"  className="inline-block rounded-lg bg-[#F5D76E]/20 px-3 py-1 text-sm text-[#8E6E53]">
                Welcome to Wonderland
              </div>
             <h1 data-editor-tag="tMU9QT5hKD"  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#333333]">
                Meet WonderBear:<br/>
               <span data-editor-tag="E71a6H3CHH"  className="text-[#4A89DC]">Where Curiosity Leads to Cuddles</span>
              </h1>
             <p data-editor-tag="njEEqlNz6n"  className="mx-auto md:mx-0 max-w-[600px] text-foreground/70 md:text-xl">
                A teddy bear companion inspired by Alice's adventures in Wonderland
              </p>
             <p data-editor-tag="TDJUVidaVf"  className="mx-auto md:mx-0 max-w-[600px] text-foreground/70">
                Step through the looking glass and discover WonderBear, a magical teddy bear that brings the whimsy of Wonderland into your arms. Handcrafted with curious details from Lewis Carroll's timeless tale.
              </p>
            </div>
           <div data-editor-tag="CoFEh3FAnD"  className="flex flex-col sm:flex-row gap-4">
             <Button data-editor-tag="SE2uwUmI59"  asChild size="lg" className="bg-[#4A89DC] hover:bg-[#4A89DC]/90">
               <Link data-editor-tag="y8kPlKlylu"  href="#meet-your-wonderland-companion">
                 <span data-editor-tag="72ZrbgaX3d"  className="flex items-center gap-2">
                    Follow the White Rabbit
                   <svg data-editor-tag="mAUn8Nby9k"  
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                     <path data-editor-tag="H066z9C80D"  d="M5 12h14"></path>
                     <path data-editor-tag="HS2NOc39ud"  d="M12 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </Link>
              </Button>
             <Button data-editor-tag="d62GemCCL5"  asChild variant="outline" size="lg" className="border-[#4A89DC] text-[#4A89DC] hover:bg-[#F5D76E] hover:text-[#333333]">
               <Link data-editor-tag="hVogthFecb"  href="#a-tale-of-wonder">Learn Our Story</Link>
              </Button>
            </div>
          </div>
          
          {/* Hero image placeholder */}
         <div data-editor-tag="BAcQNBxZ6h"  className="flex-1 flex justify-center md:justify-end">
           <div data-editor-tag="inPBBVw77X"  className="relative w-full max-w-[500px] aspect-square rounded-lg bg-[#F5D76E]/10 flex items-center justify-center">
             <div data-editor-tag="WqXL5gfJfo"  className="absolute inset-0 flex items-center justify-center text-[#4A89DC]/20">
               <span data-editor-tag="T4ciUgKouE"  className="text-sm">WonderBear Hero Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}