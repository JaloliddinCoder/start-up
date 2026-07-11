import Nav from "./components/Nav";
import Hero from "./components/Hero";
import DashboardMockup from "./components/DashboardMockup";
import MetricsGrid from "./components/MetricsGrid";
import TracksGrid from "./components/TracksGrid";
import Prizes from "./components/Prizes";
import WorkflowTimeline from "./components/WorkflowTimeline";
import RegistrationForm from "./components/RegistrationForm";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <DashboardMockup />
        <MetricsGrid />
        <TracksGrid />
        <Prizes />
        {/* <WorkflowTimeline /> */}
        <RegistrationForm />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default App;
