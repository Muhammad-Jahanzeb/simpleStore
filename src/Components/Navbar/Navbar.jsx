import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { ShopContext } from '../../Context/context'

import './Navbar.css'

const Navbar = () => {
  const {item} = useContext(ShopContext)

  return (
    <div className='navContainer'>
        <Link to ='/'>
          <span>SimpleStore</span>
        </Link>
        <div className='linkContainer'>
            <Link to ='/'>Home</Link>
            <Link to = '/cart'>
              <FontAwesomeIcon icon={faCartShopping}/>
              {item!==0?<div className="smallCircle"></div>:null}
            </Link>
        </div>
    </div>
  )
}

export default Navbar
