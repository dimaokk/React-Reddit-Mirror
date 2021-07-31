import * as React from 'react'
import headerCss from './Header.css'

const Header = () =>  {
    return (
        <header> 
            <h1 className = {headerCss.title}> Hello React 111 </h1>
         </header>
    )
}

export default Header;