import Hero from "@/components/Hero";
import Card from "@/components/Card";
// import Image from "next/image";
import Test from "@/components/WhyHireHero";
import New from "@/components/New";
import Hire from "@/components/Hire";
import Testimonials from "@/components/Testimonials";
import HiringProcess from "@/components/HiringProcess";

export default function Home() {
  return (
    <div className="min-h-screen font-sans ">
      <Hero />
      <Card />
      <Test />
      <New />
      <HiringProcess />
      <Hire />
      <Testimonials />
    </div>
  );
}
