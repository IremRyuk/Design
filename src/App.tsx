import './Styles/App/app.css'
import SaveData from './Pages/SaveData';
import Home from './Pages/Home';
import Converting from './Pages/Converting';
import InternetTest from './Pages/InternetTest';
import Paint from './Pages/Paint';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<InternetTest />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Paint />} />
        <Route path='/' element={<SaveData />} />
        <Route path='/' element={<Converting />} />
        </Routes>
    </div>
  );
}
