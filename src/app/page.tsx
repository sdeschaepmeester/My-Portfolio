import HomeSection from "./components/sections/SectionHero";
import LayoutSection from "./layout/LayoutSection";
import SectionPresentation from "./components/sections/SectionPresentation";
import MainLayout from "./layout/MainLayout";
import SectionProjects from "./components/sections/SectionProjects";
import SectionCV from "./components/sections/SectionCV";
import SectionContact from "./components/sections/SectionContact";

export default function Home() {
  return (
    <MainLayout scrollable={false}>
      <LayoutSection id="home">
        <HomeSection />
      </LayoutSection>
      <LayoutSection id="presentation">
        <SectionPresentation />
      </LayoutSection>
      <LayoutSection id="projects">
        <SectionProjects />
      </LayoutSection>
      {/* <LayoutSection id="cv"> */}
        <SectionCV />
      {/* </LayoutSection> */}
      <LayoutSection id="contact">
        <SectionContact />
      </LayoutSection>
    </MainLayout>
  );
}
