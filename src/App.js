import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp/SignUp';
import SignIn from '../src/Components/SingIn/SingIn';
import Welcome from '../src/Components/Welcome/Welcome';
import Level1 from '../src/Components/Level1/Level1';
import Level2 from '../src/Components/Level2/Level2';
import Level3 from '../src/Components/Level3/Level3';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp/>} />
          <Route path='/Welcome' element={<Welcome/>} />
          <Route path='/Level1' element={<Level1/>} />
          <Route path='/Level2' element={<Level2/>} />
          <Route path='/Level3' element={<Level3/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;