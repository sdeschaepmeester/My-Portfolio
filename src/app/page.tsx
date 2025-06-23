import MainLayout from "./layout/MainLayout";
import FullPageSections from "./components/sections/FullPageSections";
import HomeSection from "./components/sections/HomeSection";
import Presentation from "./presentation/page";
import CV from "./cv/page";

export default function Home() {
  return (
    <MainLayout scrollable={false}>
      <FullPageSections>
        <HomeSection />
        <Presentation />
        <CV />
      </FullPageSections>
    </MainLayout>
  );
}
