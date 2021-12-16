import Leagues from './components/Leagues';
import RemoveMe from './components/RemoveMe';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Leagues />} />
        <Route path="/equipe/:id" element={} />
      </Routes>
      <RemoveMe />
      <Leagues />
      <Header />
    </div>
  );
}

export default App;
