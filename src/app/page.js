import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Banner from "@/components/ui/Banner";
import Client from "@/components/ui/Client";
import NewsLetter from "@/components/ui/NewsLetter";
export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Client />
      <NewsLetter />
      <Footer />
    </div>
  );
}
