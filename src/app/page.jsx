import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Personas from "@/components/Personas";
import Steps from "@/components/Steps";
import Features from "@/components/Features";
import Marquee from "@/components/Marquee";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Personas />
        <Steps />
        <Features />
        <Marquee />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
