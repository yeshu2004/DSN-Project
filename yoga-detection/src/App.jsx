import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import LandingPage from "./components/LandingPage";
import YogaPractice from "./components/YogaPractice";

import Lenis from 'lenis'

const App = () => {
    // eslint-disable-next-line no-unused-vars
    const lenis = new Lenis({
      autoRaf: true,
    });
    
  return (
    <div className="App">
      <div id="landing-page">
        <LandingPage />
      </div>
      <div id="about-page">
        <AboutPage />
      </div>
      <div id="yoga-practice">
        <YogaPractice />
      </div>
      <div id="contact-page">
        <ContactPage />
      </div>
    </div>
  );
};

export default App;
