import style from "./cadastrohe.css"
import {Link} from 'react-router-dom'

function Catras ({to,texto}){
    return(
        <div className={style}>
            <header className="navermenu2">
             <span className='cadastroA'><Link to={to}>{texto}</Link></span>
             </header>
        </div>
    )
}

export default Catras