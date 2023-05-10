import { Routes, Route,  Navigate } from 'react-router-dom';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import Forgot from './pages/forgot';
import Videos from './pages/main/Videos';
import Live from './pages/main/Live';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element ={<Navigate to = "/videos"/>} />
        <Route path = "/forgot" element = {<Forgot/>} />
        <Route path = "/signin" element = {<SignIn/>} />
        <Route path = "/signup" element = {<SignUp />} />
        <Route path = "/videos" element = {<Videos/>}/>
        <Route path = "/live" element = {<Live/>}/>
      </Routes>
    </div>
  );
}

export default App;
