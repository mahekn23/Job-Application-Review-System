import logo from './logo.svg';
import './App.css';
import AddCandidate from './AddCandidate';
import CandidateDetails from './CandidateDetails';
import Home from './Home';
import Navbar from './NavBar';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="add" element={<AddCandidate />} />
          <Route path="details" element={<CandidateDetails />} />
          <Route path="*" element={<Navigate to="" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
