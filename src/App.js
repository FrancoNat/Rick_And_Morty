import './App.css';
import Cards from './components/Cards/Cards';
import Nav from "./components/Nav/Nav";
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'fb7087aaa2cc.5d2351f20585258d287f';

const email = 'francob@gmail.com';
const password = '120917!';

function App() {
 
   
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const login = (userData) => {
     if(userData.email === email && userData.password === password){
      setAccess(true);
      navigate('/home');
     }
   }
   
 

   useEffect(() => {
      !access && navigate('/')
   }, [access])
    
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
            location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess} />
       
         }
         
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/> }/>
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>}/> 
            <Route path='/Favorites' element={<Favorites/>} />
         </Routes>
         
      </div>
   );

};

export default App;
