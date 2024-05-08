import './App.css';
import {Routes, Route} from "react-router-dom"

//React-slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Pages
import HomePage from './pages/Home.Page';
import MoviePage from './pages/Movie.Page';
import PlaysPage from './pages/Plays.Page';


function App() {
  return (
   <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/movie/:id' element={<MoviePage/>}/>
    <Route path='/plays' element={<PlaysPage/>}/>
   </Routes>
  )
}

export default App;
