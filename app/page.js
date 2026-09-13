import { OrderProvider } from "@/components/OrderProvider";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import ComboSection from "@/components/ComboSection";
import CommitmentSection from "@/components/CommitmentSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StorySection from "@/components/StorySection";
import Footer from "@/components/Footer";
import StickyOrderBar from "@/components/StickyOrderBar";

export default function Home() {
  return (
    <div style={{ background: "#fff", paddingBottom: 84 }}>
      <TopBar />
      <Header />
      <Hero />
      <OrderProvider>
        <ProductSection />
        <ComboSection />
        <CommitmentSection />
        <ServicesSection />
        <TestimonialsSection />
        <StorySection />
        <Footer />
        <StickyOrderBar />
      </OrderProvider>
    </div>
  );
}
