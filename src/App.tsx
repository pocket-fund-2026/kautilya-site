import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import MediaPage from './pages/MediaPage';
import TeamPage from './pages/TeamPage';
import EngagePage from './pages/EngagePage';
import CareersPage from './pages/CareersPage';
import StoryBorderlessPage from './pages/StoryBorderlessPage';
import './pages/style.css';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/engage" element={<EngagePage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/story-borderless" element={<StoryBorderlessPage />} />
      </Route>
    </Routes>
  );
}

export default App;
