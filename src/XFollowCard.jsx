import { useState } from 'react';

export function XFollowCard({children,userName='unknown'}){
  const [isFollowing, setIsFollowing] = useState(false)
  
  console.log('[XFollowCard] renderizado con userName:', userName);
  const text = isFollowing ? 'Siguiendo' : 'Seguir' //ternaria
  
    const buttonClassName = isFollowing 
      ? 'x-followCard-button is-following'
      :'x-followCard-button'

  const handleClick = () =>{
    setIsFollowing(!isFollowing)
  }

    return(
        <article className='x-followCard'>
        <header className='x-followCard-header'>
          <img 
            className='x-followCard-avatar'
            alt="El avatar de minudev"
            src={`https://unavatar.io/${userName}`}/>
          <div className='x-followCard-info'>
            <strong>{children}</strong>
            <span className='x-followCard-infoUsername'>@{userName}</span>
          </div>
        </header>

          <aside>
            <button 
                className={buttonClassName} onClick ={handleClick}>
                    {text}
            </button>
          </aside>
      </article>
    )
}