
import { FeaturesSection } from "@/components/home/feature_section";
import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import { Hero } from "@/components/home/hero";
import ProjectTypeSelector from "@/components/home/project_type_selector";
import { ProjectsSection } from "@/components/home/projects_section";
import { StartupPlanSection } from "@/components/home/startup_plan";
import StatCard from "@/components/home/stat_card";

export default function Home() {
  return (
    <main className="text-black bg-stone-800 transition-colors duration-500">
      <Header />
      <Hero />
      {/* <ProjectTypeSelector /> */}
      <FeaturesSection />
      {/* <ProjectsSection /> */}
      {/* <StatCard /> */}
      {/* <StartupPlanSection /> */}
      {/* <ModulesSection /> ✅ Added here */}
      <Footer />
    </main>
  )
}