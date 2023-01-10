
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movieform from './Components/Movieform';
import Movieslist from './Components/Movieslist';
import Navbar from './Components/Navbar';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Movieform/>}/>
  <Route path="/movieslist" element={<Movieslist/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
