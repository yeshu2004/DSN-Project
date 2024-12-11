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
      <LandingPage/>
      <AboutPage/>
      <YogaPractice/>
      <ContactPage/>
    </div>
  );
};

export default App;
