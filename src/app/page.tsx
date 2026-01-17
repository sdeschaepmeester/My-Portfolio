import FullPageSections from "./components/sections/FullPageSection";
import MainLayout from "./layout/MainLayout";

import SectionHero from "./components/sections/SectionHero";
import SectionPresentation from "./components/sections/SectionPresentation";
import SectionProjects from "./components/sections/SectionProjects";
import SectionFormations from "./components/sections/SectionFormations";
import SectionSkills from "./components/sections/SectionSkills";
import SectionCV from "./components/sections/SectionCV";
import SectionContact from "./components/sections/SectionContact";
import SectionContent from "./components/sections/SectionContent";

const sections = [
  { id: "home", Component: SectionHero },
  { id: "presentation", Component: SectionPresentation },
  { id: "projects", Component: SectionProjects },
  { id: "formations", Component: SectionFormations },
  { id: "skills", Component: SectionSkills },
  { id: "cv", Component: SectionCV },
  { id: "contact", Component: SectionContact },
];

export default function Home() {
  return (
    <MainLayout scrollable={false}>
      <FullPageSections>
        {sections.map(({ id, Component }) => (
          <SectionContent key={id} id={id}>
            <Component />
          </SectionContent>
        ))}
      </FullPageSections>
    </MainLayout>
  );
}
