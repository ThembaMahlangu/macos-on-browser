import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <div className="flex items-center justify-center">
        <Footer />
      </div>
    </>
  );
}
