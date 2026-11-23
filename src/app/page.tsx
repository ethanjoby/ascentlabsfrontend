import { Hero } from "@/components/marketing/Hero";
import { LiveLab } from "@/components/marketing/LiveLab";
import { ApiSection, Contact, CostCalc, FinalCta, Footer, Pipeline, Workflows } from "@/components/marketing/Sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <LiveLab />
      <Pipeline />
      <CostCalc />
      <Workflows />
      <ApiSection />
      <Contact />
      <FinalCta />
      <Footer />
    </main>
  );
}
