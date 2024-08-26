import { useEffect, useState } from 'react';

const FollowMouse = () =>{
  const [enabled, setEnabled] = useState(false)
  const[position,setPosition] = useState({x:0, y:0})
  
  useEffect(()=>{
    console.log('effect',{enabled})

    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', {clientX, clientY})
      setPosition({x:clientX, y:clientY})
    } 

    if(enabled){
      window.addEventListener('pointermove', handleMove)
    }

    //limpieza de eventos (son muy costosos)
    /*
     Desde consola en navegador, ejecuta el siguiente comando para ver quién se suscribió a evento:
      getEventListeners(window) 
    */
    return () => {
      window.removeEventListener('pointermove',handleMove)
    }

  },[enabled])

  //[] -> sólo se ejecuta una vez cuando se monta el componente
  //[enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> se ejecuta cada vez que se renderiza el componente

  useEffect(()=>{
    document.body.classList.toggle('no-cursor',enabled)

    return  () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])
  
  return(
    <>
      <div style={{
        position: 'absolute',
        backgroundColor:'rgba(0,0,0,0.5)',
        border: '3px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left : -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px,${position.y}px)`
      }}
      />

      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguimiento de puntero
      </button>
    </>
    )
}


function App() {

  return (
    <main>
      <FollowMouse/>
   </main>
  );
}

export default App
