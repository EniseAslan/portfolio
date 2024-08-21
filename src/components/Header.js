import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div className='header'>
<Link className='link' to="/">Anasayfa</Link>
<Link className='link' to="/about">Hakkımda</Link>
<Link className='link' to="/contact">İletişim</Link>

    </div>


  )
}

export default Header