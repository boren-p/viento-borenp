import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { profiles } from '../App';

const Profile = () => {
    let { id } = useParams();
    let profileSelected = profiles.find(profile => profile.id === id);

    let [messages, setMessages] = useState([]);
    let [sendMsj, setSendMsj] = useState("");

    const handleSend = () => {
        if (sendMsj.trim() === "") return;

        setMessages([...messages, sendMsj]);
        setSendMsj("");
    };

    return (
        <>
            <div className='sticky flex flex-row items-center gap-5 p-5 top-0 right-0 bg-amber-300 w-full h-20 text-center'>
                <Link to="/">volver</Link>
                <div className="flex gap-5 items-center">
                    <div style={{ backgroundImage: `url(${profileSelected.image})` }} className='bg-cover bg-no bg-repeat bg-center size-15 border border-gray-300 rounded-full'></div>
                    <h2 className='font-bold text-2xl'>{profileSelected.name}</h2>
                </div>
            </div>

            {/* campo de mensajes */}
            <div className='bg-neutral-600 w-full gap-y-3 p-5'>
                <div className='bg-amber-300 max-w-90 rounded-2xl p-3'>
                    {profileSelected.lastMessage}
                </div>

                {messages.map((msj, i) => (
                    <div key={i} className='bg-amber-600 max-w-90 rounded-2xl p-3'>
                        {msj}
                    </div>
                ))}
            </div>

            {/* campo de texto */}
            <div className='fixed bottom-0 left-0 bg-amber-300 w-150 h-10 flex items-center justify-around'>
                <input 
                    type="text"
                    placeholder='Escribe un mensaje...'
                    className='border w-[80%]'
                    value={sendMsj}
                    onChange={(e) => setSendMsj(e.target.value)}
                />
                <button onClick={handleSend}>ENVIAR</button>
            </div>
        </>
    );
}

export default Profile;