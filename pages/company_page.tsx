
import { FeaturesSection } from "@/components/home/feature_section";
import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import ProjectTypeSelector from "@/components/home/project_type_selector";
import { ProjectsSection } from "@/components/home/projects_section";
import StatCard from "@/components/home/stat_card";

// import { ModulesSection } from "@/components/home/modules_section";
// import { ProjectsSection } from "@/components/home/projects_section";
// import { StartupPlanSection } from "@/components/home/startup_plan";

import { VoidHero } from "@/components/void_core/void_hero";

export default function CompanyHome() {
  return (
    <main className="text-black bg-stone-800 transition-colors duration-500">
      <Header />
      {/* <BackgroundCode /> */}
      <VoidHero />
      {/* <ProjectTypeSelector /> */}
      {/* <FeaturesSection />
      <ProjectsSection />
      <StatCard /> */}
      {/* <StartupPlanSection /> */}
      {/* <ModulesSection /> ✅ Added here */}
      <Footer />
    </main>
  )
}