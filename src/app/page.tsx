import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Services } from "@/components/Services";
import { GrowthProcess } from "@/components/GrowthProcess";
import { ResultsShowcase } from "@/components/ResultsShowcase";
import { Testimonials } from "@/components/Testimonials";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <Services />
        <GrowthProcess />
        <ResultsShowcase />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
