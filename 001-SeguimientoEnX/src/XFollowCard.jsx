import { useState } from 'react';

export function XFollowCard({children,userName='unknown',initialIsFollowing}){
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  
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
                    <span className='x-followCard-text'>{text}</span>
                    <span className='x-followCard-stopFollow'>Dejar de seguir</span>
            </button>
          </aside>
      </article>
    )
}