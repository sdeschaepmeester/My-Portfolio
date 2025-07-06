import FullPageSections from "./components/sections/FullPageSection";
import SectionFormations from "./components/sections/SectionFormations";
import SectionSkills from "./components/sections/SectionSkills";
import MainLayout from "./layout/MainLayout";
import SectionProjects from "./components/sections/SectionProjects";
import SectionCV from "./components/sections/SectionCV";
import SectionContact from "./components/sections/SectionContact";
import SectionPresentation from "./components/sections/SectionPresentation";
import SectionHero from "./components/sections/SectionHero";
import SectionContent from "./components/sections/SectionContent";

export default function Home() {
  return (
    <MainLayout scrollable={false}>
      <FullPageSections>
        <SectionContent id="home">
          <SectionHero />
        </SectionContent>
        <SectionContent id="presentation">
          <SectionPresentation />
        </SectionContent>
        <SectionContent id="formations">
          <SectionFormations />
        </SectionContent>
        <SectionContent id="skills">
          <SectionSkills />
        </SectionContent>
        <SectionContent id="projects">
          <SectionProjects />
        </SectionContent>
        <SectionContent id="cv">
          <SectionCV />
        </SectionContent>
        <SectionContent id="contact">
          <SectionContact />
        </SectionContent>
      </FullPageSections>
    </MainLayout>
  );
}
