import { useState } from "react";

import './Header.css'

function Header() {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active)
    }


    return (

        <div className="App">
            <div>
                <ul className='logo'>
                    <li>W.</li>
                </ul>
            </div>
            <div className={active ? 'icon iconActive' : 'icon'} onClick={ToggleMode}>
                <div className="hamburguer"><img src="./src/assets/icon-menu.svg" alt="" /></div>
                <div className="hamburguerClose hambuerguerIcon"><img src="./src/assets/icon-menu-close.svg" alt="" /></div>
            </div>
            <div className={active ? 'menu menoOpen' : 'menu menuClose'}>
                <div className="list">

                    <ul className="listItems" >
                        <li >Home</li>
                        <li >New</li>
                        <li >Popular</li>
                        <li >Trending</li>
                        <li >Categories</li>
                    </ul>
                </div>
            </div>
        </div>



    )
}

export default Header;