import './App.css';
import { XFollowCard } from './XFollowCard';
export function App(){
    return(
        <>
        <section className="App">
        <XFollowCard 
            userName= 'midudev'>
            Miguel Ángel Durán
        </XFollowCard>

        <XFollowCard
            i userName= 'karen'>
            Pablo Hernández    
        </XFollowCard>
        </section>
        </>
    )
}