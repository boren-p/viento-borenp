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
    name:"Walter White",
    image:"https://album.mediaset.es/eimg/2018/11/16/xKeJzGCIfVnAUfVMr16ve4.jpg?w=1200&h=900",
    lastMessage:"Entre nosotros si que hay quimica"
  },
  {
    id:" 004",
    name:"Jack el Destripador",
    image:"https://res.klook.com/image/upload/w_750,h_469,c_fill,q_85/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ffnm1b0qm18goa0igxi0.jpg",
    lastMessage:"Vamos por partes"
  },
  {
    id:" 005",
    name:"Isaac Newton",
    image:"https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg",
    lastMessage:"No puedo creer la gravedad del asunto"
  },
  {
    id:" 006",
    name:"Coronel Sanders",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Col._Harland_Sanders%27_Portrait_Commissioned_by_Winston_L._Shelton.jpg/250px-Col._Harland_Sanders%27_Portrait_Commissioned_by_Winston_L._Shelton.jpg",
    lastMessage:"Necesito apollo"
  },
  {
    id:" 007",
    name:"Ludwig Van Beethoven",
    image:"https://hips.hearstapps.com/hmg-prod/images/beethoven-600x600.jpg?crop=1xw:1.0xh;center,top&resize=640:*",
    lastMessage:"Escribeme porque no te oigo"
  },
  {
    id:" 008",
    name:"Bill Gates",
    image:"https://forbes.es/wp-content/uploads/2021/12/billgatesheadshot_-_h_2018.jpeg",
    lastMessage:"¿Que haces? Yo sigo aqui, gastandome todo el dinero que Steve Jobs me hizo ganar"
  },
  {
    id:" 009",
    name:"Albert Einstein",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Albert_Einstein_sticks_his_tongue_1951.jpg/250px-Albert_Einstein_sticks_his_tongue_1951.jpg",
    lastMessage:"Mi esposa si que tiene un buen fisico"
  },
  {
    id:" 010",
    name:"Cristobal Colon",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg/992px-Portrait_of_a_Man%2C_Said_to_be_Christopher_Columbus.jpg",
    lastMessage:"Cuando quieras te colonizo"
  },
  {
    id:" 011",
    name:"Dart Vader",
    image:"https://wallpapers.com/images/hd/darth-vader-pictures-qwlyfdkmyjirchwo.jpg",
    lastMessage:"¿Cual es tu helado favorito? el mio es helado oscuro"
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

