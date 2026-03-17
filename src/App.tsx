import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import SplashCursor from './components/SplashCursor';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import StoriesPage from './pages/StoriesPage';
import TeamPage from './pages/TeamPage';
import EngagePage from './pages/EngagePage';
import CareersPage from './pages/CareersPage';
import ApproachPage from './pages/ApproachPage';
import StoryBorderlessPage from './pages/stories/StoryBorderlessPage';
import StoryDinoGamesPage from './pages/stories/StoryDinoGamesPage';
import StoryRunifyPage from './pages/stories/StoryRunifyPage';
import StoryEditionZeroPage from './pages/stories/StoryEditionZeroPage';
import StoryPocketFundPage from './pages/stories/StoryPocketFundPage';
import StoryCollegeStartupsPage from './pages/stories/StoryCollegeStartupsPage';
import StoryPocketDealsPage from './pages/stories/StoryPocketDealsPage';
import StoryDealSourcingPage from './pages/stories/StoryDealSourcingPage';
import StoryDiamondsPage from './pages/stories/StoryDiamondsPage';
import StorySearchFundsPage from './pages/stories/StorySearchFundsPage';
import Story200kDealsPage from './pages/stories/Story200kDealsPage';
import StorySmartPromptPage from './pages/stories/StorySmartPromptPage';
import StoryInspire3Page from './pages/stories/StoryInspire3Page';
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
        <Route path="/story-edition-zero" element={<StoryEditionZeroPage />} />
        <Route path="/story-pocket-fund" element={<StoryPocketFundPage />} />
        <Route path="/story-college-startups" element={<StoryCollegeStartupsPage />} />
        <Route path="/story-pocket-deals" element={<StoryPocketDealsPage />} />
        <Route path="/story-deal-sourcing" element={<StoryDealSourcingPage />} />
        <Route path="/story-diamonds" element={<StoryDiamondsPage />} />
        <Route path="/story-search-funds" element={<StorySearchFundsPage />} />
        <Route path="/story-200k-deals" element={<Story200kDealsPage />} />
        <Route path="/story-smartprompt" element={<StorySmartPromptPage />} />
        <Route path="/story-inspire3" element={<StoryInspire3Page />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
