import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import SideProjects from './pages/SideProjects';
import ProjectDetail from './pages/ProjectDetail';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/side-projects" element={<SideProjects />} />
        <Route path="/side-projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </Layout>
  );
}
