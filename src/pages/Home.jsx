import React from 'react';
import { Link } from 'react-router-dom';
import { profiles } from '../App';

const Home = () => {
    return (
        <>
            <div className='sticky top-0 right-0 bg-amber-300 w-full h-10 text-center' >
                LAS PALABRAS SE LAS LLEVA EL VIENTO, MEJOR ESCRIBELAS EN CHAT
            </div>

    
                {/* usuario chat */}
            {profiles.map((profile)=>{
                return(
                    <Link to={`/profile/${profile.id}`}>
                    <div key={profile.id} className='flex gap-5 p-5 border-b'>
                        <div style={{backgroundImage:`url(${profile.image})`}} className='bg-cover bg-no bg-repeat bg-center size-20 border border-gray-300 rounded-full'></div>
                        <div className=''>
                            <h2 className='font-bold text-2xl'>{profile.name}</h2>
                            <h3 className='font-light my-2'>{profile.lastMessage}</h3>
                        </div>
                    </div>
                        </Link>
                )})}
        </>
    );
}

export default Home;
