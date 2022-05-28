import { useState, useEffect } from "react";
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";
import About from "./views/About";
import Home from './views/Home'
import Services from "./views/Services";

import LoadingScreen from "./components/LoadingScreen";
import { ThemeProvider } from "./themeProvider";

import Projects from "./views/Projects";

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <ThemeProvider>
      <>

        {/* {!loading ? ( */}
          <div >
            <Navbar />
            <Home />
            <About />
            <Projects />
            <Services />
          
            {/* <Contact /> */}
          </div>

        {/* // ) : (
        //   <LoadingScreen />
        // )} */}
      </>
    </ThemeProvider>

  );
}

export default App;
