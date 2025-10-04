import { About } from "@/components/layout/About";
import { Contact } from "@/components/layout/Contact";
import { HomeSlider } from "@/components/layout/HomeSlider";
import Link from "next/link";
export default function HomePage() {
  return (
    <main>
      <section id="home" className="relative h-[700px] w-full">
        <HomeSlider />
      </section>

      <section id="about" className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <About />
      </section>

      <section id="contact" className="bg-gray-900 text-white py-12">
        <Contact />
      </section>
    </main>
  );
}
