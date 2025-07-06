import FullPageSections from "./components/sections/FullPageSections";
import HomeSection from "./components/sections/HomeSection";
import SectionLayout from "./components/sections/LayoutSection";
import SectionFormations from "./components/sections/SectionFormations";
import SectionSkills from "./components/sections/SectionSkills";
import MainLayout from "./layout/MainLayout";
import SectionProjects from "./components/sections/SectionProjects";
import SectionCV from "./components/sections/SectionCV";
import SectionContact from "./components/sections/SectionContact";
import SectionPresentation from "./components/sections/SectionPresentation";

export default function Home() {
  return (
    <MainLayout scrollable={false}>
      <FullPageSections>
        <SectionLayout id="home">
          <HomeSection />
        </SectionLayout>
        <SectionLayout id="presentation">
          <SectionPresentation />
        </SectionLayout>
        <SectionLayout id="formations">
          <SectionFormations />
        </SectionLayout>
        <SectionLayout id="skills">
          <SectionSkills />
        </SectionLayout>
        <SectionLayout id="projects">
          <SectionProjects />
        </SectionLayout>
        <SectionLayout id="cv">
          <SectionCV />
        </SectionLayout>
        <SectionLayout id="contact">
          <SectionContact />
        </SectionLayout>
      </FullPageSections>
    </MainLayout>
  );
}
