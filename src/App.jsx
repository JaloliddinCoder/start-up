import Nav from "./components/Nav";
import Hero from "./components/Hero";
import DashboardMockup from "./components/DashboardMockup";
import MetricsGrid from "./components/MetricsGrid";
import TracksGrid from "./components/TracksGrid";
import Requirements from "./components/Requirements";
import Prizes from "./components/Prizes";
import WorkflowTimeline from "./components/WorkflowTimeline";
import RegistrationForm from "./components/RegistrationForm";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import { LanguageProvider } from "./i18n/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Nav />
      <main>
        <Hero />
        <DashboardMockup />
        <MetricsGrid />
        <TracksGrid />
        <Requirements />
        <Prizes />
        {/* <WorkflowTimeline /> */}
        <RegistrationForm />
        <Faq />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
