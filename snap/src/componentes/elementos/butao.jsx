import {Link} from 'react-router-dom'
import style from './buto.css'

function Button () {
    return(
        <div className={style}>
            <label className='but'>
            
                <button><b>Começar</b> </button>
            </label>
        </div>
    )
}
 //    <Link to='#'><b>Começar</b></Link>
export default Button