import {useNavigate} from 'react-router-dom'
import style from './buto.css'
import React from 'react'

function Button () {
    const navegar = useNavigate()

    function Entrar (){
        
        navegar ("/login")
    }
    return(
        <div className={style}>
            <label className='but'>
            
                <button onClick={Entrar}><b>Começar</b> </button>
            </label>
        </div>
    )
}
 //    <Link to='#'><b>Começar</b></Link>
export default Button