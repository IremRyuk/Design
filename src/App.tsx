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
        <Route path='/' element={<Home />} />
        <Route path='/internetTest' element={<InternetTest />} />
        <Route path='/paint' element={<Paint />} />
        <Route path='/savedata' element={<SaveData />} />
        <Route path='/convert' element={<Converting />} />
        </Routes>
    </div>
  );
}
