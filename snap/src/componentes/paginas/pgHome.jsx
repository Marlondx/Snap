import React from "react"
import { useNavigate } from "react-router-dom"
import Buttoon from "../compont/button"
import useAuth from "../../bancodeDados/hooks/userAuth"
import style from"./pghome.css"

function PgHome() {
    const {signout}=useAuth()
    const navegar = useNavigate()
    return(
        <article className={style}>
            
            <div className="hom">
                <h1>Home</h1>
            <Buttoon Text="Sair" onClick={()=>[signout(), navegar("/")]}>Sair</Buttoon></div>
     
        </article>   )
}

export default PgHome 


