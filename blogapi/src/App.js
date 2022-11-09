import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home'
import ContexApi from './ContexApi';
import {AuthProvider} from 'react-auth-kit'
import {RequireAuth} from 'react-auth-kit'



function App() {
  return (
    <div className="App">
      
      <AuthProvider
          authType = {'cookie'}
          authName={'_auth'}
          cookieDomain={window.location.hostname}
          cookieSecure = {false}>
      <Router>
        <Routes>
          <Route path="/" element={<RequireAuth loginPath='/login'>
            <Home/>
          </RequireAuth>} exact ></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login/>}></Route> 
        </Routes>
      </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
