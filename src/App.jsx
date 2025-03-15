
import MovieList from './Components/MovieList';
import './App.css';
import MovieCard from './Components/MovieCard';
import AjoutRemoveList from './Components/AjoutRemoveList';
import MovieDescription from './Components/MovieDescription';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      
      <Routes>
      <Route path="/" element={<MovieList/>} />
      <Route path="/movie/:id" element={<MovieDescription/>} /> 
        
        
      </Routes>


    </>  

  );
}

export default App;