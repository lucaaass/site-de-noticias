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
                    <li><img src="https://utfs.io/f/fd360ad1-ea14-4dec-9bbf-60da0ba0fa2f-1zbfv.svg" alt="" /></li>
                </ul>
            </div>
            <div className={active ? 'icon iconActive' : 'icon'} onClick={ToggleMode}>
                <div className="hamburguer"><img src="https://utfs.io/f/ec5437b5-6a91-46fb-8d17-8c8bebb64fc2-nrg1cd.svg" alt="" /></div>
                <div className="hamburguerClose hambuerguerIcon"><img src="https://utfs.io/f/74e73b26-b57b-42fb-b535-50cd97080e68-idbhgi.svg" alt="" /></div>
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