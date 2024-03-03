import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BicycleAdd from "./pages/BicycleAdd";
import BicycleList from './pages/BicycleList';
import BicycleUpdate from './pages/BicycleUpdate';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/bicycle-add" element={<BicycleAdd />} />
        <Route path="/bicycle-update/:id" element={<BicycleUpdate />} />
        <Route path="/bicycles-list" element={<BicycleList />} />
        <Route path="/" element={<BicycleList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
