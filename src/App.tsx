
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/common/nav';
import { ExercisePage } from './pages/exercisePage';
import { AboutMePage } from './pages/aboutMePage';
import PokemonProvider from './context/pokemonContext';

export const App = (): JSX.Element => {

  return (
    <PokemonProvider>
       <HashRouter basename="/">
        <Navbar />
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<AboutMePage />} />
          <Route path="/exercise" element={<ExercisePage />} />
        </Routes>
      </HashRouter>
    </PokemonProvider>
     
  )
}
