import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";


export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}