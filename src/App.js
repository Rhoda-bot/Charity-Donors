import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignupPage from './components/signup-page/signup-component';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route exact path='/signup' element={<SignupPage/>}/>
     </Routes>
    </div>
  );
}

export default App;
