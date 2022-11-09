import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Header from './Components/Header';
import Posts from './Components/Posts'
import Register from './Components/Register';
import ContexApi from './ContexApi';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>

          <Route path="/" element={<Header/>}>
          </Route>

          <Route path="/register" element={<Register />}>
          </Route>


        </Routes>
      </Router>

    </div>
  );
}

export default App;
