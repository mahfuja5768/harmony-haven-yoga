import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Banner from "@/components/ui/Banner";
import Certificate from "@/components/ui/Certificate";
import Client from "@/components/ui/Client";
import Contact from "@/components/ui/Contact";
import NewsLetter from "@/components/ui/NewsLetter";
import Schedule from "@/components/ui/Schedule";
export default function HomePage() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <Schedule />
      <Certificate />
      <Client />
      <Contact />
      <NewsLetter />
      <Footer />
    </div>
  );
}
