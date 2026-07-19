import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ClinicHomepage from "@/components/home/ClinicHomepage";

export default function Home() {
  return (
    <>
      <Navbar overlay />
      <ClinicHomepage />
      <Footer />
    </>
  );
}
