
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignInPage from './components/signin-page/sign-in-component';
import ResetPassword from './components/reset-password/reset-password.component';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route exact path='/signin' element={<SignInPage/>}/>
       <Route  path='/reset-password' element={<ResetPassword/>}/>
     </Routes>
    </div>
  );
}

export default App;
