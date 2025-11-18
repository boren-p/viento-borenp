import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';

export let profiles=[
  {
    id:" 001",
    name: "Mike Wazowsky",
    image: "https://i5.walmartimages.com/asr/0f56d1bc-975b-45fa-9937-833c6a7a5b70.730d00001a23ef23350e306019d6a78e.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    lastMessage: "tengo puesto el ojo en ti"
  },
  {
    id:" 002",
    name:"Superman",
    image:"https://www.eluniverso.com/resizer/cWTgodXm1p0fHbPJQTbyijncKko=/arc-anglerfish-arc2-prod-eluniverso/public/7PLRYZ5EABCG3C6D6UB7AMUTJY.jpg",
    lastMessage:"No sé volar, solo es parte de mi estilo"
  },
  {
    id:" 003",
    name:"Unknown",
    image:"",
    lastMessage:"idk"
  },
  {
    id:" 004",
    name:"",
    image:"",
    lastMessage:""
  },
  {
    id:" 005",
    name:"",
    image:"",
    lastMessage:""
  },
  {
    id:" 006",
    name:"",
    image:"",
    lastMessage:""
  },
  {
    id:" 007",
    name:"",
    image:"",
    lastMessage:""
  },
  {
    id:" 008",
    name:"",
    image:"",
    lastMessage:""
  },
  {
    id:" 009",
    name:"",
    image:"",
    lastMessage:""
  },
  {
    id:" 010",
    name:"",
    image:"",
    lastMessage:""
  },
  {
    id:" 011",
    name:"",
    image:"",
    lastMessage:""
  },
]


const App = () => {
  return (
    <div className='relative w-150 h-screen border overflow-y-auto'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/profile/:id" element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

