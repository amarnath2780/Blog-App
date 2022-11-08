import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Header from './Components/Header';
import Posts from './Components/Posts'
import ContexApi from './ContexApi';

function App() {
  return (
    <div className="App">
      <Header/>
      <Posts/>

    </div>
  );
}

export default App;
