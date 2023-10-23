import { BrowserRouter } from "react-router-dom";
import "./App.css";
import {
  Contact,
  Works,
  About,
  Navbar,
  Hero,
  Experience,
  Tech,
  Feedbacks,
  StarsCanvas,
  ProjectDetails,
} from "./components";
import { Route, Routes } from "react-router-dom";
const App = () => {
  const mainPage = (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/project/:name`} element={<ProjectDetails />} />
        <Route path='/' element={mainPage}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
