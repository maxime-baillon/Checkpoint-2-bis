import { Route, Routes } from 'react-router-dom';
import Leagues from './components/Leagues';
import RemoveMe from './components/RemoveMe';
import Header from './components/Header';
import LeagueDetail from './components/LeagueDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Leagues />} />
        <Route path="/Leagues/:id" element={<LeagueDetail />} />
      </Routes>
      <RemoveMe />
    </div>
  );
}

export default App;
