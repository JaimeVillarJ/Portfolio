import "./styles/app.css";
import { Presentation } from "./components/Presentation";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Route, Routes } from "react-router-dom";
import { Certificates } from "./components/Certificates";
import { Experience } from "./components/Experience";
import { CurriculumVitae } from "./components/Curriculum Vitae";

function App() {
  return (
    <div className="app-container">
      <Presentation />  {/* Sidebar */}
      <Header />        {/* Header */}
      
      <div className="content">
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/curriculumvitae" element={<CurriculumVitae />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;

