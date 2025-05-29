import Link from "next/link";
import { Button } from "@src/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@src/components/ui/sheet";

export function Header() {
  return (
   <header data-editor-tag="SGWlSPLeZ8"  className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
     <div data-editor-tag="wWq3O7RFCY"  className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
       <div data-editor-tag="aDEurDkGBd"  className="flex gap-6 md:gap-10">
         <Link data-editor-tag="cttcFJAEnn"  href="/" className="flex items-center space-x-2">
           <span data-editor-tag="NDHIZso5Sb"  className="inline-block font-bold text-xl text-[#4A89DC]">WonderBear</span>
          </Link>
         <nav data-editor-tag="MwYGLdlqCB"  className="hidden md:flex gap-6">
           <Link data-editor-tag="u7b3O7obGS" 
              href="#meet-your-wonderland-companion"
              className="flex items-center text-sm font-medium text-foreground/60 transition-colors hover:text-[#4A89DC]"
            >
              Product
            </Link>
           <Link data-editor-tag="SaSgRD9LVt" 
              href="#a-tale-of-wonder"
              className="flex items-center text-sm font-medium text-foreground/60 transition-colors hover:text-[#4A89DC]"
            >
              Story
            </Link>
           <Link data-editor-tag="ou7dqUpIYG" 
              href="#curiouser-and-curiouser"
              className="flex items-center text-sm font-medium text-foreground/60 transition-colors hover:text-[#4A89DC]"
            >
              Features
            </Link>
           <Link data-editor-tag="aAAbRzTog8" 
              href="#tales-from-wonderland"
              className="flex items-center text-sm font-medium text-foreground/60 transition-colors hover:text-[#4A89DC]"
            >
              Testimonials
            </Link>
           <Link data-editor-tag="10Htf20i6T" 
              href="#questions-from-the-caterpillar"
              className="flex items-center text-sm font-medium text-foreground/60 transition-colors hover:text-[#4A89DC]"
            >
              FAQ
            </Link>
          </nav>
        </div>
       <div data-editor-tag="tbZJcjhwCM"  className="hidden md:flex items-center space-x-4">
         <Button data-editor-tag="Nr3ElA5aM2"  asChild variant="outline" className="border-[#4A89DC] text-[#4A89DC] hover:bg-[#F5D76E] hover:text-[#333333]">
           <Link data-editor-tag="coHwKfKTNR"  href="#tea-party-invitation">Join Waitlist</Link>
          </Button>
         <Button data-editor-tag="rINOfsbPHC"  asChild className="bg-[#4A89DC] hover:bg-[#4A89DC]/90">
           <Link data-editor-tag="sNOwyd3Jor"  href="#tea-party-invitation">Order Now</Link>
          </Button>
        </div>
       <Sheet data-editor-tag="ESuGLbOefT" >
         <SheetTrigger data-editor-tag="W7yZko226B"  asChild className="md:hidden">
           <Button data-editor-tag="MMBExHxrcq"  variant="outline" size="icon">
             <svg data-editor-tag="395N8lMAxf" 
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
               <line data-editor-tag="bmgmvGRvf4"  x1="3" y1="6" x2="21" y2="6" />
               <line data-editor-tag="jIBpmRl3Lr"  x1="3" y1="12" x2="21" y2="12" />
               <line data-editor-tag="xf2ihwXZKs"  x1="3" y1="18" x2="21" y2="18" />
              </svg>
             <span data-editor-tag="8RH0J4BMTS"  className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
         <SheetContent data-editor-tag="Zgi3of2XvR"  side="right" className="w-[240px] sm:w-[300px]">
           <div data-editor-tag="Y245O24ucV"  className="flex flex-col gap-4 py-6">
             <Link data-editor-tag="vjp7uwGUxy" 
                href="#meet-your-wonderland-companion"
                className="text-sm font-medium hover:text-[#4A89DC]"
              >
                Product
              </Link>
             <Link data-editor-tag="LcKkXyGxH9" 
                href="#a-tale-of-wonder"
                className="text-sm font-medium hover:text-[#4A89DC]"
              >
                Story
              </Link>
             <Link data-editor-tag="I6Qimk8YOr" 
                href="#curiouser-and-curiouser"
                className="text-sm font-medium hover:text-[#4A89DC]"
              >
                Features
              </Link>
             <Link data-editor-tag="4AjzK09frb" 
                href="#tales-from-wonderland"
                className="text-sm font-medium hover:text-[#4A89DC]"
              >
                Testimonials
              </Link>
             <Link data-editor-tag="eHYyR3tTwZ" 
                href="#questions-from-the-caterpillar"
                className="text-sm font-medium hover:text-[#4A89DC]"
              >
                FAQ
              </Link>
             <div data-editor-tag="YEaVAzUM5J"  className="flex flex-col gap-2 mt-4">
               <Button data-editor-tag="KgeFaueiFI"  asChild variant="outline" className="border-[#4A89DC] text-[#4A89DC] hover:bg-[#F5D76E] hover:text-[#333333]">
                 <Link data-editor-tag="Q8IdJctKfr"  href="#tea-party-invitation">Join Waitlist</Link>
                </Button>
               <Button data-editor-tag="UpwOfvuWDs"  asChild className="bg-[#4A89DC] hover:bg-[#4A89DC]/90">
                 <Link data-editor-tag="3RRPyXjaw8"  href="#tea-party-invitation">Order Now</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}