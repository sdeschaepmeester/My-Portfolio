import FullPageSections from "./components/sections/FullPageSections";
import HomeSection from "./components/sections/HomeSection";
import SectionLayout from "./components/sections/LayoutSection";
import Contact from "./contact/page";
import CV from "./cv/page";
import MainLayout from "./layout/MainLayout";
import Presentation from "./presentation/page";
import Projects from "./projects/page";
import Skills from "./skills/page";

export default function Home() {
  return (
    <MainLayout scrollable={false}>
      <FullPageSections>
        <SectionLayout id="home">
          <HomeSection />
        </SectionLayout>
        <SectionLayout id="presentation">
          <Presentation />
        </SectionLayout>
        <SectionLayout id="projects">
          <Projects />
        </SectionLayout>
        <SectionLayout id="skills">
          <Skills />
        </SectionLayout>
        <SectionLayout id="cv">
          <CV />
        </SectionLayout>
        <SectionLayout id="contact">
          <Contact />
        </SectionLayout>
      </FullPageSections>
    </MainLayout>
  );
}
