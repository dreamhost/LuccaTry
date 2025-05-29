import { Header } from "@src/components/layout/Header";
import { Footer } from "@src/components/layout/Footer";
import { Hero } from "@src/components/sections/Hero";
import { Features } from "@src/components/sections/Features";
import { Testimonials } from "@src/components/sections/Testimonials";
import { ProductShowcase } from "@src/components/sections/wonderbear/ProductShowcase";
import { Story } from "@src/components/sections/wonderbear/Story";
import { FAQ } from "@src/components/sections/wonderbear/FAQ";
import { Purchase } from "@src/components/sections/wonderbear/Purchase";

export default function Home() {
  return (
   <div data-editor-tag="yS7kRD2T2f"  className="flex min-h-screen flex-col">
     <Header data-editor-tag="RdTw5wPNSk"  />
     <main data-editor-tag="Rdl8b0w4zY"  className="flex-1">
       <Hero data-editor-tag="98DaXX7ezQ"  />
       <ProductShowcase data-editor-tag="sWdqee5218"  />
       <Story data-editor-tag="qbI98fIE8M"  />
       <Features data-editor-tag="UM11KOy7eR"  />
       <Testimonials data-editor-tag="iS14fn6KV4"  />
       <FAQ data-editor-tag="CemmHs5FgF"  />
       <Purchase data-editor-tag="rfH6fnhBx9"  />
      </main>
     <Footer data-editor-tag="ateWVHsAg2"  />
    </div>
  );
}