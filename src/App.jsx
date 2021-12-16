import { Route, Routes } from 'react-router-dom';
import Leagues from './components/Leagues';
import RemoveMe from './components/RemoveMe';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Leagues />} />
      </Routes>
      <RemoveMe />
      <Leagues />
      <Header />
    </div>
  );
}

export default App;
