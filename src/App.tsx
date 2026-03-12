import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import SplashCursor from './components/SplashCursor';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import StoriesPage from './pages/StoriesPage';
import TeamPage from './pages/TeamPage';
import EngagePage from './pages/EngagePage';
import CareersPage from './pages/CareersPage';
import StoryBorderlessPage from './pages/StoryBorderlessPage';
import StoryDinoGamesPage from './pages/StoryDinoGamesPage';
import ApproachPage from './pages/ApproachPage';
import StoryRunifyPage from './pages/StoryRunifyPage';
import './pages/style.css';

function App() {
  return (
    <>
      <SplashCursor />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        <Route path="/approach" element={<ApproachPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/engage" element={<EngagePage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/story-borderless" element={<StoryBorderlessPage />} />
        <Route path="/story-dino-games" element={<StoryDinoGamesPage />} />
        <Route path="/story-runify" element={<StoryRunifyPage />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
