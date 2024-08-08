import { useState} from 'react';
import './App.css';
import { XFollowCard } from './XFollowCard';

export function App(){
    //[valor, forma]
    const [name, setName] = useState('midudev')

    return(
        
        <section className="App">
        <XFollowCard 
            userName= {name}>
            Miguel Ángel Durán
        </XFollowCard>

        <XFollowCard
            i userName= 'karen'>
            Pablo Hernández    
        </XFollowCard>

        <button onClick={()=>setName('pedromichel')}>
            Cambio nombre
        </button>
        </section>
        
    )
}