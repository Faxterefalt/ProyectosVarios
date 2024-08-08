import { useState} from 'react';
import './App.css';
import { XFollowCard } from './XFollowCard';

const users = [
{
    userName: 'miudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true
},
{
    userName : 'phrealb',
    name : 'Pablo H.',
    isFollowing: false
},
{
    userName : 'PacoHdezs',
    name : 'Paco Hdez',
    isFollowing: true
},
{
    userName : 'TMChein',
    name : 'Tomas',
    isFollowing: false
}

]
export function App(){
    //renderizar la lista de usuarios con un solo componente
    //puro javascript
    //lo que devuelve el mapeo de usuarios es lo que queremos renderizar
    //debes usar una key única, el usaername no debería repetirse en la BD (mejor un id)
    return(
        <section className="App">
            {
                users.map(({userName, name, isFollowing},index)=>(
                    
                       <XFollowCard
                        key={userName}
                          userName={userName}
                          initialIsFollowing={isFollowing}
                        >
                        {name}
                        </XFollowCard>
                    
                ))
            }
        </section>
    )
}