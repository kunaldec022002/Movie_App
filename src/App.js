import './App.css'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from './Components/Header/Header';
import Home from '../src/Pages/Home/Home';
import MovieList from '../src/Components/Movielist/Movielist';
import Movie from '../src/Pages/movieDetail/movie';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route extact path="/" element={<Home/>} />
          <Route path="movie/:id" element={<Movie/>} />
          <Route path="movies/:type" element={<MovieList/>} />
          <Route path="/*" element={<h2>Error page</h2>} />
      
        </Routes>
      </Router>
    </div>
  );
}

export default App