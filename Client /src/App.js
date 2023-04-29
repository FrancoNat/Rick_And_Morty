import './App.css';
import Cards from './components/Cards/Cards';
import Nav from "./components/Nav/Nav";
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation } from 'react-router-dom';
import Form from './components/Form/Form'

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'fb7087aaa2cc.5d2351f20585258d287f';


function App() {
   const location = useLocation();
   const [characters, setCharacters] = useState([]);
   
   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== (id))
      setCharacters(charactersFiltered)
   }
    
   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} />
       
         }
         
         <Routes>
            <Route path='/' element={<Form/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/> }/>
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>}/> 
         </Routes>
         
      </div>
   );
};

export default App;
